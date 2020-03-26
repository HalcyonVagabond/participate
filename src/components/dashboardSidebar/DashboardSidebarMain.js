import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import { Transition, Button, Icon, Sidebar, Header, } from 'semantic-ui-react'
import "./DashboardSidebar.css"
import SidebarContentMain from "./dashboardComponents/SidebarContentMain"



const DashboardSidebarMain = ({isLoggedIn, govLevel}) => {
    const [isVisible, changeVisible] = useState(false)
    const [isFormVisible, changeIsFormVisible] = useState(false)
    const [isSubmitted, toggleSubmitted] = useState(false)


    const toggleVisibility = () => {
        changeVisible(!isVisible)
    }
    const toggleFormVisibility = () => {
        document.getElementById('title').value = ""
        document.getElementById('completion_date').value = ""
        changeIsFormVisible(!isFormVisible)
    }

    if(isLoggedIn===true){
        return (

            <div className="tasksContainer">
                <>
                    
                        <Button id="openTasksButton" icon onClick={toggleVisibility}><Icon name="angle double up" />Dashboard</Button>
                    <Transition visible={isVisible} animation='slide left' duration={350}>
                        <section className="tasksSidebar">
                            <Button id="closeTasksButton" icon onClick={toggleVisibility}><Icon name="angle double right" /></Button>
                            <Link to="/dashboard"><Button className='dashboardLinkButton' onClick={toggleVisibility}>My Dashboard</Button></Link>
                            <div id="dashboardSidebarContentContainer">                                      
                                <SidebarContentMain govLevel={govLevel}/>   
                            </div>
                        </section>
                    </Transition>
                </>
    
            </div>
    
        )
    } else {
        return null
    }
    
}

export default DashboardSidebarMain;