import './App.css';
import './reset.css'
import { Route, Routes } from 'react-router-dom';

import Acceuil from './pages/Acceuil/Acceuil';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Acceuil />} />
    </Routes>
  );
}

export default App;


// linkedin - insta - artation - mail