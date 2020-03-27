import React from "react"
import { Card, Icon, Image } from "semantic-ui-react"
import dbAPI from "../../../../modules/dbAPI"
import EditGovOfficialModal from "../../editContent/EditGovOfficial"

const GovernmentOfficialCard = ({ govOfficialObj, setMadeChange }) => {
    const fistName = govOfficialObj.attributes.firstName
    const lastName = govOfficialObj.attributes.lastName
    const position = govOfficialObj.attributes.position
    const department = govOfficialObj.attributes.department
    const phone = govOfficialObj.attributes.phoneNumber
    const email = govOfficialObj.attributes.email
    const address = govOfficialObj.attributes.address

    async function deleteCard () {
        if(window.confirm("Are you sure you want to delete this official? This can't be undone.")){
            await dbAPI.deleteObjectByClassNameAndId('GovernmentOfficials', govOfficialObj.id)
            .then(setMadeChange(true))
        }
        
    }

    return (
        <Card className='userContentCard govOfficialCard' style={{backgroundColor: 'lightgreen !important'}}>
            
            <Card.Content>
            <Image className='cardImage' src={require('../../../../images/dashboardCardIcons/governmentOfficial2.png')}  floated='right' size='mini' circular/>
                <Card.Header>{`${position} ${fistName} ${lastName}`}</Card.Header>
                <Card.Meta>
                    <span>{department}</span>
                </Card.Meta>
                <Card.Description className='cardDescription' color='black'>
                    Phone: {phone}
                    <br/>
                    Email: {email}
                    <br/>
                    Address: {address} 
                    
      </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <EditGovOfficialModal govOfficialObj={govOfficialObj} setMadeChange={setMadeChange} />
                <a onClick={deleteCard}>
                    <Icon name='trash alternate'/>
                    Delete
      </a>
            </Card.Content>
        </Card>
    )
}

export default GovernmentOfficialCard