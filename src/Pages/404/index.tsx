import { Container } from "./styles"

const logo = require("./assets/404-image.svg").default

const Error404 = () => {
  return (
    <Container>
      <p className="title1 white">Esta página não existe</p>
      <img src={logo} alt="404 error img" />
    </Container>
  )
}

export default Error404
