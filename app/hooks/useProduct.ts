import { useContext } from 'react'

import { ProductPageContext } from '../contexts/ProductPageContext'

export const useProduct = () => useContext(ProductPageContext)