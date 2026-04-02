import s from '../App.module.scss'

interface PageHeaderProps {
  title: string
  desc: string
  storybook?: string
}

export function PageHeader({ title, desc, storybook }: PageHeaderProps) {
  const base = import.meta.env.VITE_STORYBOOK_URL ?? 'http://localhost:6006'
  const url = `${base}/?path=/story/${storybook}--default`

  return (
    <div className={s.pageHeaderRow}>
      <div>
        <h1 className={s.pageTitle}>{title}</h1>
        <p className={s.pageHeaderDesc}>{desc}</p>
      </div>
      {storybook && (
        <a href={url} target="_blank" rel="noreferrer" className={s.storybookLink}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M5 2H2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V7M10 2H7M10 2v3M10 2L5 7"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Storybook
        </a>
      )}
    </div>
  )
}
