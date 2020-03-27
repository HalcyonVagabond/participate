import React from 'react'
import { Tab, Grid, Image, Card } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Executive', render: () => <Tab.Pane>Executive</Tab.Pane> },
  { menuItem: 'Legislative', render: () => <Tab.Pane>Legislative</Tab.Pane> },
  { menuItem: 'Judicial', render: () => <Tab.Pane>Judicial</Tab.Pane> },
]

const TabExampleVerticalTabular = () => (
  <>
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
      <Card className='govOfficialCard'>
            
            <Card.Content>
            <Image className='cardImage' src={require('../../../../../../images/dashboardCardIcons/governmentOfficial.png')}  floated='right' size='mini' circular/>
                <Card.Header>Executive Branch</Card.Header>
                <Card.Meta>
                </Card.Meta>
                <Card.Description className='cardDescription' color='black'>
                  
                This is the branch with the Governor and many departments. 
                    
      </Card.Description>
            </Card.Content>
            <Card.Content extra>
                
            </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
      <Card className='committeeCard'>
            
            <Card.Content>
            <Image className='cardImage' src={require('../../../../../../images/dashboardCardIcons/committee.png')}  floated='right' size='mini' circular/>
                <Card.Header>Executive Branch</Card.Header>
                <Card.Meta>
                </Card.Meta>
                <Card.Description className='cardDescription' color='black'>
                  
                This is the branch with the State Senate and State House of Representatives 
                    
      </Card.Description>
            </Card.Content>
            <Card.Content extra>
                
            </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
      <Card className='legislationCard'>
            
            <Card.Content>
            <Image className='cardImage' src={require('../../../../../../images/govTabsIcons/judicial.png')}  floated='right' size='mini' circular/>
                <Card.Header>Executive Branch</Card.Header>
                <Card.Meta>
                </Card.Meta>
                <Card.Description className='cardDescription' color='black'>
                  
                This is the branch with the courts. 
                    
      </Card.Description>
            </Card.Content>
            <Card.Content extra>
                
            </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  </>
)

export default TabExampleVerticalTabular