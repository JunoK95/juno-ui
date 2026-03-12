import { useState } from 'react'
import {
  Button, Input, Select, Checkbox, Switch, Textbox,
  Card, CardHeader, CardBody, Separator,
} from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

// ─── Icons ────────────────────────────────────────────────────────────────────

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="14" height="10" rx="1.5" />
    <polyline points="1,3 8,9.5 15,3" />
  </svg>
)

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="10" height="8" rx="1.5" />
    <path d="M5 7V5a3 3 0 0 1 6 0v2" />
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

const CardIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="14" height="10" rx="1.5" />
    <line x1="1" y1="7" x2="15" y2="7" />
  </svg>
)

const UserIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="5" r="3" />
    <path d="M1.5 14c0-3.038 2.91-5.5 6.5-5.5s6.5 2.462 6.5 5.5" />
  </svg>
)

// ─── Shared helpers ───────────────────────────────────────────────────────────

const row2: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }
const form: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 14 }

function ExampleCard({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <Card variant="outline">
      <CardHeader>
        <p style={{ margin: '0 0 2px', fontSize: 15, fontWeight: 600, color: 'var(--color-text)' }}>{title}</p>
        <p style={{ margin: 0, fontSize: 12, color: 'var(--color-text-muted)' }}>{desc}</p>
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </Card>
  )
}

// ─── Examples ─────────────────────────────────────────────────────────────────

function SignInExample() {
  const [showPw, setShowPw] = useState(false)
  const [remember, setRemember] = useState(false)

  return (
    <ExampleCard title="Sign in" desc="User authentication with email and password.">
      <div style={form}>
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          iconLeft={<MailIcon />}
        />
        <Input
          label="Password"
          type={showPw ? 'text' : 'password'}
          placeholder="••••••••"
          iconLeft={<LockIcon />}
          iconRight={showPw ? <EyeOffIcon /> : <EyeIcon />}
          onClickIconRight={() => setShowPw(v => !v)}
        />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Checkbox
            label="Remember me"
            checked={remember}
            onChange={e => setRemember(e.target.checked)}
          />
          <a href="#" style={{ fontSize: 12, color: 'var(--color-text-muted)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
          >
            Forgot password?
          </a>
        </div>
        <Button intent="primary" style={{ width: '100%' }}>Sign in</Button>
        <Separator label="or" />
        <Button variant="outline" style={{ width: '100%' }}>Continue with Google</Button>
      </div>
    </ExampleCard>
  )
}

function CheckoutExample() {
  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'gb', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
  ]

  return (
    <ExampleCard title="Payment" desc="Checkout form for collecting card details.">
      <div style={form}>
        <Input label="Cardholder name" placeholder="Jane Smith" iconLeft={<UserIcon />} />
        <Input label="Card number" placeholder="1234 5678 9012 3456" iconLeft={<CardIcon />} />
        <div style={row2}>
          <Input label="Expiry" placeholder="MM / YY" />
          <Input label="CVV" placeholder="···" />
        </div>
        <Select label="Country" options={countries} placeholder="Select country" />
        <Button intent="primary" style={{ width: '100%' }}>Pay now</Button>
        <p style={{ margin: 0, fontSize: 11, color: 'var(--color-text-muted)', textAlign: 'center' }}>
          Your payment is encrypted and secure.
        </p>
      </div>
    </ExampleCard>
  )
}

function ContactExample() {
  const [message, setMessage] = useState('')

  const subjects = [
    { value: 'general',  label: 'General enquiry' },
    { value: 'support',  label: 'Technical support' },
    { value: 'billing',  label: 'Billing' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other',    label: 'Other' },
  ]

  return (
    <ExampleCard title="Contact" desc="Support or feedback form with validation intents.">
      <div style={form}>
        <div style={row2}>
          <Input label="Name" placeholder="Jane Smith" />
          <Input label="Email" type="email" placeholder="you@example.com" />
        </div>
        <Select label="Subject" options={subjects} placeholder="Choose a topic" />
        <Textbox
          label="Message"
          placeholder="How can we help?"
          rows={4}
          maxLength={500}
          showCount
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <Button intent="primary" style={{ width: '100%' }}>Send message</Button>
      </div>
    </ExampleCard>
  )
}

function ProfileExample() {
  const [bio, setBio] = useState('')
  const [emailNotifs, setEmailNotifs] = useState(true)
  const [marketingNotifs, setMarketingNotifs] = useState(false)

  return (
    <ExampleCard title="Profile settings" desc="Account details with preferences and notifications.">
      <div style={form}>
        <div style={row2}>
          <Input label="First name" placeholder="Jane" />
          <Input label="Last name"  placeholder="Smith" />
        </div>
        <Input label="Username" placeholder="janesmith" iconLeft={<span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>@</span>} />
        <Input label="Email" type="email" placeholder="you@example.com" iconLeft={<MailIcon />} />
        <Textbox
          label="Bio"
          hint="A short bio shown on your public profile."
          placeholder="Tell us about yourself…"
          rows={3}
          maxLength={200}
          showCount
          value={bio}
          onChange={e => setBio(e.target.value)}
        />
        <Separator />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: 'var(--color-text)' }}>Notifications</p>
          <Switch label="Email notifications" intent="primary" checked={emailNotifs} onChange={e => setEmailNotifs(e.target.checked)} />
          <Switch label="Marketing emails"    checked={marketingNotifs} onChange={e => setMarketingNotifs(e.target.checked)} />
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <Button variant="outline">Cancel</Button>
          <Button intent="primary">Save changes</Button>
        </div>
      </div>
    </ExampleCard>
  )
}

