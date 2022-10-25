import { Container } from "./style"
import { Link } from "react-router-dom"
import { CustomButton } from "../MaterialUi"
import { useLogin } from "../../contexts/LoginContext"

const logo = require("../../components/assets/Logo.svg").default

const Header = () => {
  const { setToken, setAuth } = useLogin()

  const handleLogOut = () => {
    window.localStorage.clear()
    setToken(null)
    setAuth(false)
  }
  
  return (
    <Container>
      <img src={logo} alt="KenzieHub logo" />
      <Link to="/" onClick={handleLogOut}>
        <CustomButton variant="contained" size="small">
          Sair
        </CustomButton>
      </Link>
    </Container>
  )
}

export default Header
