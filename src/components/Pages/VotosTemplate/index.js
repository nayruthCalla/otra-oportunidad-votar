import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ButtonOptions from './ButtonOptions'
import Candidatevote from './CandidateVote'
// import pesron1 from '../../../assets/item1.png'
import { useStateCart } from '../../../context/dataContext'

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
// const data = {
//   option: 'Opción 1',
//   photo: pesron1,
//   name: 'keiko fujimori',
// }

const Votos = () => {
  const { data, totalVotes } = useStateCart()
  const [view, setView] = useState('todos')
  const [onlyCandidate, setOnlyCandidate] = useState({})
  const [showVotes, setShowVotes] = useState(false)

  useEffect(() => {
    if (view !== 'todos') {
      const person = data.find((e) => e.option === view)
      setOnlyCandidate(person)
    }
  }, [view])

  const convertToPorcn = (num) => {
    if (num === 0) {
      return 0
    }
    const porc = (num / totalVotes) * 100
    return `${Math.round(porc)}%`
  }

  return (
    <Container>
      <ButtonOptions optionView={setView} showVotes={setShowVotes} />
      {view === 'todos' ? (
        data.map(({ votos, option, name, photo }, index) => (
          <Candidatevote
            key={index}
            votos={showVotes ? convertToPorcn(votos) : votos}
            option={option}
            name={name}
            photo={photo}
          />
        ))
      ) : (
        <Candidatevote
          votos={
            showVotes
              ? convertToPorcn(onlyCandidate.votos)
              : onlyCandidate.votos
          }
          option={onlyCandidate.option}
          name={onlyCandidate.name}
          photo={onlyCandidate.photo}
        />
      )}
    </Container>
  )
}

export default Votos
