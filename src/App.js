import "./App.css";

import Profile from "./Components/Dashboard_Components/Profile";
import Layout from "./Components/Dashboard_Components/Layout";
import Forms from "./Components/Dashboard_Components/Forms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Errorpage from "./Components/Dashboard_Components/Errorpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/layout" element={<Layout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="*" elememt={<Errorpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
