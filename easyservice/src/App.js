import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './front/Home';
import Login from './front/Login';
import Register from './front/Register';
import Profil from './front/Profil';
import MesDemandes from './front/Demandes';
import NotFound from './front/Erreur404';


function App() {
  return (
    <body>

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

    </body>
  );
}

export default App;