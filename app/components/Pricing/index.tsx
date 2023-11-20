
"use client"
import styles from './Pricing.module.css'
import { useProduct } from '../../hooks/useProduct'

export function Pricing() {
    const { product: {
        price: {
            discount,
            listPrice,
            sellingPrice
        } } } = useProduct()
    return (
        <div className={styles.pricingContainer}>
            <div className={styles.sellingPriceAndDiscount}>
                <div className={styles.sellingPrice}>
                    {`$${sellingPrice?.toFixed(2)}`}

                </div>
                {discount && <div className={styles.discount}>
                    {`${discount * 100}%`}
                </div>}
            </div>
            <div className={styles.listPrice}>
                {`$${listPrice?.toFixed(2)}`}
            </div>

        </div>
    )
}



