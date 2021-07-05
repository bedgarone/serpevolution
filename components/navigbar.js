import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavigBar = ({ pagename }) => {
  const pages = [
    ["Elements", "/serpevolution/elements"],
    ["Timeline", "/serpevolution/timeline"],
    ["Patterns", "/serpevolution/patterns"],
    ["Layout", "/"],
    ["Overall Design", "/"],
    ["Identity & Search Statistics", "/"],
    ["Navigation & User Inputs", "/"],
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div className="container">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {pages.map((pag) => {
                return (
                  <NavItem>
                    <NavLink
                      className={pagename == pag[0] ? "nav-selected" : ""}
                      href={pag[1]}
                    >
                      {pag[0]}
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavigBar;
