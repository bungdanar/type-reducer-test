import { FC, useContext } from 'react'
import { ProductContext, ProductProvider } from './context'
import { Types } from './reducer'

const Products: FC = () => {
  const { state, dispatch } = useContext(ProductContext)

  return (
    <div className="row justify-content-center">
      <div className="col-sm-6">
        <button
          onClick={() =>
            dispatch({
              type: Types.Add,
            })
          }
        >
          click
        </button>{' '}
        {state.shoppingCart}
      </div>
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
