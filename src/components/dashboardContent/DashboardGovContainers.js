import React, { useState } from "react"
import { Accordion, Icon, Image, Header, Dropdown, Transition, Label } from 'semantic-ui-react'
import dbAPI from "../../modules/dbAPI"

const DashboardGovContainers = ({ gov, index, handleClick, activeIndex, setMadeChange, setActiveIndex }) => {

  const activeUserId = sessionStorage.getItem('userId')
  const [ infoByClassName, setAddInfoByClassName ] = useState()

  const infoClassNames = [{value:'ElectedOfficials', text:'Elected Officials'},{value:'AppointedOfficials', text:'Appointed Officials'},{value:'Departments', text:'Departments'},{value:'Committees', text:'Committees'},{value:'Events', text:'Events'},{value:'Legislation', text:'Legislation'},{value:'Elections', text:'Elections'},{value:'Notes', text:'Notes'} ]


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
        className="userGovAccordion"
        active={activeIndex === index}
        index={index}
        onClick={handleClick}
      >
        <Header as={'h3'}><Image className='dropdownIcon' src={require("../../images/govIcon1.png")} /><Image className='stateIcon' src={require(`../../images/stateIcons/${gov.attributes.state.toLowerCase().split(' ').join("-")}.png`)} />{gov.attributes.name}  ({gov.attributes.level})</Header>
        <Icon className='removeGov' name='minus circle' onClick={removeGovernment} />
      </Accordion.Title>
      <Transition animation='zoom' duration={300} visible={activeIndex === index}>
      <Accordion.Content className='govContentContainer' active={activeIndex === index}>
        <div className='createContentContainer'>
          <Label>Add Content</Label>
        <Dropdown
          className='createContent'
          labeled={true}
          placeholder='Select Info Type'
          style={{ width: '20%' }}
          selection
          options={infoClassNames}
          onChange={setAddInfoByClassName}
        />
        <Icon className='addContentIcon' name='plus' />
        </div>
      </Accordion.Content>
      </Transition>
    </>
  )

}

export default DashboardGovContainers;

