import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../../redux/actions/loginAction";

function NavBarBuyerAuthenticated() {
  const history = useHistory();
  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(logoutUserThunk);
    history.push("/");
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
        <LinkContainer to="/">
          <Navbar.Brand href="#home" className={styles.logo}>
            Eco Store
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className={styles.right}>
            <LinkContainer to="/GiveBack">
              <Nav.Link eventKey={2} href="/GiveBack">
                Give Back
              </Nav.Link>
            </LinkContainer>
            <NavDropdown title="My Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/buyerdashboard">
                Account Settings <i class="fas fa-cog pull-right"></i>
              </NavDropdown.Item>
              <LinkContainer to="/home">
                <NavDropdown.Item onClick={logout}>
                  Logout <i class="fas fa-sign-out-alt pull-right"></i>
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/Cart">
              <Nav.Link eventKey={5} href="/Cart">
                Cart <i class="fas fa-shopping-cart"></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBarBuyerAuthenticated;
