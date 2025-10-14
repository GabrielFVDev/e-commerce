import { Header } from '@/components/header'
import { Text } from '@/components/text'
import styles from './styles.module.scss'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { ProductCard } from '@/components/productCard'
import {
  CalvinKleinLogo,
  CasualCategoryImage,
  FormalCategoryImage,
  GucciLogo,
  GymCategoryImage,
  HeaderSection,
  LogoMobile,
  PartyCategoryImage,
  PaymentsMobileIcon,
  PradaLogo,
  ShirtImage,
  StripedShirtImage,
  VersaceLogo,
  ZaraLogo,
} from '@/assets/index'
import { CategoryCard } from '@/components/categoryCard'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  FacebookLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from '@phosphor-icons/react'
import { Rating } from '@/components/rating'
import { Input } from '@/components/input'
import { About } from '@/components/about'

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
          <section className={styles.productsSection}>
            <ProductCard
              image={ShirtImage}
              productName="T-shirt with Tape Details"
              rating={4.5}
              price={120}
            />
            <ProductCard
              image={StripedShirtImage}
              productName="T-shirt with Tape Details"
              rating={4.5}
              price={120}
            />
            <ProductCard
              image={StripedShirtImage}
              productName="T-shirt with Tape Details"
              rating={4.5}
              price={120}
            />
            <ProductCard
              image={StripedShirtImage}
              productName="T-shirt with Tape Details"
              rating={4.5}
              price={120}
            />
          </section>

          <div className={styles.viewButton}>
            <Button title="View All" color="white" backgroundColor="black" />
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.arrivals}>
          <Text font="montserrat" size={32} weight="bold" lineHeight={34}>
            top selling
          </Text>
        </div>
        <div className={styles.container}>
          <section className={styles.productsSection}>
            <ProductCard
              image={StripedShirtImage}
              productName="T-shirt with Tape Details"
              rating={4.5}
              price={120}
            />
            <ProductCard
              image={StripedShirtImage}
              productName="T-shirt with Tape Details"
              rating={4.5}
              price={120}
            />
            <ProductCard
              image={ShirtImage}
              productName="T-shirt with Tape Details"
              rating={4.5}
              price={120}
            />
            <ProductCard
              image={ShirtImage}
              productName="T-shirt with Tape Details"
              rating={4.5}
              price={120}
            />
          </section>

          <div className={styles.viewButton}>
            <Button title="View All" color="white" backgroundColor="black" />
          </div>
        </div>

        <section className={styles.container}>
          <Card color="grey" borderRadius={20}>
            <div className={styles.categoryTitle}>
              <Text
                font="montserrat"
                align="center"
                size={32}
                weight="bold"
                lineHeight={34}
              >
                BROWSE BY <br />
                dress STYLE
              </Text>
            </div>
            <div className={styles.categories}>
              <div className={styles.categorySubtitle}>
                <CategoryCard title="Casual" imageSrc={CasualCategoryImage} />
              </div>
              <div className={styles.categorySubtitle}>
                <CategoryCard title="Formal" imageSrc={FormalCategoryImage} />
              </div>
              <div className={styles.categorySubtitle}>
                <CategoryCard title="Party" imageSrc={PartyCategoryImage} />
              </div>
              <div className={styles.categoryLast}>
                <CategoryCard title="Gym" imageSrc={GymCategoryImage} />
              </div>
            </div>
          </Card>
        </section>

        <section className={styles.container}>
          <div className={styles.customersTitle}>
            <Text font="montserrat" weight="bold" size={32} lineHeight={36}>
              OUR HAPPY CUSTOMERS
            </Text>

            <div className={styles.arrows}>
              <ArrowLeftIcon weight="bold" />
              <ArrowRightIcon weight="bold" />
            </div>
          </div>
        </section>

        <div className={styles.customerRating}>
          <Card color="white" borderColor="grey" padding={16}>
            <Rating rating={5} />
            <div className={styles.customer}>
              <Text font="inter" weight="bold" size={16} lineHeight={22}>
                Sarah M.
              </Text>
              <CheckCircleIcon color="#01AB31" size={15} />
            </div>
            <Text font="inter" size={14} lineHeight={20} weight="regular">
              ”Im blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece Ive
              bought has exceeded my expectations.”
            </Text>
          </Card>
        </div>

        <div className={styles.container}>
          <Card color="black" padding={16} borderRadius={20}>
            <div className={styles.newsletter}>
              <Text color="white" font="montserrat" size={32} weight="bold">
                STAY UPTO DATE ABOUT OUR <br /> LATEST OFFERS
              </Text>
            </div>

            <Input placeholder="Enter your email address" />
            <div className={styles.newsletterInput}>
              <Card color="white" borderRadius={28}>
                <Text font="inter" size={14} weight="regular" align="center">
                  Subscribe to Newsletter
                </Text>
              </Card>
            </div>
          </Card>
        </div>

        <footer className={styles.footer}>
          <img src={LogoMobile} width={140} height={24} alt="" />
          <div className={styles.footerText}>
            <Text font="inter" weight="regular" size={14} lineHeight={20}>
              We have clothes that suits your style and which <br /> you’re
              proud to wear. From women to men.
            </Text>
          </div>

          <div className={styles.footerLinks}>
            <TwitterLogoIcon size={28} weight="fill" />
            <FacebookLogoIcon size={28} weight="fill" />
            <InstagramLogoIcon size={28} weight="fill" />
            <GithubLogoIcon size={28} weight="fill" />
          </div>

          <div>
            <section className={styles.footerSectionOne}>
              <About
                title="COMPANY"
                firstParagraph="About"
                secondParagraph="Features"
                thirdParagraph="Works"
                fourthParagraph="Career"
              />
              <About
                title="HELP"
                firstParagraph={
                  <>
                    Customer <br /> Support
                  </>
                }
                secondParagraph="Delivery Details"
                thirdParagraph="Terms & Conditions"
                fourthParagraph="Privacy Policy"
              />
            </section>
            <section className={styles.footerSectionTwo}>
              <About
                title="FAQ"
                firstParagraph="Account"
                secondParagraph={
                  <>
                    Manage <br /> Deliveries
                  </>
                }
                thirdParagraph="Orders"
                fourthParagraph="Payment"
              />
              <About
                title="RESOURCES"
                firstParagraph="Free eBook"
                secondParagraph="Developer Tutorial"
                thirdParagraph="How to - Blog"
                fourthParagraph="Youtube Playlist"
              />
            </section>
          </div>

          <hr className={styles.divider} />

          <Text weight="regular" size={14} align="center">
            Shop.co © 2000-2023, All Rights Reserved
          </Text>

          <div className={styles.payments}>
            <img src={PaymentsMobileIcon} alt="Method Payment" />
          </div>
        </footer>
      </main>
    </>
  )
}
