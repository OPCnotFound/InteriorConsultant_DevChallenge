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
          src="/src/assets/img/photo1.png"
          width="550 px"
          alt="mainImage"
        />
        <div className="pageLayout-autor">
          <div className="pageLayout-autorprofile">
            <img src="/src/assets/img/photo2.png" alt="pp" />

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
