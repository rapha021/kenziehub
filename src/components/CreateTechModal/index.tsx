import {
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
} from "@mui/material"

import { Container } from "./style"
import { Close } from "@mui/icons-material"
import { useContext } from "react"
import { TechContext, useTech } from "../../contexts/TechContext"
import {
  CustomButton,
  CustomInput,
  CustomLoader,
  CustomSelect,
} from "../MaterialUi"

import { toast } from "react-toastify"
import { useState } from "react"
import { useEffect } from "react"
import { IUserData } from "../../contexts/LoginContext"

const Modal = () => {
  const {
    open,
    setOpen,
    nameError,
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
  } = useTech()

  return (
    <>
      {open && (
        <Container>
          <div className="modal-block">
            <div className="modal-header">
              <p className="title3 white">Cadastrar Tecnologia</p>
              <IconButton
                aria-label="add tech"
                sx={{
                  color: "#fff",
                  width: "36px",
                  height: "36px",
                  "&.MuiIconButton-root:hover": {
                    backgroundColor: "rgba(255,255,255, 0.1)",
                  },
                }}
                onClick={() => setOpen(false)}
              >
                <Close />
              </IconButton>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CustomInput
                id="name"
                label="Nome"
                variant="outlined"
                placeholder="Typescript"
                error={nameError}
                helperText={errors.name?.message}
                sx={{
                  width: "90%",
                }}
                defaultValue=""
                {...register("name")}
              />

              <FormControl
                sx={{
                  width: "90%",
                  "& label ": { color: "#fff" },
                }}
              >
                <InputLabel id="status">Selecione seu status</InputLabel>
                <CustomSelect
                  id="status"
                  label="Selecione seu status"
                  {...register("status")}
                  variant="outlined"
                  defaultValue={"Iniciante"}
                >
                  <MenuItem value={"Iniciante"}>Iniciante</MenuItem>
                  <MenuItem value={"Intermediário"}>Intermediário</MenuItem>
                  <MenuItem value={"Avançado"}>Avançado</MenuItem>
                </CustomSelect>
              </FormControl>

              <CustomButton
                variant="outlined"
                sx={{
                  width: "90% !important",
                  borderColor: "#ff427f !important",
                }}
                type="submit"
              >
                Enviar
              </CustomButton>

              {loading && <CustomLoader />}
            </form>
          </div>
        </Container>
      )}
    </>
  )
}

interface IEditModalProps {
  userData: IUserData | undefined
}

export const EditModal = ({ userData }: IEditModalProps) => {
  const {
    setOpenEdit,
    openEdit,
    register,
    handleSubmit,
    loading,
    handleDelete,
    handleEdit,
    selectedTech,
  } = useContext(TechContext)

  const [title, setTitle] = useState("")
  const [id, setId] = useState("")

  useEffect(() => {
    if (selectedTech.title !== undefined) {
      setTitle(selectedTech.title)
      setId(selectedTech.id)
    }
  }, [selectedTech])

  return (
    <>
      {openEdit && (
        <Container>
          <div className="modal-block">
            <div className="modal-header">
              <p className="title3 white">Detalhes da Tecnologia</p>
              <IconButton
                aria-label="add tech"
                sx={{
                  color: "#fff",
                  width: "36px",
                  height: "36px",
                  "&.MuiIconButton-root:hover": {
                    backgroundColor: "rgba(255,255,255, 0.1)",
                  },
                }}
                onClick={() => {
                  setOpenEdit(false)
                }}
              >
                <Close />
              </IconButton>
            </div>
            <form
              onSubmit={handleSubmit((data) =>
                handleEdit(selectedTech, data.status)
              )}
            >
              <input value={id} {...register("id")} hidden />

              <CustomInput
                id="name"
                label="Nome"
                InputProps={{
                  readOnly: true,
                  value: title,
                }}
                sx={{
                  width: "90%",
                }}
                {...register("name")}
              />

              <FormControl
                sx={{
                  width: "90%",
                  "& label ": { color: "#fff" },
                }}
              >
                <InputLabel id="status">Selecione seu status</InputLabel>

                <CustomSelect
                  id="status"
                  label="Selecione seu status"
                  variant="outlined"
                  defaultValue={selectedTech.status}
                  {...register("status")}
                >
                  <MenuItem value={"Iniciante"}>Iniciante</MenuItem>

                  <MenuItem value={"Intermediário"}>Intermediário</MenuItem>

                  <MenuItem value={"Avançado"}>Avançado</MenuItem>
                </CustomSelect>
              </FormControl>

              <Grid
                container
                spacing={2}
                sx={{
                  width: "95%",
                }}
              >
                <Grid item xs={7} sm={7}>
                  <CustomButton
                    variant="outlined"
                    sx={{
                      borderColor: "#ff427f !important",
                    }}
                    type="submit"
                  >
                    Editar
                  </CustomButton>
                </Grid>

                <Grid item xs={5} sm={5}>
                  <CustomButton
                    variant="contained"
                    sx={{
                      backgroundColor: "var(--grey-2) !important",
                    }}
                    onClick={async () => {
                      setOpenEdit(false)
                      await handleDelete(id)
                      toast.success("Tecnologia deletada!")
                    }}
                  >
                    Excluir
                  </CustomButton>
                </Grid>
              </Grid>
              {loading && <CustomLoader />}
            </form>
          </div>
        </Container>
      )}
    </>
  )
}

export default Modal
