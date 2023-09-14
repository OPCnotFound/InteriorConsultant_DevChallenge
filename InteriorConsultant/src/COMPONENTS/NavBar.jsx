import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class NavLink {
  constructor(title, route, routeElement) {
    this.title = title;
    this.route = route;
    this.routeElement = routeElement;
  }
}
const NavBarLinks = [
  new NavLink("Home", "#home"),
  new NavLink("Collection", "#home"),
  new NavLink("About", "#home"),
  new NavLink("Contacts", "https://www.youtube.com/shorts/SXHMnicI6Pg"),
];

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary container" id="NavBar">
      <Navbar.Brand href="#home">this interior</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {NavBarLinks.map((link) => (
            <Nav.Link href={link.route} key={link.route}>
              {link.title}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
