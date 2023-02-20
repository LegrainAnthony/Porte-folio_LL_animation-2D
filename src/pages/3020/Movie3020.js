import Border from "../../components/Border/Border";
import Navigation from "../../components/Navigation/Navigation";
import { MovieContainer, PagesContainer } from "./Movie3020.style";
import { useState, useEffect } from "react";

const Movie3020 = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  function handleBeforeUnload(event) {
    // Désactiver la boîte de dialogue d'avertissement par défaut
    event.preventDefault();

    // Lancer l'animation
    document.querySelector('#root').classList.add('animate-fadeout');

    // Attendre la fin de l'animation avant de quitter la page
    setTimeout(() => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.location.href = event.currentTarget.href;
    }, 1000);
  }

    return (
      <MovieContainer id="root" props={mounted}>
          <PagesContainer props={mounted}>
            <Navigation />
            <Border/>
            <div>Movie3020</div>
        </PagesContainer>
      </MovieContainer>
    )
}

export default Movie3020