import Projects from "./Components/Projects/index";
import Footer from "./Components/Footer/index";
import Title from "./Components/Helpers/Title";
import Heading from "./Components/Heading";
import Timeline from "./Components/Timeline";
import Background from "./Components/Helpers/particles";
import FadeinSection from "./Components/Helpers/FadeinSection";
import Navbar from "./Components/Navbar";
import './index.css'
import Container from "./Components/Helpers/Container";

function App() {
  return (
    <div>
      <Background />
      <Navbar />
      <Title/>
      <FadeinSection>
        <Container>
        <div>
          <Heading text="Experiences" />
          <Timeline/>
        </div>
        </Container>
      </FadeinSection>
      <FadeinSection>
        <Container>
        <div>
          <Heading text="Projects" />
          <Projects />
        </div>
        </Container>
      </FadeinSection>
      <Footer />
    </div>
  );
}
export default App;
