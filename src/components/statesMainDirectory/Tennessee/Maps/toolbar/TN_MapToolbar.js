import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import "../../../../mapTemplates/MapToolbar.css"
import TN_DropDowns from "./TN_DropDowns"

const TN_MapToolbar = (props) => {
  // For collapsed navbar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mapToolbar" id="countryMapToolbar">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Tennessee</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem onClick={props.selectLevel}>
              <Button className="levelSelect city" value="city">City</Button>
            </NavItem>
            <NavItem onClick={props.selectLevel}>
              <Button className="levelSelect county" value="county">County</Button>
            </NavItem>
            <NavItem onClick={props.selectLevel}>
              <Button className="levelSelect state" value="state">State</Button>
            </NavItem>
            <NavItem onClick={props.selectLevel}>
              <Button className="levelSelect federal" value="federal">Federal</Button>
            </NavItem>
            
          </Nav>
          <Nav className="mr-auto" navbar>
          
          <TN_DropDowns govLevel={props.govLevel} />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TN_MapToolbar;