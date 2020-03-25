import React, { useState, useEffect } from "react"
import { Accordion, Icon, Image, Header, Dropdown, Transition, Label } from 'semantic-ui-react'
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap"
import dbAPI from "../../modules/dbAPI"
import ContentFormConditional from "./addContent/ContentFormConditional"
import ReturnUserCards from "./displayContent/ReturnUserCards"

const DashboardGovContainers = ({ gov, index, handleClick, activeIndex, setMadeChange, setActiveIndex }) => {

  const activeUserId = sessionStorage.getItem('userId')

  const [collapsed, setCollapsed] = useState(true);
  const [userContent, setUserContent] = useState([])

  const toggleNavbar = () => setCollapsed(!collapsed);

  async function removeGovernment() {
    if (window.confirm(`Are you sure you want to remove ${gov.attributes.name}? Your content will stay intact, but you will not be able to access it unless you add the government again.`)) {
      await dbAPI.deleteUserGov(activeUserId, gov.id)
        .then(() => {
          setActiveIndex(-1)
          setMadeChange(true)
        })
    }
  }

  async function findUserContent() {
      await dbAPI.getUserContentPerGovernment(gov.id).then(results=>setUserContent(results));
  }

  const createContentCards = () => {
    const reactComponentsArray = []

    if (userContent.length===0){
      return <h3>Loading Content!</h3>
    } else if (userContent.length > 1 && (userContent.filter(arrays=>arrays.length > 0).length) < 1){
      return <p>You have not added any content for this government. Use the menu above to add content, or use the sidebar while exploring the site.</p>
    }  else {
        userContent.forEach(classResourceArray=>{
          if (classResourceArray.length > 0){
            classResourceArray.forEach(classObject => {
                reactComponentsArray.push(<ReturnUserCards key={classObject.id} classObject={classObject}/>)
            })
          }
        })
    }
    return reactComponentsArray;
  }
  // const stateVector = () => {
  //   const stateV = returnStateVector(gov.attributes.state)
  //   var b = document.getElementById(stateV.props.children.props.children.props.id).getBBox();
  //     console.log(b.x+" "+b.y+" "+b.width+" "+b.height);
  //     console.log(stateV.props.children.props.children.props.id)
  //     return stateV
  // }

  useEffect(()=>{
    findUserContent()
  },[])

  useEffect(()=>{
    console.log(userContent)
  }, [userContent])

  return (
    <>
      <Accordion.Title
        id={gov.id}
        className={`userGovAccordion ${gov.attributes.level}`}
        active={activeIndex === index}
        index={index}
        onClick={handleClick}
      >
        <Header as={'h3'}><Image className='dropdownIcon' src={require("../../images/govIcon1.png")} /><Image className='stateIcon' src={require(`../../images/stateIcons/${gov.attributes.state.toLowerCase().split(' ').join("-")}.png`)} />{gov.attributes.name}  ({gov.attributes.level})</Header>
        <Icon className='removeGov' name='minus circle' onClick={removeGovernment} />
      </Accordion.Title>
      <Transition animation='zoom' duration={300} visible={activeIndex === index}>
      <Accordion.Content className='govContentContainer' active={activeIndex === index}>
        <Navbar className='createContentContainer' color="secondary" light expand="md">
          <NavbarBrand>Tools</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
          <ContentFormConditional govId={gov.id} setMadeChange={setMadeChange}/>
          </Nav>
          </Collapse>
        </Navbar>
        <div className='contentCardsContainer'>
          {createContentCards()}
        </div>
        
      </Accordion.Content>
      </Transition>
    </>
  )

}

export default DashboardGovContainers;

