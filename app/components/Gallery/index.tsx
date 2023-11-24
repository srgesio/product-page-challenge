"use client"
import styles from './Gallery.module.css'
import { useProduct } from '../../hooks/useProduct'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ControlGallery from './ControlGallery'
import CloseIcon from '../Icons/CloseIcon'

export function Gallery() {
    const { product } = useProduct()
    const [selectedImage, setSelectedImage] = useState(product.images[0].url)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)
    const handleCloseModal = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node) && isLightboxOpen) {
            setIsLightboxOpen(false)
        }
    }
    function toggleModal() {
        setIsLightboxOpen(!isLightboxOpen)
    }
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            handleCloseModal(event);
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [toggleModal])
    return (
        <>
            {isLightboxOpen && <div className={styles.lightbox}>
                <div className={styles.galleryLightboxContainer} ref={modalRef}>
                    <button
                        className={styles.closeLightbox}
                        onClick={() => setIsLightboxOpen(false)}>
                        <CloseIcon />
                    </button>
                    <Swiper
                        slidesPerView={1}

                        pagination={{ clickable: true }}
                        loop

                    >
                        <ControlGallery />
                        {product.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={image.url}
                                    alt={image.alt ? image.alt : product.name}
                                    width={500}
                                    height={500}
                                    className={styles.galleryLightboxImage}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>}
            <div className={styles.gallery}>
                <Swiper
                    slidesPerView={1}

                    pagination={{ clickable: true }}
                    loop

                >
                    <ControlGallery />
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
                    onClick={() => setIsLightboxOpen(true)}
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