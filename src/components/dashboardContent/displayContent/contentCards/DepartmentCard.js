import React from "react"
import { Card, Icon, Image, Popup, Button } from "semantic-ui-react"
import dbAPI from "../../../../modules/dbAPI"
import EditDepartment from "../../editContent/EditDepartment"

const DepartmentCard = ({ departmentObj, setMadeChange }) => {
    const name = departmentObj.attributes.name
    const branch = departmentObj.attributes.branch
    const notes = departmentObj.attributes.notes
    const phone = departmentObj.attributes.phoneNumber
    const email = departmentObj.attributes.email
    const address = departmentObj.attributes.address

    async function deleteCard () {
        if(window.confirm("Are you sure you want to delete this department? This can't be undone.")){
            await dbAPI.deleteObjectByClassNameAndId('Departments', departmentObj.id)
            .then(setMadeChange(true))
        }
        
    }

    return (
        <Card className='userContentCard departmentCard' style={{backgroundColor: 'lightgreen !important'}}>
            
            <Card.Content>
            <Image className='cardImage' src={require('../../../../images/dashboardCardIcons/department.png')}  floated='right' size='mini' circular/>
                <Card.Header>{`${name}`}</Card.Header>
                <Card.Meta>
                    <span>{branch}</span>
                </Card.Meta>
                <Card.Description className='cardDescription' color='black'>
                  
                    Description: {notes}
                    
      </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Popup wide trigger={<Button content='Contact Info' />} on='click'>
                    <p>
                    Phone: {phone}
                    <br/>
                    Email: {email}
                    <br/>
                    Address: {address} 
                    </p>
                </Popup>
                <EditDepartment departmentObj={departmentObj} setMadeChange={setMadeChange}/>
                <a onClick={deleteCard}>
                    <Icon name='trash alternate'/>
                    Delete
                </a>
            </Card.Content>
        </Card>
    )
}

export default DepartmentCard