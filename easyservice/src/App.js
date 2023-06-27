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
import Rating from "./front/Rating";
import Parrainage from "./front/Parrainage";
import Chat from "./front/Chat";
import Follow_Offer from "./front/Follow_Offer";
import Dashboard_presta from "./front/Dashboard_presta";

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
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Mesoffres" element={<Follow_Offer />} />
          <Route path="/Dashboardpresta" element={<Dashboard_presta />} />
          {/* route pour voir le suivie de la demande ( presta) */}
          {/* route des pages admin */}
          <Route path="/Rating" element={<Rating />} />
          <Route path="/Parrainage" element={<Parrainage />} />
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