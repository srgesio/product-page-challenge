"use client"
import { useEffect, useRef, useState } from "react";
import styles from './Cart.module.css'
import CartIcon from "../Icons/CartIcon";

export default function Cart() {
    const [isCartOpen, setIsCartOpen] = useState(false)
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

            <div className={`${styles.cart} ${isCartOpen ? styles.open : ''}`} ref={modalRef}>
                <div className={styles.cartContent}>

                    <div className={styles.cartHeader}>
                        <span>Cart</span>
                    </div>
                    <div className={styles.cartBody}>
                        <span>Your cart is empty.</span>
                    </div>
                </div>
            </div>
        </>

    )
}