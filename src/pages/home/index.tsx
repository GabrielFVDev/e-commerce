import { Header } from '@/components/header'
import { Text } from '@/components/text'
import styles from './styles.module.scss'
import { Button } from '@/components/button'
import { Card } from '@/components/card'

import HeaderSection from '@/assets/header-section.avif'
import CalvinKleinLogo from '@/assets/brands/calvin-klein.svg'
import GucciLogo from '@/assets/brands/gucci.svg'
import PradaLogo from '@/assets/brands/prada.svg'
import VersaceLogo from '@/assets/brands/versace.svg'
import ZaraLogo from '@/assets/brands/zara.svg'
import ShirtImage from '@/assets/clothes/shirt.svg'

export function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.container}>
          <Text font="montserrat" size={34} weight="extrabold" lineHeight={34}>
            FIND CLOTHES <br /> THAT MATCHES YOUR STYLE
          </Text>
          <div className={styles.description}>
            <Text lineHeight={20} size={14} weight="light" transparent={60}>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and <br /> cater to your
              sense of style.
            </Text>
          </div>
          <div className={styles.button}>
            <Button
              title="Shop Now"
              onClick={() => {
                console.log('clicou')
              }}
            />
          </div>
          <div className={styles.statistics}>
            <div>
              <Text font="montserrat" size={24} weight="bold" lineHeight={20}>
                200+
              </Text>
              <Text lineHeight={20} size={12} weight="light" transparent={60}>
                International Brands
              </Text>
            </div>
            <div>
              <Text font="montserrat" size={24} weight="bold" lineHeight={20}>
                2,000+
              </Text>
              <Text lineHeight={20} size={12} weight="light" transparent={60}>
                High-Quality Products
              </Text>
            </div>
          </div>
          <div className={styles.customers}>
            <div className={styles.line}>
              <Text font="montserrat" size={24} weight="bold" lineHeight={20}>
                30,000+
              </Text>
              <Text lineHeight={20} size={12} weight="light" transparent={60}>
                Happy Customers
              </Text>
            </div>
          </div>
        </section>
        <div className={styles.imageSection}>
          <img src={HeaderSection} alt="" width={430} height={530} />
        </div>
        <Card borderRadius={0}>
          <div className={styles.firstLineBrands}>
            <img src={VersaceLogo} alt="" />
            <img src={ZaraLogo} alt="" />
            <img src={GucciLogo} alt="" />
          </div>
          <div className={styles.secondLineBrands}>
            <img src={PradaLogo} alt="" />
            <img src={CalvinKleinLogo} alt="" />
          </div>
        </Card>
        <div className={styles.arrivals}>
          <Text font="montserrat" size={32} weight="bold" lineHeight={34}>
            NEW ARRIVALS
          </Text>
        </div>
        <div className={styles.container}>
          <div className={styles.productCard}>
            <Card borderRadius={13} color="grey">
              <img src={ShirtImage} alt="" />
            </Card>
            <Text font="montserrat" size={16} weight="bold" lineHeight={34}>
              T-SHIRT WITH TAPE DETAILS
            </Text>
            <Text font="montserrat" size={16} weight="bold" lineHeight={34}>
              $120
            </Text>
          </div>
        </div>
      </main>
    </>
  )
}
