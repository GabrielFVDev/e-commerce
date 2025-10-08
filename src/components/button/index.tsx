import { Card } from '../card'
import { Text } from '../text'
import type { ButtonProps } from './interface'
import styles from './styles.module.scss'

export function Button(props: ButtonProps) {
  return (
    <div className={styles.button}>
      <Card color={props.color} borderRadius={28}>
        <div className={styles.buttonContent}>
          <button {...props}>
            <Text color="white" align="center">
              {props.title}
            </Text>
          </button>
        </div>
      </Card>
    </div>
  )
}
