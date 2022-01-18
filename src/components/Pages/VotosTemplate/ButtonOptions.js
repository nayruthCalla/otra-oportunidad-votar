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
  &:hover {
    background: #bf5656;
  }
`
const Select = styled.select`
  background: #da7878;
  border-radius: 10px;
  border: none;
  padding: 1rem;
  color: #ffffff;
  font-size: 18px;
  &:hover {
    background: #bf5656;
  }
`
const Option = styled.option`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 27px;
  color: #ffffff;
  border: none;
`

const ButtonOptions = ({ optionView, showVotes }) => {
  const handleChange = (e) => {
    optionView(e.target.value)
  }
  const handleClickPorct = () => {
    showVotes(true)
  }
  const handleClickInt = () => {
    showVotes(false)
  }
  return (
    <Conatiner>
      <P>Ver por:</P>
      <Select name="select" onChange={handleChange}>
        <Option value="todos" defaultValue>
          Todos
        </Option>
        <Option value="Opción 1">Opción 1</Option>
        <Option value="Opción 2">Opción 2</Option>
        <Option value="Opción 3">Opción 3</Option>
      </Select>
      <Button type="button" onClick={handleClickPorct}>
        Porcentaje
      </Button>
      <Button type="button" onClick={handleClickInt}>
        Normal
      </Button>
    </Conatiner>
  )
}

export default ButtonOptions
