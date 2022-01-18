import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const P = styled.p`
  font-family: Saira Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #cd4343;
  line-height: 15px;
  font-weight: bold;
  margin-bottom: 20px;
`
const HeaderText = styled.p`
  font-family: Saira Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 27px;
  color: #da7878;
`
const Figure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e2e2e2;
  border-radius: 50%;
  width: 40%;
`
const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;
  width: 100%;
`
const Name = styled.p`
  font-family: Saira Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 1px;
  color: rgba(0, 0, 0, 0.7);
  margin-top: 10px;
`

const CandidateVote = ({ votos, option, name, photo }) => {
  return (
    <Container>
      <P>Votos: {votos}</P>
      <Figure>
        <Image src={photo} alt="photo" />
      </Figure>
      <HeaderText>{option}</HeaderText>
      <Name>{name}</Name>
    </Container>
  )
}

export default CandidateVote
