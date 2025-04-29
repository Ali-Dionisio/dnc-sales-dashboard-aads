import styled, { DefaultTheme } from 'styled-components'
import { Link } from 'react-router-dom'
import { Logo } from '@/components'
import { Avatar, Box, Container } from '@mui/material'
import { pxToRem } from '@/utils'

const StyleHeader = styled.div<{ theme?: DefaultTheme }>`
  background-color: ${(props) => props.theme.appBackground};
  border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.appDefaultStroke}
  margin-bottom: ${pxToRem(37)}
  width: 100%;
`

function Header() {
  return (
    <StyleHeader>
      <Container>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            Height: pxToRem(64),
          }}
        >
          <Link to="/home">
            <Logo height={30} width={73} />
          </Link>
          <Link to="/perfil">
            <Avatar
              alt="DNC Avatar"
              src=".\dnc-avatar.svg"
              sx={{ width: pxToRem(40), height: pxToRem(40) }}
            ></Avatar>
          </Link>
        </Box>
      </Container>
    </StyleHeader>
  )
}

export default Header
