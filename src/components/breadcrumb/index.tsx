import { CaretRightIcon } from '@phosphor-icons/react'
import { Text } from '../text'
import type { BreadcrumbProps } from './interface'
import styles from './styles.module.scss'

export function Breadcrumb({ items }: BreadcrumbProps) {
  const breadcrumbList = []

  for (let i = 0; i < items.length; i++) {
    breadcrumbList.push(
      <Text key={i} size={14} weight="regular" color="opacity">
        {items[i]}
      </Text>,
    )

    if (i < items.length - 1) {
      breadcrumbList.push(
        <CaretRightIcon size={14} className={styles.separator} />,
      )
    }
  }

  return <div className={styles.breadcrumb}>{breadcrumbList}</div>
}
