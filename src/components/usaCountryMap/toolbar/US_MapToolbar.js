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
import "./US_MapToolbar.css"

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
            <NavItem onClick={props.selectLevel}>
              <Button className="levelSelect" value="city">City</Button>
            </NavItem>
            <NavItem onClick={props.selectLevel}>
              <Button className="levelSelect" value="county">County</Button>
            </NavItem>
            <NavItem onClick={props.selectLevel}>
              <Button className="levelSelect" value="state">State</Button>
            </NavItem>
            <NavItem onClick={props.selectLevel}>
              <Button className="levelSelect" value="federal">Federal</Button>
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