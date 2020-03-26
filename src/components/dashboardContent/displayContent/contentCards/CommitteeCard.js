import React from "react"
import { Card, Icon, Image, Popup, Button } from "semantic-ui-react"
import dbAPI from "../../../../modules/dbAPI"

const CommitteeCard = ({ committeeObj, setMadeChange }) => {
    const name = committeeObj.attributes.name
    const branch = committeeObj.attributes.branch
    const notes = committeeObj.attributes.notes
    const phone = committeeObj.attributes.phoneNumber
    const email = committeeObj.attributes.email
    const address = committeeObj.attributes.address

    async function deleteCard () {
        if(window.confirm("Are you sure you want to delete this committee? This can't be undone.")){
            await dbAPI.deleteObjectByClassNameAndId('Committees', committeeObj.id)
            .then(setMadeChange(true))
        }
        
    }

    return (
        <Card className='userContentCard committeeCard'>
            
            <Card.Content>
            <Image className='cardImage' src={require('../../../../images/dashboardCardIcons/committee.png')}  floated='right' size='mini' circular/>
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
                <a onClick={deleteCard}>
                    <Icon name='trash alternate'/>
                    Delete
                </a>
            </Card.Content>
        </Card>
    )
}

export default CommitteeCard;
