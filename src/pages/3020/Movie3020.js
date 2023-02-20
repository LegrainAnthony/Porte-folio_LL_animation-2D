import Border from "../../components/Border/Border";
import Navigation from "../../components/Navigation/Navigation";
import { MovieContainer, PagesContainer } from "./Movie3020.style";
import { useState, useEffect } from "react";
import "./glitch.css";

const Movie3020 = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

    return (
      <MovieContainer props={mounted}>
          <PagesContainer props={mounted}>
            <Navigation />
            <Border/>
          <div class="glitch-bloc">
            <p class="invisible-text">Movie3020</p>
            <p class="glitchedAnim">Movie3020</p>
            <p class="glitchedAnim">Movie3020</p>
            <p class="glitchedAnim">Movie3020</p>
          </div>  
        </PagesContainer>
      </MovieContainer>
    )
}

export default Movie3020