
import styles from '../Header.module.css'
import Logo from '../../Icons/Logo'
import CartIcon from '../../Icons/CartIcon'
import Image from 'next/image'

export default function HeaderDesktop() {
    return (
        <div className={`${styles.header} ${styles.desktop}`}>
            <div className={styles.container}>

                <div className={styles.logoAndNavigation}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <nav className={styles.navigation}>
                        <span> item 1</span>
                        <span> item 2</span>
                        <span> item 3</span>
                        <span> item 4</span>
                    </nav>

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
        </div>
    )
}