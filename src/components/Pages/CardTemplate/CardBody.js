import styled from 'styled-components'

const Conatiner = styled.div`
  margin: 2rem 2rem 0 2rem;
`
const HeaderText = styled.p`
  font-family: Saira Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 27px;
  color: #da7878;
`
const Figure = styled.figure``
const Image = styled.img`
  width: 154px;
  height: 176px;
`
const Name = styled.p`
  font-family: Saira Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 39px;
  color: rgba(0, 0, 0, 0.47);
`

const CardBody = ({ option, name, photo }) => {
  return (
    <Conatiner>
      <HeaderText>{option}</HeaderText>
      <Figure>
        <Image src={photo} alt="photo" />
        <Name>{name}</Name>
      </Figure>
    </Conatiner>
  )
}

export default CardBody
