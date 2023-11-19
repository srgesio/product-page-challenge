
import Link from 'next/link'
import styles from './Navigation.module.css'

const navigation = [
    {
        label: 'Collections',
        url: '#'
    },
    {
        label: 'Man',
        url: '#'
    },
    {
        label: 'Woman',
        url: '#'
    },
    {
        label: 'About',
        url: '#'
    },
    {
        label: 'Contact',
        url: '#'
    },
]

export default function Navigation() {
    return (
        <div className={styles.navigation}>
            {
                navigation.map((item) => {
                    return (
                        <Link href={item.url} className={styles.menuItem} key={item.label}>
                            {item.label}
                        </Link>
                    )
                })
            }
        </div>
    )
}