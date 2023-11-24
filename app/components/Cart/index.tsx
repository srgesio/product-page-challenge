"use client"
import { useEffect, useRef, useState } from "react";
import styles from './Cart.module.css'
import CartIcon from "../Icons/CartIcon";
import { useProduct } from "@/app/hooks/useProduct";

export default function Cart() {
    const { productsOnCart } = useProduct()
    const [isCartOpen, setIsCartOpen] = useState(false)
    const isEmpty = productsOnCart.length === 0
    const modalRef = useRef<HTMLDivElement>(null)
    function toggleCart() {
        setIsCartOpen(!isCartOpen)
    }
    const handleCloseModal = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node) && isCartOpen) {
            toggleCart()
        }
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            handleCloseModal(event);
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [toggleCart])


    return (
        <>
            <div className={styles.menuTrigger} onClick={toggleCart}>
                <CartIcon />
            </div>

            <div className={`${styles.cart} ${isCartOpen ? styles.open : ''} ${isEmpty ? styles.empty : ''}`} ref={modalRef}>
                <div className={styles.cartContent}>

                    <div className={styles.cartHeader}>
                        <span>Cart</span>
                    </div>
                    <div className={styles.cartBody}>
                        {!isEmpty && <div className={styles.cartBodyContent}>
                            <div className={styles.cartBodyContentList}>
                                {productsOnCart.map((product, index) => (
                                    <div className={styles.cartBodyContentListItem} key={index}>
                                        <div className={styles.cartBodyContentListItemImage}>
                                            <img src={product.images[0].thumbnailUrl} alt={product.name} />

                                        </div>
                                        <div className={styles.cartBodyContentListItemInfo}>
                                            <span className={styles.cartBodyContentListItemInfoName}>{product.name}</span>
                                            <span className={styles.cartBodyContentListItemInfoQuantity}>{product.quantity} x ${product.price.sellingPrice}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.cartBodyContentTotal}>
                                <span>Total</span>
                                <span>${productsOnCart.reduce((acc, curr) => acc + (Number(curr.price.sellingPrice) * Number(curr.quantity)), 0)}</span>
                            </div>
                            <div className={styles.cartBodyContentCheckout}>
                                <button className={styles.cartBodyContentCheckoutButton}>Checkout</button>
                            </div>
                        </div>}
                        {isEmpty && <div className={styles.cartEmptyBody}>
                            <span>

                                Your cart is empty.
                            </span>
                        </div>}
                    </div>
                </div>
            </div>
        </>

    )
}