
"use client"
import styles from './Form.module.css'
import { useProduct } from '../../hooks/useProduct'
import { Quantity } from '../Quantity'
import { AddButton } from '../AddButton'
import CartIcon from '../Icons/CartIcon'

export function Form() {
    const { product, setProductsOnCart, productsOnCart } = useProduct()
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const quantity = event.currentTarget.quantity.value
        setProductsOnCart((prev) => [...prev, { ...product, quantity }])
    }
    console.log("==>", productsOnCart)
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Quantity />
            <AddButton>
                <CartIcon />
                Add to cart
            </AddButton>
        </form>
    )
}



