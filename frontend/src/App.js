import Projects from "./Components/Projects/index";
import Footer from "./Components/Footer/index";
import Title from "./Components/Title";
import Heading from "./Components/Heading";
import Timeline from "./Components/Timeline";

function App() {
  return (
    <div>
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