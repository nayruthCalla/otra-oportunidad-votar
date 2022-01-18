import styled from 'styled-components'
import Header from './Layouts/Header'
import TotalVotos from './Pages/TotalVotos/TotalVotos'

const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`
const P = styled.p`
  width: 100%;
  background: rgba(0, 0, 0, 0.73);
  font-family: Saira Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 31px;
  color: rgba(255, 255, 255, 0.39);
  text-align: center;
  margin-top: 50px;
`

const App = () => {
  return (
    <Container>
      <Header />
      <TotalVotos />
      <P>Made by NayruthCalla @ 2021 </P>
    </Container>
  )
}

export default App
