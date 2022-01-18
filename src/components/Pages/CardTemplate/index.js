/* eslint-disable no-shadow */
import { useEffect } from 'react'
import styled from 'styled-components'
import CardBody from './CardTemplate'
import { useStateCart } from '../../../context/dataContext'
import person1 from '../../../assets/item1.png'
import person2 from '../../../assets/item2.png'
import person3 from '../../../assets/item3.png'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
  margin-top: 50px;
`

const dataPerson = [
  {
    option: 'Opción 1',
    photo: person1,
    name: 'keiko fujimori',
    votos: 0,
  },
  {
    option: 'Opción 2',
    photo: person2,
    name: 'Pedro Castillo',
    votos: 0,
  },
  {
    option: 'Opción 3',
    photo: person3,
    name: 'Hernando de Soto',
    votos: 0,
  },
]

const CardList = () => {
  const { data, setData } = useStateCart()

  useEffect(() => {
    setData(dataPerson)
  }, [])
  return (
    <Container>
      {data.map(({ option, photo, name, votos }, index) => (
        <CardBody
          key={index}
          option={option}
          name={name}
          photo={photo}
          votos={votos}
        />
      ))}
    </Container>
  )
}

export default CardList
