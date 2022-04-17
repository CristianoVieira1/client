import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Content
        </Heading>

        <a href="mailto:info@thehrplatform.com">info@thehrplatform.com</a>
        <a href="#">(480) 790-0020</a>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Follow us
        </Heading>

        <nav arial-labelledby="social-media">
          <a
            href="https://www.instagram.com/the-hr-platform"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/the-hr-platform"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/the-hr-platform"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/the-hr-platform"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="resources">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav id="resources">
          <a href="/">
            <a>Home</a>
          </a>
          <a href="/about">
            <a>About</a>
          </a>
          <a href="/games">
            <a>Store</a>
          </a>
          <a href="/games">
            <a>Opportunities</a>
          </a>
          <a href="/search">
            <a>Buscar</a>
          </a>
        </nav>
      </S.Column>

      <S.Column aria-label="contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Scottsdale</span>
        <span>85250–85271</span>
        <span>Arizona, EUA</span>
      </S.Column>
    </S.Content>

    <S.Copyright>The HR Platform 2022 © All rights reserved</S.Copyright>
  </S.Wrapper>
)

export default Footer
