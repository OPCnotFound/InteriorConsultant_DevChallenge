import Footer from "./COMPONENTS/Footer";
import NavBar from "./COMPONENTS/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <h3>Modern interior</h3>
        <p>
          A full-Service residential & commercial interior design and staging
          company offering professional organizing & eco-services.
        </p>
        <h4>Read more ---</h4>
        <div>
          <img
            src="../src/assets/img/photo1.png"
            width="550 px"
            alt="mainImage"
          />
          <div>
            <div>
              <img src="../src/assets/img/photo2.png" alt="pp" />
            </div>
            <div>
              <h5>Aliza Webber</h5>
              <h6>Interior designer</h6>
            </div>
          </div>
          <p>Designed in 2020 by Aliza Webber</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
