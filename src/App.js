import "./App.scss";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import ReactProjects from "./components/ReactProjects";
import PythonProjects from "./components/PythonProjects";

function App() {
  return (
    <>
      <AboutMe />
      <ReactProjects />
      <PythonProjects />
      <Footer />
    </>
  );
}

export default App;
