import { useMemo } from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { BsFillShieldLockFill } from 'react-icons/bs'

const HeaderCont = styled.header`
  width: 100%;
  background: rgba(0, 0, 0, 0.73);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  .iconHeader {
    width: 60px;
    height: 60px;
    width: 20%;
    color: rgba(255, 255, 255, 0.81);
  }
`
const H1 = styled.h1`
  font-family: Saira Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.53);
`
const ContainerText = styled.div`
  width: 80%;
  justify-content: center;
  align-items: center;
`

const P = styled.p`
  font-family: Saira Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 31px;
  color: rgba(255, 255, 255, 0.39);
`

const Header = () => {
  const value = useMemo(() => ({ className: 'iconHeader' }))
  return (
    <HeaderCont>
      <IconContext.Provider value={value}>
        <BsFillShieldLockFill />
      </IconContext.Provider>
      <ContainerText>
        <H1>
          Si pudieras retroceder el tiempo y poder proponer un candidat@ para
          las elecciones presidenciales en Perú
        </H1>
        <P> A quién eligirias? - Los candidatos siguientes son solo ejemplos</P>
      </ContainerText>
    </HeaderCont>
  )
}

export default Header
