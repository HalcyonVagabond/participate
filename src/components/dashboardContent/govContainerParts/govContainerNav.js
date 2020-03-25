import React, {useState} from "react"
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap"
import ContentFormConditional from "../addContent/ContentFormConditional"

const GovContainerNav = ({gov, setMadeChange}) => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Navbar className='createContentContainer' color="secondary" light expand="md">
          <NavbarBrand>Tools</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
          <ContentFormConditional govId={gov.id} setMadeChange={setMadeChange}/>
          
          
          </Nav>
          </Collapse>
        </Navbar>
    );
};

export default GovContainerNav;