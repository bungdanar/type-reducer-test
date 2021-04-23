import { FC, useContext } from 'react'
import { ProductContext, ProductProvider } from './context'
import List from './List'
import { Types } from './reducer'

const Products: FC = () => {
  const { state, dispatch } = useContext(ProductContext)

  return (
    <>
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
    </>
  )
}

const ProductsPage: FC = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-sm-6">
        <ProductProvider>
          <Products />
          <List />
        </ProductProvider>
      </div>
    </div>
  )
}

export default ProductsPage
