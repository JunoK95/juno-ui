import { useLayoutEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import type { Theme, Palette } from './nav'
import { Sidebar } from './layout/Sidebar'
import { Topbar } from './layout/Topbar'
import { HomePage }    from './pages/HomePage'
import { ButtonPage }  from './pages/ButtonPage'
import { InputPage }   from './pages/InputPage'
import { SelectPage }  from './pages/SelectPage'
import { CheckboxPage } from './pages/CheckboxPage'
import { SwitchPage }   from './pages/SwitchPage'
import { BadgePage }   from './pages/BadgePage'
import { AvatarPage }  from './pages/AvatarPage'
import { TagPage }     from './pages/TagPage'
import { AlertPage }   from './pages/AlertPage'
import { ToastPage }      from './pages/ToastPage'
import { TabsPage }       from './pages/TabsPage'
import { BreadcrumbPage } from './pages/BreadcrumbPage'
import { PaginationPage } from './pages/PaginationPage'
import { StepperPage }    from './pages/StepperPage'
import { DrawerPage }    from './pages/DrawerPage'
import { CardPage }     from './pages/CardPage'
import { PalettePage }  from './pages/PalettePage'
import { SeparatorPage } from './pages/SeparatorPage'
import { SpinnerPage }   from './pages/SpinnerPage'
import { ProgressPage }  from './pages/ProgressPage'
import { AccordionPage } from './pages/AccordionPage'
import { TooltipPage }   from './pages/TooltipPage'
import { DropdownPage }  from './pages/DropdownPage'
import { ModalPage }       from './pages/ModalPage'
import { DatePickerPage }  from './pages/DatePickerPage'
import { CollapsiblePage } from './pages/CollapsiblePage'
import { SliderPage }      from './pages/SliderPage'
import s from './App.module.scss'

export default function App() {
  const [theme, setTheme] = useState<Theme>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )
  const [palette, setPalette] = useState<Palette>('default')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useLayoutEffect(() => {
    if (palette === 'default') {
      document.documentElement.removeAttribute('data-palette')
    } else {
      document.documentElement.setAttribute('data-palette', palette)
    }
  }, [palette])

  return (
    <div className={s.layout}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className={s.main}>
        <Topbar
          theme={theme}
          onChangeTheme={setTheme}
          onMenuToggle={() => setSidebarOpen(o => !o)}
          palette={palette}
          onChangePalette={setPalette}
        />

        <div className={s.content}>
          <Routes>
            <Route path="/"            element={<HomePage />} />
            <Route path="/ui/button"   element={<ButtonPage />} />
            <Route path="/ui/input"    element={<InputPage />} />
            <Route path="/ui/select"   element={<SelectPage />} />
            <Route path="/ui/checkbox" element={<CheckboxPage />} />
            <Route path="/ui/switch"   element={<SwitchPage />} />
            <Route path="/ui/badge"    element={<BadgePage />} />
            <Route path="/ui/avatar"   element={<AvatarPage />} />
            <Route path="/ui/tag"      element={<TagPage />} />
            <Route path="/ui/alert"    element={<AlertPage />} />
            <Route path="/ui/toast"      element={<ToastPage />} />
            <Route path="/ui/tabs"       element={<TabsPage />} />
            <Route path="/ui/breadcrumb" element={<BreadcrumbPage />} />
            <Route path="/ui/pagination" element={<PaginationPage />} />
            <Route path="/ui/stepper"    element={<StepperPage />} />
            <Route path="/ui/drawer"     element={<DrawerPage />} />
            <Route path="/ui/card"       element={<CardPage />} />
            <Route path="/ui/palette"    element={<PalettePage />} />
            <Route path="/ui/separator"  element={<SeparatorPage />} />
            <Route path="/ui/spinner"    element={<SpinnerPage />} />
            <Route path="/ui/progress"   element={<ProgressPage />} />
            <Route path="/ui/accordion"  element={<AccordionPage />} />
            <Route path="/ui/tooltip"    element={<TooltipPage />} />
            <Route path="/ui/dropdown"   element={<DropdownPage />} />
            <Route path="/ui/modal"       element={<ModalPage />} />
            <Route path="/ui/datepicker"  element={<DatePickerPage />} />
            <Route path="/ui/collapsible" element={<CollapsiblePage />} />
            <Route path="/ui/slider"      element={<SliderPage />} />
            <Route path="*"              element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
