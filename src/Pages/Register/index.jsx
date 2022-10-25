import { Link, Navigate } from "react-router-dom"
import Button from "../../components/Button"
import {
  CustomButton,
  CustomInput,
  CustomLoader,
  CustomSelect,
} from "../../components/MaterialUi"
import MenuItem from "@mui/material/MenuItem"
import { FormControl, Grid, InputLabel } from "@mui/material"
import { useContext } from "react"
import { RegisterContext } from "../../contexts/RegisterContext"
import { LoginContext } from "../../contexts/LoginContext"

import Logo from "../../components/assets/Logo.svg"
import { Container, Header } from "./style"

const Register = () => {
  const {
    nameError,
    emailError,
    passwordError,
    bioError,
    contactError,
    buttonLoad,
    register,
    handleSubmit,
    errors,
    onSubmit,
  } = useContext(RegisterContext)

  const { auth } = useContext(LoginContext)

  return (
    <>
      {auth && <Navigate to="/dashboard" replace={true} />}
      <Header>
        <img src={Logo} alt="KenzieHub logo" />
        <Link to="/login">
          <Button text="Voltar" color="grey-3" />
        </Link>
      </Header>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="title2 white">Crie sua conta</h2>
          <p className="headline grey">Rapido e grátis, vamos nessa</p>

          <CustomInput
            id="name"
            label="Seu Nome"
            variant="outlined"
            placeholder="Digite aqui seu nome"
            error={nameError}
            helperText={errors.name?.message}
            {...register("name")}
          />

          <CustomInput
            id="email"
            label="Seu Email"
            variant="outlined"
            placeholder="Digite aqui seu email"
            error={emailError}
            helperText={errors.email?.message}
            {...register("email")}
          />

          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <CustomInput
                id="password"
                type="password"
                label="Sua Senha"
                placeholder="Digite aqui sua senha"
                variant="outlined"
                error={passwordError}
                helperText={errors.password?.message}
                {...register("password")}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <CustomInput
                id="passwordConfirm"
                type="password"
                label="Repita Senha"
                placeholder="Digite aqui sua senha novamente"
                variant="outlined"
                error={passwordError}
                helperText={errors.passwordConfirm?.message}
                {...register("passwordConfirm")}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <CustomInput
                id="bio"
                type="text"
                label="Bio"
                placeholder="Fale sobre você"
                variant="outlined"
                error={bioError}
                helperText={errors.bio?.message}
                {...register("bio")}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <CustomInput
                id="contact"
                type="text"
                label="Celular"
                placeholder="(22)55555-4444"
                variant="outlined"
                error={contactError}
                helperText={errors.contact?.message}
                {...register("contact")}
              />
            </Grid>
          </Grid>
          <FormControl
            sx={{
              width: "100%",
              "& label ": { color: "#fff" },
            }}
          >
            <InputLabel id="course_module">Selecione seu Módulo</InputLabel>
            <CustomSelect
              id="course_module"
              label="Selecione seu Módulo"
              {...register("course_module")}
              variant="outlined"
              defaultValue={"Primeiro módulo (Introdução ao Frontend)"}
            >
              <MenuItem value={"Primeiro módulo (Introdução ao Frontend)"}>
                1º módulo (Introdução ao Frontend)
              </MenuItem>
              <MenuItem value={"Segundo módulo (Frontend Avançado)"}>
                2º módulo (Frontend Avançado)
              </MenuItem>
              <MenuItem value={"Terceiro módulo (Introdução ao Backend)"}>
                3º módulo (Introdução ao Backend)
              </MenuItem>
              <MenuItem value={"Quarto módulo (Backend Avançado)"}>
                4º módulo (Backend Avançado)
              </MenuItem>
            </CustomSelect>
          </FormControl>

          {buttonLoad && <CustomLoader />}
          <CustomButton variant="contained" type="submit">
            Cadastra-se
          </CustomButton>
        </form>
      </Container>
    </>
  )
}

export default Register
