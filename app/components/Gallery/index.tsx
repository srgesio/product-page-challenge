"use client"
import styles from './Gallery.module.css'
import { useProduct } from '../../hooks/useProduct'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules'
import Image from 'next/image'

export function Gallery() {
    const { product } = useProduct()
    return (
        <div className={styles.gallery}>
            <Swiper
                slidesPerView={1}
                modules={[Navigation]}
                navigation
                loop

            >
                {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={image.url}
                            alt={image.alt ? image.alt : product.name}
                            width={500}
                            height={500}
                            className={styles.galleryImage}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>


            {/* <div className={styles.galleryThumbnails}>
                <div className={styles.galleryThumbnail}>
                    <img src={product.images[0].thumbnailUrl} alt={product.name} />
                </div>
                <div className={styles.galleryThumbnail}>
                    <img src={product.images[0].thumbnailUrl} alt={product.name} />
                </div>
                <div className={styles.galleryThumbnail}>
                    <img src={product.images[0].thumbnailUrl} alt={product.name} />
                </div>
                <div className={styles.galleryThumbnail}>
                    <img src={product.images[0].thumbnailUrl} alt={product.name} />
                </div>
            </div> */}
        </div>
    )
}