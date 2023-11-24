
"use client"
import { useState } from 'react'
import styles from './Quantity.module.css'

export function Quantity() {
    const [quantity, setQuantity] = useState(1)

    function handleMinus() {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1)
        }
    }
    return (
        <div className={styles.quantity}>
            <button className={`${styles.quantityButton} ${styles.minus}`}
                onClick={handleMinus}
            >-</button>
            <input className={styles.quantityInput} name='quantity' type="number" minLength={1} defaultValue={quantity} />
            <button className={`${styles.quantityButton} ${styles.plus}`}
                onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
    )
}



