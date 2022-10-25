import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

import LoginProvider from "./contexts/LoginContext"
import RegisterProvider from "./contexts/RegisterContext"
import TechProvider from "./contexts/TechContext"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <RegisterProvider>
          <TechProvider>
            <App />
          </TechProvider>
        </RegisterProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
)
