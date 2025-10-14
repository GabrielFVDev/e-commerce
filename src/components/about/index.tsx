import { Text } from '../text'
import type { AboutProps } from './interface'
import styles from './styles.module.scss'

export function About({
  title,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  fourthParagraph,
}: AboutProps) {
  return (
    <div className={styles.about}>
      <div className={styles.title}>
        <Text
          font="inter"
          weight="medium"
          size={14}
          lineHeight={20}
          letterSpacing={3}
        >
          {title}
        </Text>
      </div>
      <div className={styles.content}>
        <Text font="inter" weight="regular" size={14} lineHeight={16}>
          {firstParagraph}
        </Text>
        <Text font="inter" weight="regular" size={14} lineHeight={16}>
          {secondParagraph}
        </Text>
        <Text font="inter" weight="regular" size={14} lineHeight={16}>
          {thirdParagraph}
        </Text>
        <Text font="inter" weight="regular" size={14} lineHeight={16}>
          {fourthParagraph}
        </Text>
      </div>
    </div>
  )
}
