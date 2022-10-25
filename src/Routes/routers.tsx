import { Navigate, Route, Routes } from "react-router-dom"
import Error404 from "../Pages/404"
import Dashboard from "../Pages/Dashboard"
import Login from "../Pages/Login"
import Register from "../Pages/Register"

const RouterMain = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default RouterMain
