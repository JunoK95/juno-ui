import styles from './Pagination.module.scss'

export interface PaginationProps {
  page: number
  totalPages: number
  onChange: (page: number) => void
  siblingCount?: number
}

function getPageRange(page: number, totalPages: number, siblingCount: number): (number | '...')[] {
  const totalNumbers = siblingCount * 2 + 5

  if (totalPages <= totalNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const leftSibling = Math.max(page - siblingCount, 1)
  const rightSibling = Math.min(page + siblingCount, totalPages)

  const showLeftDots = leftSibling > 2
  const showRightDots = rightSibling < totalPages - 1

  if (!showLeftDots && showRightDots) {
    const leftCount = 3 + siblingCount * 2
    return [...Array.from({ length: leftCount }, (_, i) => i + 1), '...', totalPages]
  }

  if (showLeftDots && !showRightDots) {
    const rightCount = 3 + siblingCount * 2
    return [1, '...', ...Array.from({ length: rightCount }, (_, i) => totalPages - rightCount + i + 1)]
  }

  return [
    1,
    '...',
    ...Array.from({ length: rightSibling - leftSibling + 1 }, (_, i) => leftSibling + i),
    '...',
    totalPages,
  ]
}

export function Pagination({ page, totalPages, onChange, siblingCount = 1 }: PaginationProps) {
  const pages = getPageRange(page, totalPages, siblingCount)

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button
        className={styles.btn}
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        ‹
      </button>

      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`ellipsis-${i}`} className={styles.ellipsis}>
            …
          </span>
        ) : (
          <button
            key={p}
            className={[styles.btn, p === page ? styles.active : ''].filter(Boolean).join(' ')}
            onClick={() => onChange(p as number)}
            aria-label={`Page ${p}`}
            aria-current={p === page ? 'page' : undefined}
          >
            {p}
          </button>
        )
      )}

      <button
        className={styles.btn}
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  )
}
