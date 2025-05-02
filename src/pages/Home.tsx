import { CardComponent } from '@/components'
import { Container } from '@mui/material'
import Header from '@/components/Header'

function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
      </Container>
    </>
  )
}

export default Home
