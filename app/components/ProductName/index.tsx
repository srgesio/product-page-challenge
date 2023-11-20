
"use client"
import styles from './ProductName.module.css'
import { useProduct } from '../../hooks/useProduct'

export function ProductName() {
    const { product } = useProduct()
    return (
        <div className={styles.productName}>
            {product.name}
        </div>
    )
}



