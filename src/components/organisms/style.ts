import styled  from 'styled-components'

export const HeaderContainer= styled.header`
  display: flex;
  flex-direction: row;
  padding-left: 12vw;
  padding-right: 12vw;
  height: 60px;
  margin: 0px;
  overflow: hidden;
  @media(max-width: 800px) {
    padding-left: 2vw;
    padding-right: 2vw;
  }
  ${props => {
    return(
      `background-color: ${props.theme.palette.common.base}`
    )
  }}
  
`

