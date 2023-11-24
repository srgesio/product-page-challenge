"use client"
import { useEffect, useRef, useState } from "react";
import styles from './Cart.module.css'
import CartIcon from "../Icons/CartIcon";
import { useProduct } from "@/app/hooks/useProduct";
import Image from "next/image";
import { AddButton } from "../AddButton";
import DeleteIcon from "../Icons/DeleteIcon";

export default function Cart() {
    const { productsOnCart, setProductsOnCart } = useProduct()
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
    function handleRemoveProduct(index: number) {
        const newProductsOnCart = [...productsOnCart]
        newProductsOnCart.splice(index, 1)
        setProductsOnCart(newProductsOnCart)

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
            <div className={styles.cartTrigger} onClick={toggleCart}>
                {!isEmpty && <span className={styles.cartTriggerCount}>{productsOnCart.length}</span>}
                <CartIcon />
            </div>

            <div className={`${styles.cart} ${isCartOpen ? styles.open : ''} ${isEmpty ? styles.empty : ''}`} ref={modalRef}>
                <div className={styles.cartContent}>

                    <div className={styles.cartHeader}>
                        <span>Cart</span>
                    </div>
                    <div className={styles.cartBody}>
                        {!isEmpty && <div className={styles.cartBodyContent}>
                            <div className={styles.cartList}>
                                {productsOnCart.map((product, index) => (
                                    <div className={styles.cartItem} key={index}>
                                        <div className={styles.cartItemImageContainer}>
                                            <Image
                                                src={product.images[0].thumbnailUrl ? product.images[0].thumbnailUrl : ''}
                                                alt={product.name}
                                                width={64}
                                                height={64}
                                                className={styles.cartItemImage}
                                            />
                                        </div>
                                        <div className={styles.cartItemInfo}>
                                            <span className={styles.cartItemName}>{product.name}</span>
                                            <div className={styles.cartItemPrices}>
                                                <span className={styles.cartItemPrice}> ${product.price.sellingPrice?.toFixed(2)}</span>
                                                <span className={styles.cartItemQuantity}>x{product.quantity}</span>
                                                <span className={styles.cartItemPriceTotal}> ${(Number(product.price.sellingPrice) * Number(product.quantity)).toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <div className={styles.cartItemRemove}>
                                            <button type="button" className={styles.cartItemRemoveButton}
                                                onClick={() => handleRemoveProduct(index)}>
                                                <DeleteIcon />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>}
                        {isEmpty && <div className={styles.cartEmptyBody}>
                            <span>

                                Your cart is empty.
                            </span>
                        </div>}
                    </div>
                    {!isEmpty && <div className={styles.cartFooter}>
                        <AddButton>
                            Checkout
                        </AddButton>
                    </div>}
                </div>
            </div>
        </>

    )
}