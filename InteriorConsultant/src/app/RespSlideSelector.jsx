const RespSlideSelector = () => {
  /*let checkbox = document.querySelector("input[name=checkbox]");
  let Slider = true();
  Slider ? console.log(1) : console.log(0);
  console.log("test");

  checkbox.addEventListener("change", function () {
    if (Slider) {
      console.log("Checkbox is checked..");
    } else {
      console.log("Checkbox is not checked..");
    }
  });*/

  return (
    <div id="Respon">
      <div className="switch">
        <input
          id="checkbox1"
          className="look"
          type="checkbox"
          name="checkbox"
        />
        <label htmlFor="checkbox1"></label>
      </div>
    </div>
  );
};

export default RespSlideSelector;
