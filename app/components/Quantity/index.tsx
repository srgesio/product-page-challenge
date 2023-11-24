
"use client"
import { useState } from 'react'
import styles from './Quantity.module.css'
import MinusIcon from '../Icons/MinusIcon'
import PlusIcon from '../Icons/PlusIcon'

export function Quantity() {
    const [quantity, setQuantity] = useState(1)

    function handleMinus() {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1)
        }
    }
    return (
        <div className={styles.quantity}>
            <button type='button' className={`${styles.quantityButton} ${styles.minus}`}
                onClick={handleMinus}
            ><MinusIcon /></button>
            <input className={styles.quantityInput} name='quantity' type="number" minLength={1} defaultValue={quantity} />
            <button type='button' className={`${styles.quantityButton} ${styles.plus}`}
                onClick={() => setQuantity((prev) => prev + 1)}><PlusIcon /></button>
        </div>
    )
}



