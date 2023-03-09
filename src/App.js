import './App.css';
import './font.css';
import './reset.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Accueil from './pages/Accueil/Accueil';
import Animation2D from './pages/Animation2d/Animation2d';
import Movie3020 from './pages/3020/Movie3020';
import Illustration from './pages/Illustration/Illustration';
import Contact from './pages/Contact/Contact';
import Cjmsfv from './pages/CJMSFV/Cjmsfv';

function App() {

  const [mounted, setMounted] = useState(false);

  function getTheCurrentPage() {
    let loc = window.location.pathname;
    if (loc === "/Movie3020") {
      setMounted(true);
    } else {
      setMounted(false);
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Accueil getTheCurrentPage={getTheCurrentPage} mounted={mounted} />} />
      <Route path="/Animation2D" element={<Animation2D getTheCurrentPage={getTheCurrentPage} mounted={mounted} />} />
      <Route path="/Movie3020" element={<Movie3020 getTheCurrentPage={getTheCurrentPage} mounted={mounted} />} />
      <Route path="/Illustration" element={<Illustration getTheCurrentPage={getTheCurrentPage} mounted={mounted} />} />
      <Route path="/Contact" element={<Contact getTheCurrentPage={getTheCurrentPage} mounted={mounted} />} />
      <Route path="/Animation2D/MovieCJMSFV" element={<Cjmsfv getTheCurrentPage={getTheCurrentPage} mounted={mounted} />} />
      <Route path="*" element={<Accueil getTheCurrentPage={getTheCurrentPage} mounted={mounted} />} />
    </Routes>
  );
}

export default App;