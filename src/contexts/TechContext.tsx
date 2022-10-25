import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import {
  DeepRequired,
  FieldErrorsImpl,
  FieldValues,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form"
import * as yup from "yup"
import api from "../services/api"
import { LoginContext } from "./LoginContext"
import { toast } from "react-toastify"

interface ITechProviderProps {
  children: ReactNode
}

interface ITechProvider {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  nameError: boolean
  register: UseFormRegister<FieldValues>
  handleSubmit: UseFormHandleSubmit<FieldValues>
  errors: FieldErrorsImpl<DeepRequired<FieldValues>> | any
  onSubmit: any
  loading: boolean
  handleDelete: (id: string) => void
  openEdit: boolean
  setOpenEdit: Dispatch<SetStateAction<boolean>>
  handleEdit: (data: ISelectedTech, status: string) => void
  setSelectedTech: Dispatch<SetStateAction<ISelectedTech>>
  selectedTech: ISelectedTech
}

interface ICreateTechData {
  name: string
  status: string
}

interface ISelectedTech {
  id: string
  status: string
  title: string
  created_at: string
  updated_at: string
}

export const TechContext = createContext<ITechProvider>({} as ITechProvider)

function TechProvider({ children }: ITechProviderProps) {
  const headers = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("@KenzieHub: token")}`,
    },
  }

  const { setUpdateList, updateList } = useContext(LoginContext)

  const [selectedTech, setSelectedTech] = useState<ISelectedTech>(
    {} as ISelectedTech
  )

  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  const [nameError, setNameError] = useState(false)
  const [loading, setLoading] = useState(false)

  const formSchema = yup.object().shape({
    name: yup.string().required(() => {
      setNameError(true)
      return "Campo Obrigatorio"
    }),
    status: yup.string(),
    id: yup.string(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  })

  async function onSubmit(data: ICreateTechData) {
    setLoading(true)
    await api
      .post(
        "/users/techs",
        {
          title: data.name,
          status: data.status,
        },
        headers
      )
      .then((res) => {
        setUpdateList(!updateList)
        toast.success("Tecnologia criada com sucesso!")
        setOpen(false)
      })
      .catch((err) => toast.error("Ops, houve um erro! Tente novamente."))
    setLoading(false)
  }

  async function handleDelete(id: string) {
    await api.delete(`/users/techs/${id}`, headers)
    setUpdateList(!updateList)
  }

  async function handleEdit(data: ISelectedTech, status: string) {
    setLoading(true)
    await api
      .put(
        `/users/techs/${data.id}`,
        {
          status: status,
        },
        headers
      )
      .then(() => {
        toast.success("Tecnologia atualizada com sucesso!")
        setUpdateList(!updateList)
      })
      .catch(() => {
        toast.error("Ops, aconteceu algum erro!")
      })
    setOpenEdit(false)
    setLoading(false)
  }

  return (
    <TechContext.Provider
      value={{
        open,
        setOpen,
        nameError,
        register,
        handleSubmit,
        errors,
        onSubmit,
        loading,
        handleDelete,
        openEdit,
        setOpenEdit,
        handleEdit,
        setSelectedTech,
        selectedTech,
      }}
    >
      {children}
    </TechContext.Provider>
  )
}

export const useTech = () => useContext(TechContext)

export default TechProvider
