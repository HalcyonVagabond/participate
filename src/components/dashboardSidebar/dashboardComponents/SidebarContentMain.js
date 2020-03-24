import React, { useState, useEffect } from "react"
import { Input, Button, Dropdown, Icon, Accordion } from "semantic-ui-react"
import dbAPI from "../../../modules/dbAPI"
import "../../dashboardContent/Dashboard.css"
import SidebarGovContainers from "./SidebarGovContainers"

const DashboardPageMain = () => {
    const activeUserId = sessionStorage.getItem('userId')

    const [madeChange, setMadeChange] = useState(false)
    const [govObjects, setGovObjects] = useState([])
    const [govToBeAdded, setGovToBeAdded] = useState()
    const [userGovernments, setUserGovernments] = useState([])

    const [activeIndex, setActiveIndex] = useState(-1)

    const handleClick = (e, titleProps) => {
        if(e.target.className.includes('removeGov') === false){
            const { index } = titleProps
            const newIndex = activeIndex === index ? -1 : index
            setActiveIndex(newIndex) 
        }
      }

    async function getGovernmentsToAdd() {
        await dbAPI.getGovernmentsNotSelected()
            .then(governments => {
                const sortedGovernments = governments.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name))
                const dropdownGovs = sortedGovernments.map(result => {
                    const dropdownObj = {
                        key: result.id,
                        value: result.id,
                        text: `${result.attributes.name}    (${result.attributes.level})`
                    }
                    return dropdownObj
                })
                setGovObjects(dropdownGovs)
            })
    }

    async function getUserGovernments() {
        await dbAPI.getUserGovernments()
            .then(governments => {
                if (governments.length === 0) {
                    setUserGovernments(null)
                } else {
                    const sortedGovernments = governments.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name))
                    setUserGovernments(sortedGovernments)
                }
            })
    }

    const addGovToDashboard = () => {
        const userGovObj = {
            userId: activeUserId,
            governmentId: govToBeAdded
        }
        dbAPI.createNewObjectByClassName('UserGovernments', userGovObj)
            .then(() => setMadeChange(true))
    }

    const addGovContainers = () => {
        if (userGovernments === undefined) {
            return <h3>Loading Your Governments</h3>
        } else if (userGovernments === null) {
            return <h1>You have not added any governments yet . . . Add a government from the list above to get started!</h1>
        } else {
            return userGovernments.map((gov, index) => <SidebarGovContainers key={index} gov={gov} index={index} handleClick={handleClick} activeIndex={activeIndex} setMadeChange={setMadeChange} setActiveIndex={setActiveIndex} />)
        }
    }

    const setAddGov = (event, data) => {
        setGovToBeAdded(data.value)
    }

    useEffect(() => {
        getGovernmentsToAdd()
        getUserGovernments()
        setMadeChange(false)
    }, [madeChange])


    return (
        <section className="dashboardPageContainer">
            <div className='governmentSelectContainer'>
                <h3>Add Government</h3>
                <Icon className="govAddButton" onClick={addGovToDashboard} name='plus' inverted circular link title="Click to add government to your dashboard!" />
                <Dropdown
                    id='governmentDropdown'
                    placeholder='Add Government'
                    style={{ width: '50%' }}
                    search
                    selection
                    options={govObjects}
                    onChange={setAddGov}
                />
            </div>
            <div className='govAccordionContainer'>
                <Accordion className="govAccordion" styled>
                    {addGovContainers()}
                </Accordion>
            </div>
        </section>

    )

}

export default DashboardPageMain;