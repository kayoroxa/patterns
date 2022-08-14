import Link from 'next/link'
import { Container, Description, Main, Title } from '../components/sharedstyles'

export default function About() {
  return (
    <Container>
      <Main>
        <Title>About Page</Title>
        <Description>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </Description>
      </Main>
    </Container>
  )
}
