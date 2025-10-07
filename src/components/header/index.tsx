import {
  ListIcon,
  MagnifyingGlassIcon,
  ShoppingCartSimpleIcon,
  UserCircleIcon,
} from '@phosphor-icons/react'

import styles from './styles.module.scss'
import LogoMobile from '@/assets/logo-mobile.svg'
import LogoDesktop from '@/assets/logo-desktop.svg'
import { useIsMobile } from '@/hooks/use-mobile'

export function Header() {
  const isMobile = useIsMobile()

  return (
    <header className={styles.header}>
      <section className={styles.options}>
        <ListIcon size={24} onClick={() => {}} />
        {isMobile ? (
          <img src={LogoMobile} alt="Logo SHOP.CO" />
        ) : (
          <img src={LogoDesktop} alt="Logo SHOP.CO" />
        )}
      </section>
      <section className={styles.actions}>
        <MagnifyingGlassIcon size={24} />
        <ShoppingCartSimpleIcon size={24} />
        <UserCircleIcon size={24} />
      </section>
    </header>
  )
}
