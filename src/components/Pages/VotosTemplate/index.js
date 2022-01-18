import styled from 'styled-components'
import ButtonOptions from './ButtonOptions'
import Candidatevote from './CandidateVote'
import pesron1 from '../../../assets/item1.png'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background: #ffffff;
  border: 1px solid #d5c2c2;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  padding: 2rem 2rem 3.3rem 2rem;
  gap: 2rem;
  margin-top: 53px;
`
const data = {
  option: 'Opción 1',
  photo: pesron1,
  name: 'keiko fujimori',
}

const Votos = () => {
  return (
    <Container>
      <ButtonOptions />
      <Candidatevote
        votos="200"
        option={data.option}
        name={data.name}
        photo={data.photo}
      />
    </Container>
  )
}

export default Votos
