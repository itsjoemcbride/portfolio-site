import "./App.scss";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import ReactProjects from "./components/ReactProjects";
import PythonProjects from "./components/PythonProjects";
import UnityProjects from "./components/UnityProjects";

function App() {
  return (
    <>
      <AboutMe />
      <ReactProjects />
      <PythonProjects />
      <UnityProjects />
      <Footer />
    </>
  );
}

export default App;
