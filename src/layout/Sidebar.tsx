import { NavLink, Link } from 'react-router-dom'
import { navGeneral, navDisplay, navFeedback, navInputs, navNavigation, navTheme } from '../nav'
import type { NavItem } from '../nav'
import s from '../App.module.scss'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

function NavGroup({
  label,
  items,
  onNavClick,
}: {
  label: string
  items: NavItem[]
  onNavClick: () => void
}) {
  return (
    <nav className={s.navSection}>
      <p className={s.navLabel}>{label}</p>
      {items.map(({ label: itemLabel, path }) =>
        path ? (
          <NavLink
            key={itemLabel}
            to={path}
            onClick={onNavClick}
            className={({ isActive }) =>
              [s.navItem, isActive ? s.navActive : ''].filter(Boolean).join(' ')
            }
          >
            {itemLabel}
          </NavLink>
        ) : (
          <span key={itemLabel} className={`${s.navItem} ${s.navDisabled}`}>
            {itemLabel}
          </span>
        )
      )}
    </nav>
  )
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && <div className={s.backdrop} onClick={onClose} />}

      <aside className={[s.sidebar, isOpen ? s.sidebarOpen : ''].filter(Boolean).join(' ')}>
        <Link to="/" className={s.sidebarHeader} onClick={onClose}>
          <p className={s.logo}>juno-ui</p>
          <p className={s.logoSub}>components</p>
        </Link>

        <NavGroup label="General"    items={navGeneral}    onNavClick={onClose} />
        <NavGroup label="Inputs"     items={navInputs}     onNavClick={onClose} />
        <NavGroup label="Display"    items={navDisplay}    onNavClick={onClose} />
        <NavGroup label="Feedback"   items={navFeedback}   onNavClick={onClose} />
        <NavGroup label="Navigation" items={navNavigation} onNavClick={onClose} />
        <NavGroup label="Theme"      items={navTheme}      onNavClick={onClose} />
      </aside>
    </>
  )
}
