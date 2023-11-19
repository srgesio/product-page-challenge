
import styles from '../Header.module.css'
import Logo from '../../../components/Icons/Logo'
import CartIcon from '../../../components/Icons/CartIcon'
import Image from 'next/image'
import Navigation from '@/app/components/Navigation'

export default function HeaderDesktop() {

    return (
        <div className={`${styles.header} ${styles.desktop}`}>
            <div className={`${styles.headerContainer} container`}>

                <div className={styles.logoAndNavigation}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <Navigation />

                </div>
                <div className={styles.cartAndProfile}>
                    <div className={styles.cart}>
                        <CartIcon />
                    </div>
                    <div className={styles.profile}>
                        <Image alt='Profile Image' src={'/image-avatar.png'} width={48} height={48} />
                    </div>
                </div>
            </div>
        </div>
    )
}