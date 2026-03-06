import { useLayoutEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import type { Theme } from './nav'
import { Sidebar } from './layout/Sidebar'
import { Topbar } from './layout/Topbar'
import { HomePage }    from './pages/HomePage'
import { ButtonPage }  from './pages/ButtonPage'
import { InputPage }   from './pages/InputPage'
import { SelectPage }  from './pages/SelectPage'
import { CheckboxPage } from './pages/CheckboxPage'
import { BadgePage }   from './pages/BadgePage'
import { AvatarPage }  from './pages/AvatarPage'
import { TagPage }     from './pages/TagPage'
import { AlertPage }   from './pages/AlertPage'
import { ToastPage }   from './pages/ToastPage'
import s from './App.module.scss'

export default function App() {
  const [theme, setTheme] = useState<Theme>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className={s.layout}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className={s.main}>
        <Topbar
          theme={theme}
          onToggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
          onMenuToggle={() => setSidebarOpen(o => !o)}
        />

        <div className={s.content}>
          <Routes>
            <Route path="/"            element={<HomePage />} />
            <Route path="/ui/button"   element={<ButtonPage />} />
            <Route path="/ui/input"    element={<InputPage />} />
            <Route path="/ui/select"   element={<SelectPage />} />
            <Route path="/ui/checkbox" element={<CheckboxPage />} />
            <Route path="/ui/badge"    element={<BadgePage />} />
            <Route path="/ui/avatar"   element={<AvatarPage />} />
            <Route path="/ui/tag"      element={<TagPage />} />
            <Route path="/ui/alert"    element={<AlertPage />} />
            <Route path="/ui/toast"    element={<ToastPage />} />
            <Route path="*"            element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
