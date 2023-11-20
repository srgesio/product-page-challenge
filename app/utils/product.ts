import { Product } from "../types/Product";

export const PRODUCT: Product = {
    id: "1",
    name: "Fall Limited Edition Sneakers",
    price: {
        sellingPrice: 125.00,
        listPrice: 250.00,
        discount: 0.5
    },
    images: [
        {
            url: "/images/image-product-1.jpg",
            thumbnailUrl: "/images/image-product-1-thumbnail.jpg",
            alt: "Product Image 1"
        },
        {
            url: "/images/image-product-2.jpg",
            thumbnailUrl: "/images/image-product-2-thumbnail.jpg",
            alt: "Product Image 2"
        },
        {
            url: "/images/image-product-3.jpg",
            thumbnailUrl: "/images/image-product-3-thumbnail.jpg",
            alt: "Product Image 3"
        },
        {
            url: "/images/image-product-4.jpg",
            thumbnailUrl: "/images/image-product-4-thumbnail.jpg",
            alt: "Product Image 4"
        }
    ],
    brand: "Sneaker Company",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",


}