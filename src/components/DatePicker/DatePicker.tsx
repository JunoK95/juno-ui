import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './DatePicker.module.scss'

export type DatePickerMode = 'date' | 'datetime'
export type DatePickerSize = 'sm' | 'md' | 'lg'

export interface DatePickerProps {
  value?:       Date | null
  onChange?:    (date: Date | null) => void
  mode?:        DatePickerMode
  size?:        DatePickerSize
  label?:       string
  placeholder?: string
  disabled?:    boolean
  min?:         Date
  max?:         Date
  className?:   string
}

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const DOW = ['Su','Mo','Tu','We','Th','Fr','Sa']

type Cell = { day: number; month: number; year: number; current: boolean }

function buildCalendar(year: number, month: number): Cell[][] {
  const firstDay      = new Date(year, month, 1).getDay()
  const daysInMonth   = new Date(year, month + 1, 0).getDate()
  const daysInPrevMo  = new Date(year, month, 0).getDate()

  const cells: Cell[] = []

  for (let i = firstDay - 1; i >= 0; i--) {
    const m = month === 0 ? 11 : month - 1
    const y = month === 0 ? year - 1 : year
    cells.push({ day: daysInPrevMo - i, month: m, year: y, current: false })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, month, year, current: true })
  }
  const remaining = 42 - cells.length
  for (let d = 1; d <= remaining; d++) {
    const m = month === 11 ? 0 : month + 1
    const y = month === 11 ? year + 1 : year
    cells.push({ day: d, month: m, year: y, current: false })
  }

  const weeks: Cell[][] = []
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))
  return weeks
}

