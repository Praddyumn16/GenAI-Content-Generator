import logo from "../logo.png";
import React from "react";
import { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          sticky="top"
          expand="md"
          collapseOnSelect
        >
          <Navbar.Brand href="/">
            <img src={logo} width="50px" />
            ContentAI
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="product-description">
                Product Description
              </Nav.Link>
              <Nav.Link href="cold-emails"> Cold Emails</Nav.Link>
              <Nav.Link href="tweets"> Tweets</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