// ─── Text editor ─────────────────────────────────────────────────────────────

const blockOptions = [
  { value: 'paragraph', label: 'Paragraph' },
  { value: 'h1',        label: 'Heading 1' },
  { value: 'h2',        label: 'Heading 2' },
  { value: 'h3',        label: 'Heading 3' },
  { value: 'quote',     label: 'Blockquote' },
  { value: 'code',      label: 'Code block' },
]

function ToolbarBtn({ active, title, onClick, children }: {
  active?: boolean
  title: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Button
      variant={active ? 'outline' : 'ghost'}
      size="sm"
      title={title}
      onClick={onClick}
      style={{ padding: '4px 7px', minWidth: 28 }}
    >
      {children}
    </Button>
  )
}

const LIST_PREFIX = { ul: '• ', ol: (n: number) => `${n}. ` }

function stripListPrefix(line: string) {
  return line.replace(/^•\s/, '').replace(/^\d+\.\s/, '')
}

function TextEditorExample() {
  const [block, setBlock]     = useState('paragraph')
  const [content, setContent] = useState('')
  const [formats, setFormats] = useState<Set<string>>(new Set())
  const [align, setAlign]     = useState('left')

  function toggleFormat(f: string) {
    setFormats(prev => {
      const next = new Set(prev)
      next.has(f) ? next.delete(f) : next.add(f)
      return next
    })
  }

  function toggleList(type: 'ul' | 'ol') {
    const other = type === 'ul' ? 'ol' : 'ul'
    const isActive = formats.has(type)

    setFormats(prev => {
      const next = new Set(prev)
      next.delete(other)
      isActive ? next.delete(type) : next.add(type)
      return next
    })

    setContent(prev => {
      const lines = prev ? prev.split('\n') : ['']
      const stripped = lines.map(stripListPrefix)
      if (isActive) return stripped.join('\n')
      if (type === 'ul') return stripped.map(l => `${LIST_PREFIX.ul}${l}`).join('\n')
      return stripped.map((l, i) => `${LIST_PREFIX.ol(i + 1)}${l}`).join('\n')
    })
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key !== 'Enter') return
    const active = formats.has('ul') ? 'ul' : formats.has('ol') ? 'ol' : null
    if (!active) return
    e.preventDefault()
    const el = e.currentTarget
    const { selectionStart, selectionEnd, value } = el
    const linesBefore = value.substring(0, selectionStart).split('\n')
    const prefix = active === 'ul'
      ? LIST_PREFIX.ul
      : LIST_PREFIX.ol(linesBefore.length + 1)
    const insert = '\n' + prefix
    const next = value.substring(0, selectionStart) + insert + value.substring(selectionEnd)
    setContent(next)
    requestAnimationFrame(() => {
      el.selectionStart = el.selectionEnd = selectionStart + insert.length
    })
  }

  const words = content.trim() ? content.trim().split(/\s+/).length : 0

  return (
    <ExampleCard title="Text editor" desc="Document editing toolbar using Button, Select, Separator, and Textbox.">
      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap', marginBottom: 8 }}>
        <Select
          options={blockOptions}
          size="sm"
          value={block}
          onChange={e => setBlock(e.target.value)}
          style={{ width: 128 }}
        />

        <div style={{ width: 1, height: 24, background: 'var(--color-border)', margin: '0 2px', flexShrink: 0 }} />

        <ToolbarBtn active={formats.has('bold')}          title="Bold"          onClick={() => toggleFormat('bold')}>
          <strong style={{ fontSize: 13 }}>B</strong>
        </ToolbarBtn>
        <ToolbarBtn active={formats.has('italic')}        title="Italic"        onClick={() => toggleFormat('italic')}>
          <em style={{ fontSize: 13 }}>I</em>
        </ToolbarBtn>
        <ToolbarBtn active={formats.has('underline')}     title="Underline"     onClick={() => toggleFormat('underline')}>
          <span style={{ fontSize: 13, textDecoration: 'underline' }}>U</span>
        </ToolbarBtn>
        <ToolbarBtn active={formats.has('strike')}        title="Strikethrough" onClick={() => toggleFormat('strike')}>
          <span style={{ fontSize: 13, textDecoration: 'line-through' }}>S</span>
        </ToolbarBtn>

        <div style={{ width: 1, height: 24, background: 'var(--color-border)', margin: '0 2px', flexShrink: 0 }} />

        <ToolbarBtn active={align === 'left'}   title="Align left"   onClick={() => setAlign('left')}>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="2" width="14" height="2" rx="1"/><rect x="1" y="7" width="9" height="2" rx="1"/><rect x="1" y="12" width="12" height="2" rx="1"/></svg>
        </ToolbarBtn>
        <ToolbarBtn active={align === 'center'} title="Align center" onClick={() => setAlign('center')}>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="2" width="14" height="2" rx="1"/><rect x="3.5" y="7" width="9" height="2" rx="1"/><rect x="2" y="12" width="12" height="2" rx="1"/></svg>
        </ToolbarBtn>
        <ToolbarBtn active={align === 'right'}  title="Align right"  onClick={() => setAlign('right')}>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="2" width="14" height="2" rx="1"/><rect x="6" y="7" width="9" height="2" rx="1"/><rect x="3" y="12" width="12" height="2" rx="1"/></svg>
        </ToolbarBtn>

        <div style={{ width: 1, height: 24, background: 'var(--color-border)', margin: '0 2px', flexShrink: 0 }} />

        <ToolbarBtn active={formats.has('ul')} title="Bullet list"   onClick={() => toggleList('ul')}>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><circle cx="2" cy="4" r="1.5"/><rect x="5" y="3" width="10" height="2" rx="1"/><circle cx="2" cy="8" r="1.5"/><rect x="5" y="7" width="10" height="2" rx="1"/><circle cx="2" cy="12" r="1.5"/><rect x="5" y="11" width="10" height="2" rx="1"/></svg>
        </ToolbarBtn>
        <ToolbarBtn active={formats.has('ol')} title="Numbered list" onClick={() => toggleList('ol')}>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><text x="0" y="5"  fontSize="5" fontFamily="ui-monospace,monospace">1.</text><rect x="5" y="3" width="10" height="2" rx="1"/><text x="0" y="10" fontSize="5" fontFamily="ui-monospace,monospace">2.</text><rect x="5" y="8" width="10" height="2" rx="1"/><text x="0" y="15" fontSize="5" fontFamily="ui-monospace,monospace">3.</text><rect x="5" y="13" width="10" height="2" rx="1"/></svg>
        </ToolbarBtn>

        <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
          <Button variant="ghost" size="sm" onClick={() => { setContent(''); setFormats(new Set()); setAlign('left'); setBlock('paragraph') }}>
            Clear
          </Button>
          <Button intent="primary" size="sm">Publish</Button>
        </div>
      </div>

      <Separator />

      {/* Content area */}
      <Textbox
        placeholder="Start writing…"
        rows={8}
        resize="none"
        value={content}
        onChange={e => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ width: '100%', marginTop: 8 }}
        textareaStyle={{
          fontStyle:      formats.has('italic')    ? 'italic'       : undefined,
          fontWeight:     formats.has('bold')       ? 700            : undefined,
          textDecoration: formats.has('underline') && formats.has('strike') ? 'underline line-through'
                        : formats.has('underline') ? 'underline'
                        : formats.has('strike')    ? 'line-through'
                        : undefined,
          textAlign:      align as React.CSSProperties['textAlign'],
          fontFamily:     block === 'code' ? 'ui-monospace, monospace' : undefined,
          fontSize:       block === 'h1' ? 22 : block === 'h2' ? 18 : block === 'h3' ? 15 : undefined,
        }}
      />

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
        <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontFamily: 'ui-monospace, monospace' }}>
          {words} word{words !== 1 ? 's' : ''} · {content.length} chars
        </span>
        <span style={{ fontSize: 11, color: content.length > 0 ? 'var(--color-warning)' : 'var(--color-text-muted)' }}>
          {content.length > 0 ? 'Unsaved changes' : 'No changes'}
        </span>
      </div>
    </ExampleCard>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function ExamplesPage() {
  return (
    <>
      <PageHeader
        title="Examples"
        desc="Real-world UI patterns built with juno-ui components."
      />
      <div className={s.examplesGrid}>
        <SignInExample />
        <CheckoutExample />
        <ContactExample />
        <ProfileExample />
        <div style={{ gridColumn: '1 / -1' }}>
          <TextEditorExample />
        </div>
      </div>
    </>
  )
}