function formatDate(d: Date, mode: DatePickerMode): string {
  const base = `${MONTHS_SHORT[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
  if (mode === 'datetime') {
    const h = String(d.getHours()).padStart(2, '0')
    const m = String(d.getMinutes()).padStart(2, '0')
    return `${base}  ${h}:${m}`
  }
  return base
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function cellDate(c: Cell) { return new Date(c.year, c.month, c.day) }

export function DatePicker({
  value,
  onChange,
  mode        = 'date',
  size        = 'md',
  label,
  placeholder = 'Select date…',
  disabled    = false,
  min,
  max,
  className,
}: DatePickerProps) {
  const today = new Date()
  const [open, setOpen] = useState(false)
  const [viewYear,  setViewYear]  = useState(value?.getFullYear()  ?? today.getFullYear())
  const [viewMonth, setViewMonth] = useState(value?.getMonth()     ?? today.getMonth())
  const [hours,   setHours]   = useState(value?.getHours()   ?? 12)
  const [minutes, setMinutes] = useState(value?.getMinutes() ?? 0)
  const ref        = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null)

  function measure() {
    if (!triggerRef.current) return
    const r = triggerRef.current.getBoundingClientRect()
    setPos({ top: r.bottom + 5, left: r.left })
  }

  useEffect(() => {
    if (!open) return
    function onMousedown(e: MouseEvent) {
      const t = e.target as Node
      if (ref.current?.contains(t) || popoverRef.current?.contains(t)) return
      setOpen(false)
    }
    function onKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onMousedown)
    document.addEventListener('keydown',   onKeydown)
    window.addEventListener('resize',      measure)
    window.addEventListener('scroll',      measure, true)
    return () => {
      document.removeEventListener('mousedown', onMousedown)
      document.removeEventListener('keydown',   onKeydown)
      window.removeEventListener('resize',      measure)
      window.removeEventListener('scroll',      measure, true)
    }
  }, [open])

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  function selectCell(cell: Cell) {
    const d = new Date(cell.year, cell.month, cell.day, hours, minutes, 0, 0)
    onChange?.(d)
    if (mode === 'date') setOpen(false)
    // For datetime, keep open so user can adjust time
  }

  function isDisabled(cell: Cell) {
    const d = cellDate(cell)
    if (min && d < new Date(min.getFullYear(), min.getMonth(), min.getDate())) return true
    if (max && d > new Date(max.getFullYear(), max.getMonth(), max.getDate())) return true
    return false
  }

  function onHoursChange(h: number) {
    setHours(h)
    if (value) onChange?.(new Date(value.getFullYear(), value.getMonth(), value.getDate(), h, minutes))
  }
  function onMinutesChange(m: number) {
    setMinutes(m)
    if (value) onChange?.(new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, m))
  }

  const weeks = buildCalendar(viewYear, viewMonth)

  const triggerCls = [styles.trigger, styles[size], open ? styles.triggerOpen : '', disabled ? styles.triggerDisabled : ''].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      {label && <span className={styles.label}>{label}</span>}

      <button
        ref={triggerRef}
        type="button"
        className={triggerCls}
        onClick={() => { if (!disabled) { if (!open) measure(); setOpen(o => !o) } }}
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <svg className={styles.calIcon} width="14" height="14" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M1 7h14" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M5 1v4M11 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span className={value ? styles.triggerValue : styles.triggerPlaceholder}>
          {value ? formatDate(value, mode) : placeholder}
        </span>
        {value && (
          <span
            className={styles.clearBtn}
            role="button"
            aria-label="Clear"
            onClick={e => { e.stopPropagation(); onChange?.(null) }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 2l8 8M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
        )}
      </button>

      {open && pos && createPortal(
        <div ref={popoverRef} className={styles.popover} style={{ top: pos.top, left: pos.left }} role="dialog" aria-label="Date picker">

          {/* ── Month navigation ── */}
          <div className={styles.header}>
            <button className={styles.navBtn} onClick={prevMonth} aria-label="Previous month">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span className={styles.monthLabel}>{MONTHS[viewMonth]} {viewYear}</span>
            <button className={styles.navBtn} onClick={nextMonth} aria-label="Next month">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* ── Day-of-week headers ── */}
          <div className={styles.grid}>
            {DOW.map(d => <div key={d} className={styles.dow}>{d}</div>)}

            {weeks.map((week, wi) =>
              week.map((cell, di) => {
                const cd    = cellDate(cell)
                const sel   = value && isSameDay(cd, value)
                const isToday = isSameDay(cd, today)
                const dis   = isDisabled(cell)

                const cls = [
                  styles.day,
                  !cell.current  ? styles.dayOtherMonth : '',
                  sel            ? styles.daySelected   : '',
                  isToday && !sel ? styles.dayToday     : '',
                  dis            ? styles.dayDisabled   : '',
                ].filter(Boolean).join(' ')

                return (
                  <button
                    key={`${wi}-${di}`}
                    className={cls}
                    onClick={() => !dis && selectCell(cell)}
                    disabled={dis}
                    tabIndex={dis ? -1 : 0}
                  >
                    {cell.day}
                  </button>
                )
              })
            )}
          </div>

          {/* ── Time picker (datetime mode only) ── */}
          {mode === 'datetime' && (
            <div className={styles.timePicker}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 4.5V8l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <select
                className={styles.timeSelect}
                value={hours}
                onChange={e => onHoursChange(Number(e.target.value))}
                aria-label="Hours"
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={i}>{String(i).padStart(2, '0')}</option>
                ))}
              </select>
              <span className={styles.timeSep}>:</span>
              <select
                className={styles.timeSelect}
                value={minutes}
                onChange={e => onMinutesChange(Number(e.target.value))}
                aria-label="Minutes"
              >
                {Array.from({ length: 12 }, (_, i) => i * 5).map(m => (
                  <option key={m} value={m}>{String(m).padStart(2, '0')}</option>
                ))}
              </select>
            </div>
          )}

          {/* ── Footer actions ── */}
          <div className={styles.footer}>
            <button className={styles.footerBtn} onClick={() => { onChange?.(null); setOpen(false) }}>Clear</button>
            <button className={styles.footerBtnPrimary} onClick={() => setOpen(false)}>Done</button>
          </div>

        </div>,
        document.body
      )}
    </div>
  )
}
