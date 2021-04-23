import { createContext, Dispatch, FC, useReducer } from 'react'
import {
  ProductActions,
  productReducer,
  ShoppingCartActions,
  shoppingCartReducer,
} from './reducer'

type ProductType = {
  id: number
  name: string
  price: number
}

type InitialStateType = {
  products: ProductType[]
  shoppingCart: number
}

const initialState: InitialStateType = {
  products: [],
  shoppingCart: 0,
}

const ProductContext = createContext<{
  state: InitialStateType
  dispatch: Dispatch<ProductActions | ShoppingCartActions>
}>({
  state: initialState,
  dispatch: () => null,
})

const mainReducer = (
  { products, shoppingCart }: InitialStateType,
  action: ProductActions | ShoppingCartActions
) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action),
})

const ProductProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext, ProductProvider }
