import React from "react"
import { Card, Icon, Image, Popup, Button } from "semantic-ui-react"
import dbAPI from "../../../../modules/dbAPI"
import moment from "moment"
import EditEvent from "../../editContent/EditEvents"

const eventCard = ({ eventObj, setMadeChange }) => {
    const title = eventObj.attributes.title
    const when = eventObj.attributes.dateTime
    const where = eventObj.attributes.address
    const description = eventObj.attributes.notes

    async function deleteCard () {
        if(window.confirm("Are you sure you want to delete this committee? This can't be undone.")){
            await dbAPI.deleteObjectByClassNameAndId('Events', eventObj.id)
            .then(setMadeChange(true))
        }
        
    }

    return (
        <Card className='userContentCard eventCard'>
            
            <Card.Content>
            <Image className='cardImage' src={require('../../../../images/dashboardCardIcons/event.png')}  floated='right' size='mini' circular/>
                <Card.Header>{`${title}`}</Card.Header>
                <Card.Meta>
                    <span>{moment(when).format('LLLL')}</span>
                </Card.Meta>
                <Card.Description className='cardDescription' color='black'>
                    Where: {where}
                    <br/><br/>
                    Description: {description}
                    
      </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <EditEvent eventObj={eventObj} setMadeChange={setMadeChange} />
                <a onClick={deleteCard}>
                    <Icon name='trash alternate'/>
                    Delete
                </a>
            </Card.Content>
        </Card>
    )
}

export default eventCard;
