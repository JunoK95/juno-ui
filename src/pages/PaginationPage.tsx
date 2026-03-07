import { useState } from 'react'
import { Pagination } from '../index'
import { PageHeader } from '../layout/PageHeader'
import s from '../App.module.scss'

export function PaginationPage() {
  const [page1, setPage1] = useState(1)
  const [page2, setPage2] = useState(5)
  const [page3, setPage3] = useState(2)

  return (
    <>
      <PageHeader
        title="Pagination"
        desc="Splits content across multiple pages with navigation."
        storybook="components-pagination"
      />

      <div className={s.section}>
        <p className={s.sectionTitle}>Default</p>
        <div className={s.canvas}>
          <Pagination page={page1} totalPages={10} onChange={setPage1} />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Middle page with ellipsis</p>
        <div className={s.canvas}>
          <Pagination page={page2} totalPages={20} onChange={setPage2} />
        </div>
      </div>

      <div className={s.section}>
        <p className={s.sectionTitle}>Few pages</p>
        <div className={s.canvas}>
          <Pagination page={page3} totalPages={4} onChange={setPage3} />
        </div>
      </div>
    </>
  )
}
