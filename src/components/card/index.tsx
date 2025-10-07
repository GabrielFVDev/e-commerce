import type { CardProps } from './interface'
import styles from './styles.module.scss'

export function Card(props: CardProps) {
  const {
    children,
    borderColor,
    color = 'grey',
    borderRadius = 13,
    padding = 10,
  } = props

  const className = [
    styles.card,
    color && styles[`color-${color}`],
    borderColor && styles[`border-${borderColor}`],
    borderRadius && styles[`border-radius-${borderRadius}`],
    padding && styles[`padding-${padding}`],
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={className}>{children}</div>
}
