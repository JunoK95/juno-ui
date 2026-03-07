import { Card, CardHeader, CardBody, CardFooter } from '../index'
import type { CardColor, CardVariant } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

const variants: CardVariant[] = ['elevated', 'outline', 'subtle', 'flat']
const colors: CardColor[] = ['default', 'primary', 'danger', 'success', 'warning']

export function CardPage() {
  return (
    <>
      <PageHeader title="Card" desc="A surface for grouping related content and actions." storybook="components-card" />

      <div className={s.section}>
        <p className={s.sectionTitle}>Variants</p>
        <div className={s.canvas} style={{ flexDirection: 'column', gap: '12px', alignItems: 'stretch' }}>
          {variants.map(variant => (
            <div key={variant} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span className={s.canvasLabel} style={{ paddingTop: 14 }}>{variant}</span>
              <Card variant={variant} style={{ maxWidth: 360 }}>
                <CardHeader>Card Title</CardHeader>
                <CardBody>Card body content.</CardBody>
                <CardFooter>Footer</CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Colors</p>
        <div className={s.canvas} style={{ flexDirection: 'column', gap: '12px', alignItems: 'stretch' }}>
          {colors.map(color => (
            <div key={color} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span className={s.canvasLabel} style={{ paddingTop: 14 }}>{color}</span>
              <Card color={color} style={{ maxWidth: 360 }}>
                <CardHeader>Card Title</CardHeader>
                <CardBody>Card body content.</CardBody>
                <CardFooter>Footer</CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Variants × Colors</p>
        <div className={s.canvas} style={{ flexDirection: 'column', gap: '16px', alignItems: 'stretch' }}>
          {variants.map(variant => (
            <div key={variant} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span className={s.canvasLabel} style={{ paddingTop: 14 }}>{variant}</span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                {colors.map(color => (
                  <Card key={color} variant={variant} color={color} style={{ minWidth: 100, flex: '1 1 80px' }}>
                    <CardBody>{color}</CardBody>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Compositions</p>
        <div className={s.canvas} style={{ gap: '12px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <Card style={{ flex: '1 1 220px' }}>
            <CardHeader>Header + Body</CardHeader>
            <CardBody>No footer on this card.</CardBody>
          </Card>
          <Card variant="outline" style={{ flex: '1 1 220px' }}>
            <CardBody>Body only — no header or footer.</CardBody>
          </Card>
          <Card variant="flat" color="primary" style={{ flex: '1 1 220px' }}>
            <CardHeader>Flat + Color</CardHeader>
            <CardBody>No border, tinted background.</CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}
