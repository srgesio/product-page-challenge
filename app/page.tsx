
import Header from './sections/Header'
import styles from './page.module.css'
import { Gallery } from './components/Gallery'

export default function ProductPage() {
  return (
    <main className={styles.main}>
      <Header />
      <Gallery />
    </main>
  )
}
