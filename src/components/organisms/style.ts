import styled  from 'styled-components'

export const HeaderContainer= styled.header`
  display: flex;
  flex-direction: row;
  padding-left: 10vw;
  padding-right: 10vw;
  height: 60px;
  overflow: hidden;
  ${props => {
    return(
      `background-color: ${props.theme.palette.common.highlight}`
    )
  }}
  
`

