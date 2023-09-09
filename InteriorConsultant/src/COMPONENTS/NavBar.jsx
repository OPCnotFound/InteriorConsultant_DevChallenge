import styled from "styled-components";

const MainNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.62rem 0 9.56rem 0;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: Crimson Pro;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  text-transform: uppercase;
  padding: 0.5rem;
  border: 1px solid #fff;
`;

const Navegation = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  justify-content: space-between;
  gap: 5.8rem;
`;

const Links = styled.li`
  color: #fff;
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
//------------------------ styles--//

class NavLink {
  constructor(title, route, routeElement) {
    this.title = title;
    this.route = route;
    this.routeElement = routeElement;
  }
}
const NavBarLinks = [
  new NavLink("Home"),
  new NavLink("Collection"),
  new NavLink("About"),
  new NavLink("Contacts"),
];

const NavBar = () => {
  return (
    <MainNavBar>
      <Logo>this interior</Logo>

      <Navegation>
        {NavBarLinks.map((link) => (
          <Links key={link.route}>{link.title}</Links>
        ))}
      </Navegation>
    </MainNavBar>
  );
};

export default NavBar;
