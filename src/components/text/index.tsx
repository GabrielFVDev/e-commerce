import type { TextProps } from './interface'
import styles from './styles.module.scss'

export function Text(props: TextProps) {
  const {
    children,
    lineHeight,
    weight = 'regular',
    size = 16,
    align = 'left',
    font = 'jakarta',
    color = 'black',
  } = props

  const className = [
    styles.text,
    weight && styles[`weight-${weight}`],
    size && styles[`size-${size}`],
    align && styles[`align-${align}`],
    font && styles[`font-${font}`],
    color && styles[`color-${color}`],
    lineHeight && styles[`line-height-${lineHeight}`],
  ]
    .filter(Boolean)
    .join(' ')

  return <p className={className}>{children}</p>
}
