import { BrowserRouter,HashRouter, Routes, Route,Navigate} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import User from "./pages/User"
function App() {
  const isAuthenticated = true; // 
  return (
    <HashRouter>
      <Routes>

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes with Layout */}
        <Route
          path="/"
          element={
            isAuthenticated ? <MainLayout /> : <Navigate to="/login" />
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="users" element={<User />} />
        </Route>

      </Routes>
    </HashRouter>
  );
}

export default App;