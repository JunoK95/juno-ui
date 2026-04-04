# Changelog

All notable component changes to juno-ui-library are documented here.

---

## [0.4.3] — 2026-04-04

### Fixed
- **DatePicker** — popover now flips upward when there isn't enough space below the trigger, and clamps left when it would overflow the right edge of the viewport.
- **DatePicker** — popover z-index raised to 9999 so it always renders above any ancestor stacking context.

---

## [0.4.2] — 2026-04-04

### Fixed
- **Select** — multi-select trigger right padding now correctly accounts for the chevron across all sizes (same fix applied to single-select in 0.4.1).

---

## [0.4.1] — 2026-04-04

### Fixed
- **DatePicker** — calendar popup now renders above modals (z-index bumped above modal overlay).
- **Select** — right padding increased per size so the chevron no longer overlaps long option text.

---

## [0.4.0] — 2026-04-04

### Fixed
- **DatePicker** — calendar popup no longer clips inside ancestors with `overflow: hidden` (modals, scrollable panels). Now renders into `document.body` and repositions on scroll and resize.

---

## [0.2.0] — 2025-12-01

### Added
- Accordion
- Collapsible
- DatePicker
- Dropdown
- Modal
- Progress
- Separator
- Slider
- Spinner
- Switch
- Textbox
- Tooltip

---

## [0.1.0] — 2025-10-01

### Added
- Alert
- Avatar
- Badge
- Breadcrumb
- Button
- Calendar
- Card
- Checkbox
- Input
- Pagination
- Select
- Stepper
- Switch
- Tabs
- Tag
- Toast
