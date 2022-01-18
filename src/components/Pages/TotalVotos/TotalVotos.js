import styled from 'styled-components'
import CardList from '../CardTemplate'
import VotosTemplate from '../VotosTemplate'

const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
`
const P = styled.p`
  font-family: Saira Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 63px;
  color: rgba(0, 0, 0, 0.55);
`
const H2 = styled.h2`
  font-family: Saira Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 110px;
  color: rgba(0, 0, 0, 0.75);
`
const ConText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TotalVotos = () => {
  return (
    <Container>
      <CardList />
      <ConText>
        <P>Total de votos:</P>
        <H2>1480</H2>
      </ConText>
      <VotosTemplate />
    </Container>
  )
}

export default TotalVotos
