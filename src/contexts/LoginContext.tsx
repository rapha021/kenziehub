import { yupResolver } from "@hookform/resolvers/yup"
import {DeepRequired, 
  FieldErrorsImpl,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form"
import { toast } from "react-toastify"
import * as yup from "yup"
import api from "../services/api"
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react"
import { Backdrop, CircularProgress } from "@mui/material"
import { useContext } from "react"

interface ILogin {
  emailError: boolean
  passwordError: boolean
  buttonLoad: boolean
  register: UseFormRegister<ILoginData>
  handleSubmit: UseFormHandleSubmit<ILoginData>
  errors: FieldErrorsImpl<DeepRequired<ILoginData>>
  onSubmit: (data: ILoginData) => void
  auth: boolean
  setAuth: Dispatch<SetStateAction<boolean>>
  setToken: Dispatch<SetStateAction<string | null>>
  token: string | null
  userData?: IUserData
  setUpdateList: Dispatch<SetStateAction<boolean>>
  updateList: boolean
}

interface ILoginProviderProps {
  children: ReactNode
}

interface IProfileResponse {
  data: IUserData
}

interface ILoginData {
  email: string
  password: string
}

export interface IUserData {
  id: string
  name: string
  email: string
  course_module: string
  bio: string
  contact: string
  techs: IUsertechs[]
  works: string
  created_at: string
  updated_at: string
  avatar_url: string
}

interface IUsertechs {
  id: string
  title: string
  status: string
  created_at: string
  updated_at: string
}

export const LoginContext = createContext<ILogin>({} as ILogin)

function LoginProvider({ children }: ILoginProviderProps) {
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [buttonLoad, setButtonLoad] = useState(false)

  const [auth, setAuth] = useState(false)
  const [token, setToken] = useState(
    window.localStorage.getItem("@KenzieHub: token")
  )
  const [updateList, setUpdateList] = useState(false)
  const [userData, setUserData] = useState<IUserData>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: IProfileResponse) => {
        setAuth(true)
        setLoading(false)
        setUserData(res.data)
      })
      .catch((err) => {
        setAuth(false)
        setLoading(false)
        window.localStorage.clear()
      })
  }, [token, updateList])

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required(() => {
        setEmailError(true)
        return "Insira seu e-mail!"
      })
      .email(() => {
        setEmailError(true)
        return "Email invalido!"
      }),
    password: yup.string().required(() => {
      setPasswordError(true)
      return "Insira sua Senha!"
    }),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(formSchema),
  })

  const onSubmit = async (data: ILoginData) => {
    setButtonLoad(true)
    await api
      .post("/sessions", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        window.localStorage.setItem("@KenzieHub: token", res.data.token)
        setToken(res.data.token)
        toast.success("Redirecionando", {
          autoClose: 500,
        })
      })
      .catch((err) => {
        toast.error("Email/Senha Incorretos", {
          autoClose: 1500,
        })
      })
    setButtonLoad(false)
  }

  return (
    <LoginContext.Provider
      value={{
        emailError,
        passwordError,
        buttonLoad,
        register,
        handleSubmit,
        errors,
        onSubmit,
        auth,
        setAuth,
        setToken,
        token,
        userData,
        setUpdateList,
        updateList,
      }}
    >
      {loading && (
        <Backdrop
          sx={{
            color: "#ff427f",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "var(--grey-4)",
          }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {children}
    </LoginContext.Provider>
  )
}

export const useLogin = () => useContext(LoginContext)

export default LoginProvider
