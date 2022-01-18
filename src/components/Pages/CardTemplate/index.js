/* eslint-disable no-shadow */
import styled from 'styled-components'
import CardBody from './CardTemplate'
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

const data = [
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

const CardList = () => {
  return (
    <Container>
      {data.map(({ option, photo, name }, index) => (
        <CardBody key={index} option={option} name={name} photo={photo} />
      ))}
    </Container>
  )
}

export default CardList
