import { Header } from '@/components/header'
import { Text } from '@/components/text'
import styles from './styles.module.scss'
import { Card } from '@/components/card'

export function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Text font="montserrat" size={34} weight="extrabold" lineHeight={34}>
          FIND CLOTHES <br /> THAT MATCHES YOUR STYLE
        </Text>
        <Text lineHeight={20} size={14} weight="light">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and <br /> cater to your
          sense of style.
        </Text>
        <div style={{ height: '200px', width: '100px' }}>
          <Card color="black">
            <Text font="montserrat" weight="extrabold" color="white">
              FIND CLOTHES <br /> THAT MATCHES YOUR STYLE
            </Text>
          </Card>
        </div>
      </main>
    </>
  )
}
