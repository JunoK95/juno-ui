import { useState } from 'react'
import styles from './Calendar.module.scss'

export interface CalendarRange {
  from: Date | null
  to:   Date | null
}

export interface CalendarProps {
  // Single mode
  value?:         Date | null
  onChange?:      (date: Date) => void
  defaultValue?:  Date | null
  // Range mode
  mode?:          'single' | 'range'
  rangeValue?:    CalendarRange
  onRangeChange?: (range: CalendarRange) => void
  defaultRangeValue?: CalendarRange
  // Shared
  min?:       Date
  max?:       Date
  className?: string
}

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DOW    = ['Su','Mo','Tu','We','Th','Fr','Sa']

type Cell = { day: number; month: number; year: number; current: boolean }

function buildCalendar(year: number, month: number): Cell[][] {
  const firstDay     = new Date(year, month, 1).getDay()
  const daysInMonth  = new Date(year, month + 1, 0).getDate()
  const daysInPrevMo = new Date(year, month, 0).getDate()
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

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth()    === b.getMonth()    &&
         a.getDate()     === b.getDate()
}

function cellDate(c: Cell) { return new Date(c.year, c.month, c.day) }

// Normalize so rangeA <= rangeB
function sortRange(a: Date, b: Date): [Date, Date] {
  return a <= b ? [a, b] : [b, a]
}

export function Calendar({
  value,
  onChange,
  defaultValue,
  mode = 'single',
  rangeValue,
  onRangeChange,
  defaultRangeValue,
  min,
  max,
  className,
}: CalendarProps) {
  const today = new Date()

  // ── Single mode state ──────────────────────────────────────────────────────
  const controlledSingle = value !== undefined
  const [internalSingle, setInternalSingle] = useState<Date | null>(defaultValue ?? null)
  const selected = controlledSingle ? value : internalSingle

  // ── Range mode state ───────────────────────────────────────────────────────
  const controlledRange = rangeValue !== undefined
  const [internalRange, setInternalRange] = useState<CalendarRange>(
    defaultRangeValue ?? { from: null, to: null }
  )
  const range = controlledRange ? rangeValue! : internalRange
  const [hoverDate, setHoverDate] = useState<Date | null>(null)

  // ── View state ─────────────────────────────────────────────────────────────
  const initDate = mode === 'range'
    ? (range.from ?? today)
    : (selected ?? today)

  const [viewYear,  setViewYear]  = useState(initDate.getFullYear())
  const [viewMonth, setViewMonth] = useState(initDate.getMonth())

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  // ── Disabled check ─────────────────────────────────────────────────────────
  function isDisabled(cell: Cell) {
    const d = cellDate(cell)
    if (min && d < new Date(min.getFullYear(), min.getMonth(), min.getDate())) return true
    if (max && d > new Date(max.getFullYear(), max.getMonth(), max.getDate())) return true
    return false
  }

  // ── Single select ──────────────────────────────────────────────────────────
  function handleSingleSelect(cell: Cell) {
    if (isDisabled(cell)) return
    const d = cellDate(cell)
    if (!controlledSingle) setInternalSingle(d)
    onChange?.(d)
  }

  // ── Range select ───────────────────────────────────────────────────────────
  function handleRangeSelect(cell: Cell) {
    if (isDisabled(cell)) return
    const d = cellDate(cell)

    let next: CalendarRange
    if (!range.from || range.to) {
      // Start new range
      next = { from: d, to: null }
    } else if (isSameDay(d, range.from)) {
      // Click same start day — clear
      next = { from: null, to: null }
    } else {
      // Complete range (auto-sort so from <= to)
      const [from, to] = sortRange(range.from, d)
      next = { from, to }
    }

    if (!controlledRange) setInternalRange(next)
    onRangeChange?.(next)
  }

  // ── Range display helpers ──────────────────────────────────────────────────
  // Effective end: use confirmed `to`, otherwise hover preview
  const effectiveTo = range.to ?? (range.from && !range.to ? hoverDate : null)
  const [displayFrom, displayTo] = range.from && effectiveTo
    ? sortRange(range.from, effectiveTo)
    : [range.from, null]

  function getRangeClasses(d: Date): string {
    if (!displayFrom) return ''

    const isStart = isSameDay(d, displayFrom)
    const isEnd   = displayTo != null && isSameDay(d, displayTo)
    const between = displayTo != null && d > displayFrom && d < displayTo

    if (isStart && isEnd)  return styles.cellRangeSingle
    if (isStart)           return styles.cellRangeStart
    if (isEnd)             return styles.cellRangeEnd
    if (between)           return styles.cellInRange
    return ''
  }

  const weeks = buildCalendar(viewYear, viewMonth)

  return (
    <div className={[styles.calendar, className].filter(Boolean).join(' ')}>
      {/* ── Header ── */}
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

      {/* ── Day-of-week row ── */}
      <div className={styles.dowRow}>
        {DOW.map(d => <div key={d} className={styles.dow}>{d}</div>)}
      </div>

      {/* ── Day grid ── */}
      <div className={styles.grid}>
        {weeks.map((week, wi) =>
          week.map((cell, di) => {
            const cd      = cellDate(cell)
            const dis     = isDisabled(cell)
            const isToday = isSameDay(cd, today)

            // Single mode day classes
            const sel = mode === 'single' && selected != null && isSameDay(cd, selected)

            // Range mode: is this an edge (start/end)?
            const isRangeEdge = mode === 'range' && displayFrom != null && (
              isSameDay(cd, displayFrom) ||
              (displayTo != null && isSameDay(cd, displayTo))
            )

            const dayCls = [
              styles.day,
              !cell.current                     ? styles.dayOtherMonth : '',
              sel || isRangeEdge                ? styles.daySelected   : '',
              isToday && !sel && !isRangeEdge   ? styles.dayToday      : '',
              dis                               ? styles.dayDisabled   : '',
            ].filter(Boolean).join(' ')

            const cellCls = [
              styles.cell,
              mode === 'range' ? getRangeClasses(cd) : '',
            ].filter(Boolean).join(' ')

            return (
              <div
                key={`${wi}-${di}`}
                className={cellCls}
                onMouseEnter={() => mode === 'range' && setHoverDate(cd)}
                onMouseLeave={() => mode === 'range' && setHoverDate(null)}
              >
                <button
                  className={dayCls}
                  onClick={() => mode === 'range' ? handleRangeSelect(cell) : handleSingleSelect(cell)}
                  disabled={dis}
                  tabIndex={dis ? -1 : 0}
                  aria-label={cd.toDateString()}
                  aria-pressed={sel || isRangeEdge}
                >
                  {cell.day}
                </button>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
