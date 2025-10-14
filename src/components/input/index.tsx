import { EnvelopeIcon } from '@phosphor-icons/react'
import { Card } from '../card'
import { Text } from '../text'

import styles from './styles.module.scss'
import type { InputProps } from './interface'

export function Input({ placeholder }: InputProps) {
  return (
    <Card borderRadius={40} color="white">
      <div className={styles.input}>
        <div className={styles.icon}>
          <EnvelopeIcon weight="bold" size={20} />
          <Text font="inter" weight="regular" size={14}>
            {placeholder}
          </Text>
        </div>
      </div>
    </Card>
  )
}
