import { createContext, ReactNode, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import {
  DeepRequired,
  FieldErrorsImpl,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import api from "../services/api"

interface IRegisterContext {
  nameError: boolean
  emailError: boolean
  passwordError: boolean
  bioError: boolean
  contactError: boolean
  buttonLoad: boolean
  register: UseFormRegister<ISubmitData>
  handleSubmit: UseFormHandleSubmit<ISubmitData>
  errors: FieldErrorsImpl<DeepRequired<ISubmitData>>
  onSubmit: any
}

interface IRegisterProviderProps {
  children: ReactNode
}

interface ISubmitData {
  name: string
  email: string
  password: string
  bio: string
  contact: string
  course_module: string
}

export const RegisterContext = createContext<IRegisterContext>(
  {} as IRegisterContext
)

function RegisterProvider({ children }: IRegisterProviderProps) {
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [bioError, setBioError] = useState(false)
  const [contactError, setContactError] = useState(false)

  const [buttonLoad, setButtonLoad] = useState(false)

  const navigate = useNavigate()

  const formSchema2 = yup.object().shape({
    name: yup.string().required(() => {
      setNameError(true)
      return "Nome Obrigatorio!"
    }),
    email: yup
      .string()
      .required(() => {
        setEmailError(true)
        return "Email Obrigatorio!"
      })
      .email(),
    password: yup
      .string()
      .required(() => {
        setPasswordError(true)
        return "Senha Obrigatoria!"
      })
      .matches(/(?=.+[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}/, () => {
        setPasswordError(true)
        return "Senha fraca "
      }),
    passwordConfirm: yup.string().oneOf([yup.ref("password")], () => {
      setPasswordError(true)
      return "senha nao esta igual"
    }),
    bio: yup.string().required(() => {
      setBioError(true)
      return "Bio Obrigatoria!"
    }),
    contact: yup
      .string()
      .required(() => {
        setContactError(true)
        return "Numero Obrigatorio!"
      })
      .matches(
        new RegExp("^[(][0-9]{2}[)][0-9]{5}[-][0-9]{4}$"),
        "Numero invalido! (22)55555-4444"
      ),
    course_module: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitData>({
    resolver: yupResolver(formSchema2),
  })

  const onSubmit = (data: ISubmitData) => {
    setButtonLoad(true)

    api
      .post("/users", {
        name: data.name,
        email: data.email,
        password: data.password,
        bio: data.bio,
        contact: data.contact,
        course_module: data.course_module,
      })
      .then((res) => {
        toast.success("Registro feito com sucesso!", {})
        navigate("/login")
        setButtonLoad(false)
      })
      .catch((error) => {
        error.response.data.message === "Email already exists"
          ? toast.error("Email já cadastrado!")
          : toast.error(
              "Um erro inesperado aconteceu, tente novamente mais tarde"
            )
        setButtonLoad(false)
      })
  }

  return (
    <RegisterContext.Provider
      value={{
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
      }}
    >
      {children}
    </RegisterContext.Provider>
  )
}

export default RegisterProvider
