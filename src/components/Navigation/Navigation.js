import { Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/code.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <Navbar
        className="navbar"
        fixed="top"
        bg="dark"
        variant="dark"
        expand="lg"
      >
        <Navbar.Brand href="#about">
          <img src={Logo} alt="Logo" width="40" height="40" />
        </Navbar.Brand>
        <Navbar.Text className="nav-text">Yusif Ghonim</Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default Navigation;
