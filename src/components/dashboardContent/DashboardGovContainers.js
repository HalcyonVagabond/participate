import React, { useState, useEffect } from "react"
import { Accordion, Icon, Image, Header, Dropdown, Transition, Label } from 'semantic-ui-react'
import dbAPI from "../../modules/dbAPI"
import ContentFormConditional from "./addContent/ContentFormConditional"
import ReturnUserCards from "./displayContent/ReturnUserCards"
import GovContainerNav from "./govContainerParts/GovContainerNav"

const DashboardGovContainers = ({ gov, index, handleClick, activeIndex, madeChange, setMadeChange, setActiveIndex }) => {

  const activeUserId = sessionStorage.getItem('userId')
  
  const [userContent, setUserContent] = useState(null)
  const [filteredContent, setFilteredContent] = useState([])

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
      await dbAPI.getUserContentPerGovernment(gov.id).then(results=>{
        setUserContent(results)
        setFilteredContent(results)
      });
  }

  const createContentCards = () => {
    const reactComponentsArray = []

    if (userContent===null){
      return <h3>Loading Content!</h3>
    } else if (userContent.length > 1 && (userContent.filter(arrays=>arrays.length > 0).length)===0){
      return <p>You have not added any content for this government. Use the menu above to add content, or use the sidebar while exploring the site.</p>
    } else if ( filteredContent.length === 0 ) {
      return <p>You haven't saved anything for this resource. Create new content or try changing the filter.</p>
    } else if (filteredContent===userContent){
        filteredContent.forEach(classResourceArray=>{
          if (classResourceArray.length > 0){
            classResourceArray.forEach(classObject => {
                reactComponentsArray.push(
                    <ReturnUserCards 
                      key={classObject.id} 
                      classObject={classObject} 
                      setMadeChange={setMadeChange}
                      />)
            })
          }
        })
    } else {
      filteredContent.forEach(classObject => {
        reactComponentsArray.push(<ReturnUserCards key={classObject.id} classObject={classObject} setMadeChange={setMadeChange}/>)
      });
    }
    return reactComponentsArray;
  }

  useEffect(()=>{
    findUserContent()
    setMadeChange(false)
  },[madeChange])

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
        
        <GovContainerNav gov={gov} setMadeChange={setMadeChange} userContent={userContent} setFilteredContent={setFilteredContent}/>
        <div className='contentCardsContainer'>
          {createContentCards()}
        </div>
        
      </Accordion.Content>
      </Transition>
    </>
  )

}

export default DashboardGovContainers;

