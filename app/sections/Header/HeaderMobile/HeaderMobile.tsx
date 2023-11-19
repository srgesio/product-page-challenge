
import styles from '../Header.module.css'
import Logo from '../../../components/Icons/Logo'
import Image from 'next/image'
import Drawer from '@/app/components/Drawer'
import Cart from '@/app/components/Cart'

export default function HeaderMobile() {
  return (
    <div className={`${styles.header} ${styles.mobile}`}>
      <div className={styles.menuTriggerAndLogo}>
        <Drawer />

        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
      <div className={styles.cartAndProfile}>
        <div className={styles.cart}>
          <Cart />
        </div>
        <div className={styles.profile}>
          <Image alt='Profile Image' src={'/image-avatar.png'} width={24} height={24} />
        </div>
      </div>

    </div>
  )
}