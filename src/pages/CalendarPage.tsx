import { useState } from 'react'
import { Calendar } from '../index'
import type { CalendarRange } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

function formatDate(d: Date) {
  return `${MONTHS_SHORT[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

export function CalendarPage() {
  const [single, setSingle] = useState<Date | null>(null)
  const [range, setRange]   = useState<CalendarRange>({ from: null, to: null })

  const today   = new Date()
  const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
  const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14)

  const presetFrom = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2)
  const presetTo   = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 9)

  return (
    <>
      <PageHeader
        title="Calendar"
        desc="A standalone, always-visible calendar for single-date or date-range selection."
        storybook="components-calendar"
      />

      <div className={s.section}>
        <p className={s.sectionTitle}>Single date</p>
        <div className={s.canvas} style={{ gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <Calendar value={single} onChange={setSingle} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <p style={{ margin: 0, fontSize: 12, color: 'var(--color-text-muted)' }}>Selected</p>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: 'var(--color-text)' }}>
              {single ? formatDate(single) : '—'}
            </p>
            {single && (
              <button
                onClick={() => setSingle(null)}
                style={{ marginTop: 4, fontSize: 12, color: 'var(--color-text-muted)', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Date range</p>
        <div className={s.canvas} style={{ gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <Calendar mode="range" rangeValue={range} onRangeChange={setRange} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div>
              <p style={{ margin: '0 0 2px', fontSize: 12, color: 'var(--color-text-muted)' }}>From</p>
              <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: 'var(--color-text)' }}>
                {range.from ? formatDate(range.from) : '—'}
              </p>
            </div>
            <div>
              <p style={{ margin: '0 0 2px', fontSize: 12, color: 'var(--color-text-muted)' }}>To</p>
              <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: 'var(--color-text)' }}>
                {range.to ? formatDate(range.to) : range.from ? 'Select end date…' : '—'}
              </p>
            </div>
            {(range.from || range.to) && (
              <button
                onClick={() => setRange({ from: null, to: null })}
                style={{ marginTop: 4, fontSize: 12, color: 'var(--color-text-muted)', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Range with preset</p>
        <div className={s.canvas}>
          <Calendar
            mode="range"
            defaultRangeValue={{ from: presetFrom, to: presetTo }}
          />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Min / Max</p>
        <div className={s.canvas}>
          <Calendar
            value={new Date()}
            min={minDate}
            max={maxDate}
            onChange={() => {}}
          />
        </div>
      </div>
    </>
  )
}
