import React from "react"
import { Card, Icon, Image, Popup, Button } from "semantic-ui-react"
import dbAPI from "../../../../modules/dbAPI"
import EditService from "../../editContent/EditServices"

const ServicesCard = ({ serviceObj, setMadeChange }) => {
    const name = serviceObj.attributes.name
    const notes = serviceObj.attributes.notes
    const phone = serviceObj.attributes.phoneNumber
    const email = serviceObj.attributes.email
    const address = serviceObj.attributes.address

    async function deleteCard () {
        if(window.confirm("Are you sure you want to delete this committee? This can't be undone.")){
            await dbAPI.deleteObjectByClassNameAndId('Services', serviceObj.id)
            .then(setMadeChange(true))
        }
        
    }

    return (
        <Card className='userContentCard serviceCard'>
            
            <Card.Content>
            <Image className='cardImage' src={require('../../../../images/dashboardCardIcons/services.png')}  floated='right' size='mini' circular/>
                <Card.Header>{`${name}`}</Card.Header>
                <Card.Meta>
                    {/* <span>{area}</span> */}
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
                <Popup wide trigger={<Button content='Description' />} on='click'>
                    <p>
                    Description: {notes}
                    </p>
                </Popup>
                <EditService serviceObj={serviceObj} setMadeChange={setMadeChange} />
                <a onClick={deleteCard}>
                    <Icon name='trash alternate'/>
                    Delete
                </a>
            </Card.Content>
        </Card>
    )
}

export default ServicesCard;
