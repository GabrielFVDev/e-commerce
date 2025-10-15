import { Header } from '@/components/header'
import styles from './styles.module.scss'
import { Text } from '@/components/text'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card } from '@/components/card'
import { BrownShirtImage } from '@/assets/index'
import { Rating } from '@/components/rating'

export function Product() {
  return (
    <main className={styles.main}>
      <Header />
      <main className={styles.content}>
        <div className={styles.breadcrumb}>
          <Breadcrumb items={['Home', 'Shop', 'Men', 'T-shirts']} />
        </div>
        <Card borderRadius={13} color="white">
          <img
            className={styles.shirtImage}
            src={BrownShirtImage}
            alt={'An shirt image'}
          />
        </Card>
        <div className={styles.shirtsList}>
          <Card borderRadius={13} color="white">
            <img
              src={BrownShirtImage}
              alt={'An shirt image'}
              width={106}
              height={106}
            />
          </Card>
          <Card borderRadius={13} color="white">
            <img
              src={BrownShirtImage}
              alt={'An shirt image'}
              width={106}
              height={106}
            />
          </Card>
          <Card borderRadius={13} color="white">
            <img
              src={BrownShirtImage}
              alt={'An shirt image'}
              width={106}
              height={106}
            />
          </Card>
        </div>
        <Text font="montserrat" size={24} weight="bold" lineHeight={28}>
          One Life Graphic T-
          <br />
          shirt
        </Text>
        <div className={styles.evaluation}>
          <div className={styles.stars}>
            <Rating rating={4.5} />
          </div>
          <Text font="inter" size={12}>
            4.5/5
          </Text>
        </div>
      </main>
    </main>
  )
}
