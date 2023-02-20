import Border from "../../components/Border/Border";
import Navigation from "../../components/Navigation/Navigation";
import { AnimationContainer, PagesContainer } from "./Animation2d.style";

const Animation2D = () => {
    return (
      <AnimationContainer>
        <PagesContainer>
          <Navigation />
          <Border/>
          <div>Animation2D</div>
        </PagesContainer>
      </AnimationContainer>
    )
}

export default Animation2D