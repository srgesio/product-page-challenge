
import styles from '../Header.module.css'
import Logo from '../../Icons/Logo'
import MenuIcon from '../../Icons/MenuIcon'
import CartIcon from '../../Icons/CartIcon'
import Image from 'next/image'

export default function HeaderMobile() {
  return (
    <div className={`${styles.header} ${styles.mobile}`}>
      <div className={styles.menuTriggerAndLogo}>

        <div className={styles.menuTrigger}>
          <MenuIcon />
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
      <div className={styles.cartAndProfile}>
        <div className={styles.cart}>
          <CartIcon />
        </div>
        <div className={styles.profile}>
          <Image alt='Profile Image' src={'/image-avatar.png'} width={24} height={24} />
        </div>
      </div>

    </div>
  )
}