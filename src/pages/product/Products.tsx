import { FC, useContext } from 'react'
import { ProductContext, ProductProvider } from './context'
import { Types } from './reducer'

const Products: FC = () => {
  const { state, dispatch } = useContext(ProductContext)

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: Types.Add,
          })
        }
      >
        click
      </button>
      {state.shoppingCart}
    </div>
  )
}

const ProductsPage: FC = () => {
  return (
    <ProductProvider>
      <Products />
    </ProductProvider>
  )
}

export default ProductsPage
