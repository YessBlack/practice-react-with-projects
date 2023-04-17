import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

// 1. Crear el contexto
export const CartContext = createContext()

// 2. Crear el provider, para proveer el provider a los componentes

// La dependencia de usar react Context es minima
export function CartProvider ({ children }) {
  const { addToCart, removeFromCart, clearCart, state } = useCartReducer()
  return (
    <CartContext.Provider value={{
      state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
