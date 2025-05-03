import { AvatarList, CardComponent } from '@/components'
import { Container } from '@mui/material'
import Header from '@/components/Header'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListDate = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1234.0),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(2234.0),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(3234.0),
    },
  ]
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListDate} />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
