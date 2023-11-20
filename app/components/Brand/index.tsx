
"use client"
import styles from './Brand.module.css'
import { useProduct } from '../../hooks/useProduct'

export function Brand() {
    const { product } = useProduct()
    return (
        <div className={styles.brand}>
            {product.brand}
        </div>
    )
}



