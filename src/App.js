import './App.css';
import './font.css';
import './reset.css';
import { Route, Routes } from 'react-router-dom';

import Accueil from './pages/Accueil/Accueil';
import Animation2D from './pages/Animation2d/Animation2d';
import Movie3020 from './pages/3020/Movie3020';
import Illustration from './pages/Illustration/Illustration';
import Contact from './pages/Contact/Contact';
import Cjmsfv from './pages/CJMSFV/Cjmsfv';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="Animation2D" element={<Animation2D />} />
      <Route path="Movie3020" element={<Movie3020 />} />
      <Route path="Illustration" element={<Illustration />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Animation2D/MovieCJMSFV" element={<Cjmsfv />} />
    </Routes>
  );
}

export default App;


// linkedin - insta - artation - mail