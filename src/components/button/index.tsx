import type { ButtonProps } from './interface'
import styles from './styles.module.scss'
import { Card } from '../card'
import { Text } from '../text'

export function Button(props: ButtonProps) {
  const { title, color = 'black', backgroundColor = 'white' } = props

  return (
    <div className={styles.button}>
      <Card color={color} borderRadius={28} borderColor="grey">
        <div className={styles.buttonContent}>
          <button {...props}>
            <Text color={backgroundColor} align="center">
              {title}
            </Text>
          </button>
        </div>
      </Card>
    </div>
  )
}
