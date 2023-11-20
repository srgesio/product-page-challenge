
"use client"
import styles from './ProductDescription.module.css'
import { useProduct } from '../../hooks/useProduct'

export function ProductDescription() {
    const { product } = useProduct()
    return (
        <div className={styles.productDescription}>
            {product.description}
        </div>
    )
}



