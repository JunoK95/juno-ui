import { useState } from 'react'
import { Input } from '../index'
import type { InputIntent } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6.5" cy="6.5" r="4.5" />
    <line x1="10.5" y1="10.5" x2="14" y2="14" />
  </svg>
)

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="14" height="10" rx="1.5" />
    <polyline points="1,3 8,9.5 15,3" />
  </svg>
)

const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" />
    <circle cx="8" cy="8" r="2" />
  </svg>
)

const EyeOffIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 2l12 12M6.5 6.6A2 2 0 0 0 9.4 9.5M4.2 4.3C2.8 5.3 1.7 6.8 1 8c1.4 2.5 4 5 7 5 1.3 0 2.5-.4 3.5-1M7 3.1C7.3 3 7.7 3 8 3c3 0 5.6 2.5 7 5-.4.8-1 1.6-1.7 2.2" />
  </svg>
)

const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="3" x2="13" y2="13" />
    <line x1="13" y1="3" x2="3" y2="13" />
  </svg>
)

const intents: InputIntent[] = ['default', 'danger', 'success', 'warning']

const intentHints: Record<InputIntent, string> = {
  default: 'Helper text goes here.',
  danger:  'That email is already in use.',
  success: 'Username is available!',
  warning: 'Your password is weak.',
}

export function InputPage() {
  const [showPw, setShowPw] = useState(false)
  const [search, setSearch] = useState('')

  return (
    <>
      <PageHeader title="Input" desc="Accepts text input from the user." storybook="components-input" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Sizes</p>
        <div className={s.canvas}>
          <Input size="sm" placeholder="Small"  style={{ width: '200px' }} />
          <Input size="md" placeholder="Medium" style={{ width: '200px' }} />
          <Input size="lg" placeholder="Large"  style={{ width: '200px' }} />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Intents</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'stretch' }}>
          {intents.map(intent => (
            <Input
              key={intent}
              intent={intent}
              label={intent.charAt(0).toUpperCase() + intent.slice(1)}
              hint={intentHints[intent]}
              placeholder="Enter a value…"
              style={{ width: '100%' }}
            />
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Icons</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'stretch' }}>
          <Input iconLeft={<SearchIcon />} placeholder="Search…"          style={{ width: '100%' }} />
          <Input iconLeft={<MailIcon />}  placeholder="you@example.com"   style={{ width: '100%' }} label="Email" />
          <Input iconRight={<EyeIcon />}  placeholder="Password"          style={{ width: '100%' }} type="password" label="Password" />
          <Input iconLeft={<SearchIcon />} iconRight={<EyeIcon />} placeholder="Both sides…" style={{ width: '100%' }} />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Clickable icons</p>
        <div className={s.canvas} style={{ flexDirection: 'column', alignItems: 'stretch' }}>
          <Input
            iconLeft={<SearchIcon />}
            iconRight={search ? <XIcon /> : undefined}
            onClickIconRight={search ? () => setSearch('') : undefined}
            placeholder="Search — type then click ✕ to clear"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: '100%' }}
          />
          <Input
            type={showPw ? 'text' : 'password'}
            label="Password"
            placeholder="Toggle visibility"
            iconRight={showPw ? <EyeOffIcon /> : <EyeIcon />}
            onClickIconRight={() => setShowPw(v => !v)}
            style={{ width: '100%' }}
          />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Disabled</p>
        <div className={s.canvas}>
          <Input disabled label="Email" placeholder="you@example.com" style={{ width: '240px' }} />
          <Input disabled intent="danger" label="With intent" placeholder="you@example.com" style={{ width: '240px' }} />
        </div>
      </div>
    </>
  )
}
