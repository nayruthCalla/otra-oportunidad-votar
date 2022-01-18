import styled from 'styled-components'
import CardBody from './CardBody'
import DividingLine from '../../Layouts/LineStyle/DividingLine'

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
`

const CardTemplate = ({ option, name, photo }) => {
  return (
    <Conatiner>
      <CardBody option={option} name={name} photo={photo} />
      <DividingLine />
      <Button type="button">Votar</Button>
    </Conatiner>
  )
}

export default CardTemplate
