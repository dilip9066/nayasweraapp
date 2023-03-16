import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Dashboard_Components/Header";
import Sidebar from "./Components/Dashboard_Components/Sidebar";
import DashboardCards from "./Components/Dashboard_Components/DashboardCards";

function App() {
  return (
    <>
      <Header />
      <Sidebar />

      <DashboardCards />
    </>
  );
}

export default App;
