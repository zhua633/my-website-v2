import Projects from "./Components/Projects/index";
import Footer from "./Components/Footer/index";
import Title from "./Components/Title";
import Heading from "./Components/Heading";
function App() {
  return (
    <div>
      <Title/>
      <Heading text="Projects"/>
      <Projects/>
      <Footer/>
    </div>
  )
  }
export default App;