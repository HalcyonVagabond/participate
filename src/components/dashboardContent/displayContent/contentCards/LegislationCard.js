import React from "react"
import { Card, Icon, Image, Popup, Button } from "semantic-ui-react"
import dbAPI from "../../../../modules/dbAPI"
import moment from "moment"

const legislationCard = ({ legislationObj, setMadeChange }) => {
    const title = legislationObj.attributes.title
    const branch = legislationObj.attributes.branch
    const contactInfo = legislationObj.attributes.contactInfo
    const description = legislationObj.attributes.description
    const votedOn = legislationObj.attributes.votedOn
    const passed = legislationObj.attributes.isPassed
    const voteDate = legislationObj.attributes.voteDate

    const votedOnConditional = () => {
        if(votedOn === true){
            return (
                <p>
                    Voted on: Yes
                    <br/>
                    Passed?: {passed === true ? 'Yes' : 'No'}
                    <br/>
                    Vote Date: {moment(voteDate).format('LLLL')}
                </p>
            )
        } else {
            return (
                <p>
                    Voted on: No
                    <br/>
                    Vote Date: {moment(voteDate).format('LLLL')}
                </p>
            )
        }
    }

    async function deleteCard () {
        if(window.confirm("Are you sure you want to delete this committee? This can't be undone.")){
            await dbAPI.deleteObjectByClassNameAndId('Legislation', legislationObj.id)
            .then(setMadeChange(true))
        }
        
    }

    return (
        <Card className='userContentCard legislationCard'>
            
            <Card.Content>
            <Image className='cardImage' src={require('../../../../images/dashboardCardIcons/legislation.png')} style={{height: '80% !important'}} floated='right' size='mini' circular/>
                <Card.Header>{`${title}`}</Card.Header>
                <Card.Meta>
                    <span>{branch}</span>
                </Card.Meta>
                <Card.Description className='cardDescription' color='black'>
                    {description}
                    <br/><br/>
                    {votedOnConditional()}
                    
      </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Popup wide trigger={<Button content='Contact Info' />} on='click'>
                    <p>
                    {contactInfo}
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

export default legislationCard;