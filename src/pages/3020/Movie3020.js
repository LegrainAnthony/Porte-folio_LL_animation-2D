import Border from "../../components/Border/Border";
import Navigation from "../../components/Navigation/Navigation";
import { MovieContainer, PagesContainer } from "./Movie3020.style";
import { useState, useEffect } from "react";

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
            <div>Movie3020</div>
        </PagesContainer>
      </MovieContainer>
    )
}

export default Movie3020