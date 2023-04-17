import './Products.css'

import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { addToCart, removeFromCart, state } = useCart()

  const checkProductInCart = (product) => {
    const productInCart = state.find(item => item.id === product.id)
    return productInCart
  }

  return (
    <main className='products'>
      <ul>
        {
          products.map(product => {
            const isProductInCart = checkProductInCart(product)
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                  <button
                    onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}
                    style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                  >
                    {
                      isProductInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            )
          })

        }
      </ul>
    </main>
  )
}
