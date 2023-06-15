import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './front/Home';
import Profile from './front/Profile';
import MesDemandes from './front/Demandes';
import NotFound from './front/Erreur404';

function App() {
  return (
    <body>
      <header></header>

      <div className="EasyService">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Demandes" element={<MesDemandes />} />
          <Route path="/Erreur404" element={<NotFound />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;