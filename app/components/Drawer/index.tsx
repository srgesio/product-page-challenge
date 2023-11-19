"use client"
import { useEffect, useRef, useState } from "react";
import MenuIcon from "../Icons/MenuIcon";
import styles from './Drawer.module.css'
import CloseIcon from "../Icons/CloseIcon";
import Navigation from "../Navigation";

export default function Drawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)
    function toggleDrawer() {
        setIsDrawerOpen(!isDrawerOpen)
    }
    const handleCloseModal = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node) && isDrawerOpen) {
            toggleDrawer()
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
    }, [toggleDrawer])


    return (
        <>
            <div className={styles.menuTrigger} onClick={toggleDrawer}>
                <MenuIcon />
            </div>
            <div className={`${styles.drawer} ${isDrawerOpen ? styles.open : ''}`}>
                <div className={styles.drawerContent} ref={modalRef}>

                    <div className={styles.menuTrigger} onClick={toggleDrawer}>
                        <CloseIcon />
                    </div>
                    <Navigation />
                </div>
            </div>
        </>

    )
}