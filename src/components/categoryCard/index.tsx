import { Card } from '../card'
import { Text } from '../text'
import styles from './styles.module.scss'
import type { CategoryCardProps } from './interface'

export function CategoryCard({ title, imageSrc }: CategoryCardProps) {
  return (
    <div className={styles.categoryCard}>
      <Card color="white" padding={0} borderRadius={20}>
        <div
          className={styles.categoryContent}
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          <div className={styles.categoryText}>
            <Text font="montserrat" size={24} weight="bold">
              {title}
            </Text>
          </div>
        </div>
      </Card>
    </div>
  )
}
