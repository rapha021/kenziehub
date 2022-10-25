import Routers from "./Routes/routers"
import { ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import { GlobalStyle } from "./style"

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Routers />
    </>
  )
}

export default App
