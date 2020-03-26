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
import "../../mapTemplates/MapToolbar.css"
import SelectStateDropdown from "./SelectStateDropdown"

const US_MapToolbar = ({selectLevel, chooseStateSelect}) => {
  // For collapsed navbar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
// for dropdown state menu

  return (
    <div className="mapToolbar" id="countryMapToolbar">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Governments</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem onClick={selectLevel}>
              <Button className="levelSelect city" value="city">City</Button>
            </NavItem>
            <NavItem onClick={selectLevel}>
              <Button className="levelSelect county" value="county">County</Button>
            </NavItem>
            <NavItem onClick={selectLevel}>
              <Button className="levelSelect state" value="state">State</Button>
            </NavItem>
            <NavItem onClick={selectLevel}>
              <Button className="levelSelect federal" value="federal">Federal</Button>
            </NavItem>
            
          </Nav>
          <Nav className="mr-auto" navbar>
          <SelectStateDropdown chooseStateSelect={chooseStateSelect}/>
      
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default US_MapToolbar;