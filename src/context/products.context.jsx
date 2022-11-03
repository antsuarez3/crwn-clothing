import React, { createContext, useState } from 'react'

import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext({
  products: [],
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS)
  const value = { products }
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
