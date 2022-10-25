import { IconButton } from "@mui/material"
import Header from "../../components/Header"
import { useLogin } from "../../contexts/LoginContext"
import { useTech } from "../../contexts/TechContext"
import Modal, { EditModal } from "../../components/CreateTechModal"

import { SubHeader, List, Container } from "./style"
import AddIcon from "@mui/icons-material/Add"
import { Navigate } from "react-router-dom"

const Dashboard = () => {
  const { userData, auth } = useLogin()
  const { setOpen, setOpenEdit, setSelectedTech } = useTech()

  return (
    <>
      {!auth && <Navigate to="/login" replace={true} />}
      <Header />
      <Container>
        <SubHeader>
          <div className="infos">
            <p className="title1 white">Olá, {userData?.name}</p>
            <p className="headline-bold grey">{userData?.course_module}</p>
          </div>
        </SubHeader>

        <div className="list-header">
          <h3 className="title2 white">Tecnologias</h3>
          <IconButton
            aria-label="add tech"
            sx={{
              color: "#fff",
              width: "46px",
              height: "46px",
              "&.MuiIconButton-root:hover": {
                backgroundColor: "rgba(255,255,255, 0.1)",
              },
            }}
            onClick={() => setOpen(true)}
          >
            <AddIcon />
          </IconButton>
        </div>

        <List>
          {userData?.techs &&
            userData?.techs.map((tech) => (
              <li
                key={tech.id}
                onClick={() => {
                  setOpenEdit(true)
                  setSelectedTech({ ...tech })
                }}
              >
                <p className="title3 white">{tech.title}</p>
                <p className="headline white">{tech.status}</p>
              </li>
            ))}
        </List>
      </Container>

      <Modal />
      <EditModal userData={userData} />
    </>
  )
}

export default Dashboard
