import { useState , useContext , createContext } from 'react'

const productsInfo = [
    {
      id: '1',
      name: '貓咪罐罐',
      img: 'https://picsum.photos/300/300?text=1',
      price: 100,
      quantity: 2,
    },
    {
      id: '2',
      name: '貓咪干干',
      img: 'https://picsum.photos/300/300?text=2',
      price: 200,
      quantity: 1,
    },
  ]

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [total , setTotal] = useState(0)

    const value={
        productsInfo,
        total ,
        setTotal
    }

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const use = useContext(CartContext)
    return use
}