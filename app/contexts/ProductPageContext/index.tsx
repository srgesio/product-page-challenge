"use client"

import React, { ReactNode, createContext, useState } from 'react';
import { Product } from '../../types/Product';
import { PRODUCT } from '@/app/utils/product';
interface ProductContextProps {
    product: Product
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    productsOnCart: Product[]
    setProductsOnCart: React.Dispatch<React.SetStateAction<Product[]>>
}

export const ProductPageContext = createContext<ProductContextProps>(
    {} as ProductContextProps);

export function ProductProvider({ children }: { children: ReactNode }) {
    const [product, setProduct] = useState<Product>(PRODUCT);
    const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);

    return (
        <ProductPageContext.Provider value={{
            product,
            setProduct,
            productsOnCart,
            setProductsOnCart
        }}>
            {children}
        </ProductPageContext.Provider>
    );
};