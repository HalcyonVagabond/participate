import React from "react"
import { Card, Icon, Image } from "semantic-ui-react"

const GovernmentOfficialCard = ({ govOfficialObj }) => {
    const fistName = govOfficialObj.attributes.firstName
    const lastName = govOfficialObj.attributes.lastName
    const position = govOfficialObj.attributes.position
    const department = govOfficialObj.attributes.department
    const phone = govOfficialObj.attributes.phoneNumber
    const email = govOfficialObj.attributes.email
    const address = govOfficialObj.attributes.address

    console.log('GovOfficialObj from Card =>'+ govOfficialObj)

    return (
        <Card>
            
            <Card.Content>
            <Image src={require('../../../../images/dashboardCardIcons/governmentOfficial2.png')}  floated='right' size='mini' />
                <Card.Header>{`${position} ${fistName} ${lastName}`}</Card.Header>
                <Card.Meta>
                    <span>{department}</span>
                </Card.Meta>
                <Card.Description>
                    {`${phone}`}
                    {email}
                    {address}
      </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
        22 Friends
      </a>
            </Card.Content>
        </Card>
    )
}

export default GovernmentOfficialCard