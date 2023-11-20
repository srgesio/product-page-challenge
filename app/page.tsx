
import styles from './page.module.css'
import { Gallery } from './components/Gallery'
import { Brand } from './components/Brand'
import { ProductName } from './components/ProductName'
import { ProductDescription } from './components/ProductDescription'
import { Pricing } from './components/Pricing'

export default function ProductPage() {
  return (
    <main className={styles.main}>
      <div className={styles.productPageContent}>
        <div className={styles.gallery}>

          <Gallery />
        </div>
        <div className={styles.productInfo}>
          <Brand />
          <ProductName />

          <ProductDescription />
          <Pricing />
        </div>

      </div>
    </main>
  )
}
