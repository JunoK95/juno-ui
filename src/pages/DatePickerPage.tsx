import { useState } from 'react'
import { DatePicker, Modal, Button } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

export function DatePickerPage() {
  const [date, setDate]         = useState<Date | null>(null)
  const [datetime, setDatetime] = useState<Date | null>(null)
  const [limited, setLimited]   = useState<Date | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalDate, setModalDate] = useState<Date | null>(null)

  const min = new Date(); min.setDate(min.getDate() - 3)
  const max = new Date(); max.setDate(max.getDate() + 14)

  return (
    <>
      <PageHeader title="DatePicker" desc="A calendar popover for selecting dates and times." storybook="components-datepicker" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Date</p>
        <div className={s.canvas} style={{ gap: 16, alignItems: 'flex-start' }}>
          <DatePicker value={date} onChange={setDate} label="Due date" />
          <DatePicker value={date} onChange={setDate} label="Start date" placeholder="Pick a start date…" />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Date & Time</p>
        <div className={s.canvas} style={{ gap: 16, alignItems: 'flex-start' }}>
          <DatePicker mode="datetime" value={datetime} onChange={setDatetime} label="Scheduled at" />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Sizes</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
          <DatePicker size="sm" value={date} onChange={setDate} label="Small" />
          <DatePicker size="md" value={date} onChange={setDate} label="Medium" />
          <DatePicker size="lg" value={date} onChange={setDate} label="Large" />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Min / Max</p>
        <div className={s.canvas} style={{ gap: 16, alignItems: 'flex-start' }}>
          <DatePicker
            value={limited}
            onChange={setLimited}
            label="Available range (today ±14 days)"
            min={min}
            max={max}
          />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Inside a Modal</p>
        <div className={s.canvas}>
          <Button onClick={() => setModalOpen(true)}>Open modal</Button>
        </div>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Schedule event">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <DatePicker value={modalDate} onChange={setModalDate} label="Event date" />
            <DatePicker mode="datetime" value={modalDate} onChange={setModalDate} label="Event date & time" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 24 }}>
            <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={() => setModalOpen(false)}>Save</Button>
          </div>
        </Modal>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Disabled</p>
        <div className={s.canvas} style={{ gap: 16, alignItems: 'flex-start' }}>
          <DatePicker value={new Date(2026, 2, 9)} onChange={() => {}} label="Read only" disabled />
        </div>
      </div>
    </>
  )
}
