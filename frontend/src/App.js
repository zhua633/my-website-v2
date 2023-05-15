import Projects from "./Components/Projects/index";
import Footer from "./Components/Footer/index";
import Title from "./Components/Helpers/Title";
import Heading from "./Components/Heading";
import Timeline from "./Components/Timeline";
import Background from "./Components/Helpers/particles";
function App() {
  return (
    <div>
      <Background/>
      <Title/>
      <Heading text="Experiences"/>
      <Timeline/>
      <Heading text="Projects"/>
      <Projects/>
      <Footer/>
    </div>
  )
  }
export default App;