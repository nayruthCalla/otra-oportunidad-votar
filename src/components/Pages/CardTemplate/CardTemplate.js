/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import styled from 'styled-components'
import CardBody from './CardBody'
import DividingLine from '../../Layouts/LineStyle/DividingLine'
import { useStateCart } from '../../../context/dataContext'

const Conatiner = styled.div`
  background: #ffffff;
  border: 1px solid #d5c2c2;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 25rem;
  align-items: center;
`
const Button = styled.button`
  background: #77547c;
  border-radius: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 29px;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  margin: 2rem;
  &:hover {
    background: #77547cbf;
  }
`

const CardTemplate = ({ option, name, photo }) => {
  const { data, setData } = useStateCart()

  const handleClick = () => {
    const selectedPerson = data.find((item) => item.option === option)
    if (selectedPerson) {
      const newArr = data.map((i) => {
        if (i.option === option) {
          i.votos++
        }
        return i
      })
      setData([...newArr])
    }
  }
  return (
    <Conatiner>
      <CardBody option={option} name={name} photo={photo} />
      <DividingLine />
      <Button type="button" onClick={handleClick}>
        Votar
      </Button>
    </Conatiner>
  )
}

export default CardTemplate
