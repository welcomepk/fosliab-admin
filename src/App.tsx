import { Routes, Route } from "react-router"
import LoginPage from "./pages/login-page"
import ProtectedDashboardLayout from "./components/protected-dashboard-layout"
import PublicRoute from "./components/public-route"
function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="/" element={<ProtectedDashboardLayout />}>
        <Route path="/page1" element={<div>Page 1</div>} />
      </Route>
    </Routes>
  )
}

export default App
