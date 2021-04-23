import { useContext, useState } from 'react'
import { ProductContext } from './context'
import { Types } from './reducer'

export default function List() {
  const [form, setForm] = useState({
    name: '',
    price: 0,
  })

  const { state, dispatch } = useContext(ProductContext)

  const handleForm = (type: string, value: string) => {
    setForm((form) => ({
      ...form,
      [type]: value,
    }))
  }

  const createProduct = () => {
    dispatch({
      type: Types.Create,
      payload: {
        id: Math.round(Math.random() * 10000),
        name: form.name,
        price: form.price,
      },
    })
  }

  const deleteProduct = (id: number) => {
    dispatch({
      type: Types.Delete,
      payload: {
        id,
      },
    })
  }

  return (
    <div>
      <input
        value={form.name}
        onChange={(e) => {
          handleForm('name', e.target.value)
        }}
        placeholder="Name"
      />
      <input
        value={form.price}
        type="number"
        onChange={(e) => {
          handleForm('price', e.target.value)
        }}
        placeholder="Price"
      />
      <button onClick={createProduct}>create</button>
      <div style={{ marginTop: 20 }}>
        {state.products.map((p) => (
          <div key={p.id}>
            <span>{p.name}</span>
            <span>{p.price}</span>
            <button onClick={() => deleteProduct(p.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}
