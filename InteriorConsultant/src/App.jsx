import Footer from "./COMPONENTS/Footer";
import NavBar from "./COMPONENTS/NavBar";
import Page from "./COMPONENTS/page";
import RespSlideSelector from "./app/RespSlideSelector";

function App() {
  return (
    <div>
      <RespSlideSelector />
      <NavBar />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
