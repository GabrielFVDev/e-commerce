import { EnvelopeIcon } from '@phosphor-icons/react'
import { Card } from '../card'

import styles from './styles.module.scss'
import type { InputProps } from './interface'

export function Input({ placeholder }: InputProps) {
  return (
    <Card borderRadius={40} color="white">
      <div className={styles.input}>
        <div className={styles.icons}>
          <div className={styles.iconBackground}>
            <EnvelopeIcon weight="bold" size={20} />
          </div>
          <input
            type="email"
            placeholder={placeholder}
            className={styles.inputField}
          />
        </div>
      </div>
    </Card>
  )
}
