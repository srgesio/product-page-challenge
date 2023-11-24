"use client"
import { useSwiper } from 'swiper/react';
import styles from './Gallery.module.css'
import ArrowLeft from '../Icons/ArrowLeft';
import ArrowRight from '../Icons/ArrowRight';
export default function ControlGallery() {
    const swiper = useSwiper();

    return (
        <div className={styles.controlGallery}>
            <button className={`${styles.controlButton} ${styles.prev}`}
                onClick={() => swiper.slidePrev()}>
                <ArrowLeft />
            </button>
            <button className={`${styles.controlButton} ${styles.next}`}
                onClick={() => swiper.slideNext()}>
                <ArrowRight />
            </button>
        </div>
    );
}