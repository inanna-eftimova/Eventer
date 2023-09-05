import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";

import Welcome from "./components/Welcome/Welcome";
import CatalogEvents from "./components/Events/CatalogEvents/CatalogEvents";
import CreateEvent from "./components/Events/CreateEvent/CreateEvent";

function App() {
  return (
    <div id="wrapper">
    <Header/>

      <main>
        <Routes>
          <Route path="/" element={<Welcome/>} />

          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/logout" element={<Logout/>} />

          <Route path="/dashboard" element={<CatalogEvents/>} />
          <Route path="/create" element={<CreateEvent/>} />
        </Routes>

      </main>
    <Footer/>
    </div>
  );
}

export default App;
