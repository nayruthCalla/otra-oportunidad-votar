/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from 'react'
import person1 from '../assets/item1.png'
import person2 from '../assets/item2.png'
import person3 from '../assets/item3.png'
// crear el contexto

const CartContext = createContext()

// crear componente Provider, state
const dataPerson = [
  {
    option: 'Opción 1',
    photo: person1,
    name: 'keiko fujimori',
  },
  {
    option: 'Opción 2',
    photo: person2,
    name: 'Pedro Castillo',
  },
  {
    option: 'Opción 3',
    photo: person3,
    name: 'Hernando de Soto',
  },
]
export const CartProvider = ({ children }) => {
  // state
  const [data, setData] = useState([])
  const [totalVotes, setTotalVotes] = useState(0)

  return (
    <CartContext.Provider
      value={{
        // states
        data,
        totalVotes,
        // func
        setData,
        setTotalVotes,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// custom hook
export const useStateCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useStateAuth must be used within a CartProvider')
  }

  return context
}
