import { Routes, Route } from "react-router"
import LoginPage from "./pages/login-page"
import ProtectedDashboardLayout from "./components/protected-dashboard-layout"
import PublicRoute from "./components/public-route"

import Page1 from "./pages/author/page1"
import Page2 from "./pages/author/page2"
import Page3 from "./pages/author/page3"

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="/" element={<ProtectedDashboardLayout />}>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Route>
    </Routes>
  )
}

export default App
