import React, { useState } from "react"
import { Accordion, Icon, Image, Header, Dropdown, Transition, Label } from 'semantic-ui-react'
import dbAPI from "../../../modules/dbAPI"
import ContentFormConditional from "./addContent/ContentFormConditional"

const SidebarGovContainers = ({ gov, index, handleClick, activeIndex, setMadeChange, setActiveIndex }) => {

  const activeUserId = sessionStorage.getItem('userId')

  async function removeGovernment() {
    if (window.confirm(`Are you sure you want to remove ${gov.attributes.name}? Your content will stay intact, but you will not be able to access it unless you add the government again.`)) {
      await dbAPI.deleteUserGov(activeUserId, gov.id)
        .then(() => {
          setActiveIndex(-1)
          setMadeChange(true)
        })
    }
  }

  return (
    <>
      <Accordion.Title
        id={gov.id}
        className={`userGovAccordion ${gov.attributes.level}`}
        active={activeIndex === index}
        index={index}
        onClick={handleClick}
      >
        <Header as={'h3'}><Image className='stateIcon' src={require(`../../../images/stateIcons/${gov.attributes.state.toLowerCase().split(' ').join("-")}.png`)} />{gov.attributes.name}  ({gov.attributes.level})</Header>
        <Icon className='removeGov' name='minus circle' onClick={removeGovernment} />
      </Accordion.Title>
      <Transition animation='zoom' duration={300} visible={activeIndex === index}>
      <Accordion.Content className='govContentContainerSidebar' active={activeIndex === index}>
        <div className='createContentContainer'>
          <ContentFormConditional govId={gov.id} setMadeChange={setMadeChange}/>
        </div>
      </Accordion.Content>
      </Transition>
    </>
  )

}

export default SidebarGovContainers;

