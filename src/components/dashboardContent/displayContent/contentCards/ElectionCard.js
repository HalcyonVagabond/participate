import React from "react"
import { Card, Icon, Image, Popup, Button } from "semantic-ui-react"
import dbAPI from "../../../../modules/dbAPI"
import EditElection from "../../editContent/EditElections"

const ElectionCard = ({ electionObj, setMadeChange }) => {
    const name = electionObj.attributes.name
    const date = electionObj.attributes.date
    const votingLocation = electionObj.attributes.votingLocation


    async function deleteCard () {
        if(window.confirm("Are you sure you want to delete this election? This can't be undone.")){
            await dbAPI.deleteObjectByClassNameAndId('Elections', electionObj.id)
            .then(setMadeChange(true))
        }
        
    }

    return (
        <Card className='userContentCard electionCard' >
            
            <Card.Content>
            <Image className='cardImage' src={require('../../../../images/dashboardCardIcons/election.png')}  floated='right' size='mini' circular/>
                <Card.Header>{`${name}`}</Card.Header>
                <Card.Meta>
                    <span>{date}</span>
                </Card.Meta>
                <Card.Description className='cardDescription' color='black'>
                  
                    My voting location: 
                    <br/><br/>
                    {votingLocation}
                    
      </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <EditElection electionObj={electionObj} setMadeChange={setMadeChange} />
                <a onClick={deleteCard}>
                    <Icon name='trash alternate'/>
                    Delete
                </a>
            </Card.Content>
        </Card>
    )
}

export default ElectionCard;
