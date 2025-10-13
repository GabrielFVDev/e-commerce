import type { ProductsProps } from './interface'
import styles from './styles.module.scss'
import { Rating } from '../rating'
import { Card } from '../card'
import { Text } from '../text'

export function ProductCard(props: ProductsProps) {
  return (
    <>
      <div className={styles.productCard}>
        <Card borderRadius={13} color="white">
          <img src={props.image} alt={props.productDescription} />
        </Card>
        <Text font="montserrat" size={16} weight="bold" lineHeight={34}>
          {props.productName}
        </Text>
        <div className={styles.evaluation}>
          <div className={styles.stars}>
            <Rating rating={props.rating} />
          </div>
          <Text font="inter" size={12}>
            {props.rating}/5
          </Text>
        </div>
        <Text font="montserrat" size={16} weight="bold" lineHeight={34}>
          $120
        </Text>
      </div>
    </>
  )
}
