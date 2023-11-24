"use client"
import { useSwiper } from 'swiper/react';
import styles from './Gallery.module.css'
export default function ControlGallery() {
    const swiper = useSwiper();

    return (
        <div className={styles.controlGallery}>
            <button className={`${styles.controlButton} ${styles.prev}`} onClick={() => swiper.slidePrev()}>{'<'}</button>
            <button className={`${styles.controlButton} ${styles.next}`} onClick={() => swiper.slideNext()}>{'>'}</button>
        </div>
    );
}