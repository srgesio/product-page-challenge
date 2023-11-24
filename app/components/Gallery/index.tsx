"use client"
import styles from './Gallery.module.css'
import { useProduct } from '../../hooks/useProduct'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import { useState } from 'react'

export function Gallery() {
    const { product } = useProduct()
    const [selectedImage, setSelectedImage] = useState(product.images[0].url)
    return (
        <>
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
            </div>
            <div className={styles.productImage}>
                <Image
                    src={selectedImage}
                    alt={product.name}
                    width={500}
                    height={500}
                    className={styles.productSelectedImage}
                />
                <div className={styles.thumbnails}>
                    {
                        product.images.map((image, index) => (
                            <div className={`${styles.thumbnail} ${selectedImage === image.url ? styles.selected : ''} `} key={index}>
                                <Image
                                    src={image.thumbnailUrl ? image.thumbnailUrl : ''}
                                    alt={image.alt ? image.alt : product.name}
                                    width={100}
                                    height={100}
                                    className={`${styles.thumbnailImage}`}
                                    onClick={() => setSelectedImage(image.url)}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}