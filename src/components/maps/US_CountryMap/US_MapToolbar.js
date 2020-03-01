import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import "./US_FullMap.css"

const US_MapToolbar = (props) => {
  // For collapsed navbar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
// for dropdown state menu
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle2 = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="mapToolbar" id="countryMapToolbar">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Governments</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">City</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">County</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">State</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Federal</NavLink>
            </NavItem>
            
          </Nav>
          <Nav className="mr-auto" navbar>
          <Dropdown isOpen={dropdownOpen} toggle={toggle2} nav inNavbar>
              <DropdownToggle nav caret>
                Select State
              </DropdownToggle>
              <DropdownMenu right className="dropDownContainer">
                <DropdownItem>
                  Tennessee
                </DropdownItem>
                <DropdownItem>
                  Kentucky
                </DropdownItem>
                <DropdownItem>
                  New York
                </DropdownItem>
                <DropdownItem>
                  California
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          <Button>Search</Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default US_MapToolbar;