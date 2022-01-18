import { useEffect } from 'react'
import styled from 'styled-components'
import CardList from '../CardTemplate'
import VotosTemplate from '../VotosTemplate'
import { useStateCart } from '../../../context/dataContext'

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
  const { data, totalVotes, setTotalVotes } = useStateCart()

  let votos = 0
  useEffect(() => {
    data.forEach((e) => {
      votos += e.votos
      setTotalVotes(votos)
    })
  }, [data])
  return (
    <Container>
      <CardList />
      <ConText>
        <P>Total de votos:</P>
        <H2>{totalVotes}</H2>
      </ConText>
      <VotosTemplate />
    </Container>
  )
}

export default TotalVotos
