import Projects from "./Components/Projects/index";
import Footer from "./Components/Footer/index";
import Title from "./Components/Helpers/Title";
import Heading from "./Components/Heading";
import Timeline from "./Components/Timeline";
import Background from "./Components/Helpers/particles";
import FadeinSection from "./Components/Helpers/FadeinSection";
import Navbar from "./Components/Navbar";
import './index.css'

function App() {
  return (
    <div>
      <Background />
      <Navbar />
      <Title/>
      <FadeinSection>
        <div>
          <Heading text="Experiences" />
          <Timeline />
        </div>
      </FadeinSection>
      <FadeinSection>
        <div>
          <Heading text="Projects" />
          <Projects />
        </div>
      </FadeinSection>
      <Footer />
    </div>
  );
}
export default App;
