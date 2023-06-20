import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './front/Home';
import Login from './front/Login';
import Register from './front/Register';
import Profil from './front/Profil';
import MesDemandes from './front/Demandes';
import NotFound from './front/Erreur404';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Mobile_Navbar from "./Components/Mobile_Navbar";

function App() {
  return (
    <body>
      <div>
        <Navbar />
      </div>
      <div className="EasyService">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Demandes" element={<MesDemandes />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <div>
        <Mobile_Navbar />
      </div>
      <div>
        <Footer />
      </div>
    </body>
  );
}

export default App;