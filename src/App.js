import "./App.css";
import Header from "./Components/Dashboard_Components/Header";
import Sidebar from "./Components/Dashboard_Components/Sidebar";
import DashboardCards from "./Components/Dashboard_Components/DashboardCards";
import Profile from "./Components/Dashboard_Components/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Forms from "./Components/Dashboard_Components/Forms";
function App() {
  return (
    <>
      <Router>
        {/* <Header />
        <Sidebar /> */}

        <Routes>
          <Route path="/dashboard" element={<DashboardCards />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </Router>
      <DashboardCards />

      <Profile />
    </>
  );
}

export default App;
