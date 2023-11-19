"use client"
import { useState } from "react";
import MenuIcon from "../Icons/MenuIcon";
import styles from './Drawer.module.css'
import CloseIcon from "../Icons/CloseIcon";
import Navigation from "../Navigation";

export default function Drawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    function toggleDrawer() {
        setIsDrawerOpen(!isDrawerOpen)
    }
    return (
        <>
            <div className={styles.menuTrigger} onClick={toggleDrawer}>
                <MenuIcon />
            </div>
            <div className={`${styles.drawer} ${isDrawerOpen ? styles.open : ''}`}>
                <div className={styles.drawerContent}>

                    <div className={styles.menuTrigger} onClick={toggleDrawer}>
                        <CloseIcon />
                    </div>
                    <Navigation />
                </div>
            </div>
        </>

    )
}