import { Link, Navigate } from "react-router-dom"
import { Container } from "./style"
import {
  CustomButton,
  CustomInput,
  CustomLoader,
} from "../../components/MaterialUi"
import { useLogin } from "../../contexts/LoginContext"

const logo = require("../../components/assets/Logo.svg").default

const Login = () => {
  const {
    emailError,
    passwordError,
    buttonLoad,
    register,
    handleSubmit,
    errors,
    onSubmit,
    auth,
  } = useLogin()

  return (
    <Container>
      {auth && <Navigate to="/dashboard" replace={true} />}

      <img src={logo} alt="" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__login-container">
          <h2 className="title2 white">Login</h2>
          <CustomInput
            id="email"
            label="Email"
            variant="outlined"
            placeholder="email@exemplo.com"
            error={emailError}
            helperText={errors.email?.message}
            {...register("email")}
          />

          <CustomInput
            id="pass"
            label="Senha"
            variant="outlined"
            type="password"
            error={passwordError}
            helperText={errors.password?.message}
            {...register("password")}
          />

          <CustomButton variant="contained" type="submit">
            Logar
          </CustomButton>
          {buttonLoad && <CustomLoader />}
        </div>
        <div className="form__register-container">
          <h2 className="headline grey">Ainda não possui uma conta?</h2>
          <Link to="/register" className="link">
            <CustomButton variant="outlined">Cadastre-se</CustomButton>
          </Link>
        </div>
      </form>
    </Container>
  )
}

export default Login
