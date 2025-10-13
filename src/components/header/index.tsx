import {
  ListIcon,
  MagnifyingGlassIcon,
  ShoppingCartSimpleIcon,
  UserCircleIcon,
} from '@phosphor-icons/react'

import styles from './styles.module.scss'

import { useIsMobile } from '@/hooks/use-mobile'
import { LogoDesktop, LogoMobile } from '@/assets/index'

export function Header() {
  const isMobile = useIsMobile()

  return (
    <header className={styles.header} aria-label="Cabeçalho do site">
      <section className={styles.options} aria-label="Menu de opções">
        <ListIcon size={24} onClick={() => {}} />
        {isMobile ? (
          <img src={LogoMobile} alt="Logo do E-Commerce da SHOP.CO" />
        ) : (
          <img src={LogoDesktop} alt="Logo do E-Commerce da SHOP.CO" />
        )}
      </section>
      <section className={styles.actions} aria-label="Ações do usuário">
        <MagnifyingGlassIcon size={24} />
        <ShoppingCartSimpleIcon size={24} />
        <UserCircleIcon size={24} />
      </section>
    </header>
  )
}
