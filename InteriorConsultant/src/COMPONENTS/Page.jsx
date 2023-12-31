import mainImage from "/assets/img/photo1.png";
import ppImage from "/assets/img/photo2.png";

const Page = () => {
  return (
    <div id="Page">
      <div className="pageInformation">
        <h3>Modern interior</h3>
        <p>
          A full-Service residential & commercial interior design and staging
          company offering professional organizing & <br></br>eco-services.
        </p>

        <a href="">
          Read more <i className="bi bi-arrow-right"></i>
        </a>
      </div>
      <div className="pageLayout">
        <img
          className="pageLayout-image"
          src={mainImage}
          width="550 px"
          alt="mainImage"
        />
        <div className="pageLayout-autor">
          <div className="pageLayout-autorprofile">
            <img src={ppImage} width="550 px" alt="mainImage" />
            <div className="pageLayout-autorinfo">
              <h5>Aliza Webber</h5>
              <h6>Interior designer</h6>
            </div>
          </div>
          <div>
            <p>Designed in 2020 by Aliza Webber</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
