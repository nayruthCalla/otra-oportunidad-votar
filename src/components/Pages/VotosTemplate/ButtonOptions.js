import styled from 'styled-components'

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const P = styled.p`
  font-family: Saira Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 47px;
  color: rgba(0, 0, 0, 0.73);
`
const Button = styled.button`
  background: #da7878;
  border-radius: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
`
const Select = styled.select`
  background: #da7878;
  border-radius: 10px;
  border: none;
  padding: 1rem;
  color: #ffffff;
`
const Option = styled.option`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 27px;
  color: #ffffff;
`

const ButtonOptions = () => {
  return (
    <Conatiner>
      <P>Ver por:</P>
      <Button type="button">Porcentaje%</Button>
      <Button type="button">Total</Button>
      <Select>
        <Option>Todos</Option>
        <Option>Option1</Option>
        <Option>Option2</Option>
        <Option>Option3</Option>
      </Select>
    </Conatiner>
  )
}

export default ButtonOptions
