import React from 'react'
import { Tab, Grid, Image, Card } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Executive', render: () => <Tab.Pane>Executive<br/>

Governor
As set by the Constitution, Tennessee's governor is the Supreme Executive Power. He or she (currently Governor Bill Lee[2]) is responsible for enforcing state laws and the state constitution. He is also known as the keeper of the Great Seal of the State of Tennessee.

Lieutenant Governor
The current Lieutenant Governor is Randy McNally. He was elected on January 10, 2017 and is the second, consecutive Republican to hold the office.

Cabinet Members
Lang Wiseman - Deputy to the Governor and Chief Counsel

Blake Harris - Chief of Staff in the Governor's Office

Butch Eley - Chief Operating Officer in the Governor's Office

Chris Devaney - Special Assistant to the Governor

Brandon Gibson - Senior Advisor in the Governor's Office

Chris Walker - Communications Director and Senior Advisor in the Governor's Office

Tony Niknejad - Policy Director

Charlie Hatcher - Commissioner of Agriculture

Jennifer Nichols - Commissioner of Children's Services

Julie Mix McPeak - Commissioner of Commerce and Insurance

Tony C. Parker - Commissioner of Correction

Brad Turner - Commissioner of Intellectual and Developmental Disabilities

Bob Rolfe - Commissioner of Department of Economic and Community Development

Penny Schwinn - Commissioner of Education

David Salyers - Commissioner of Environment and Conservation

Stuart McWhorter - Commissioner of Finance and Administration

Greg Gonzales - Commissioner of Financial Institutions

Christi Branscom - Commissioner of General Services

Lisa Piercey - Commissioner of Health

Juan Williams - Commissioner of Human Resources

Danielle Barnes - Commissioner of Human Services

Jeff McCord - Commissioner of Labor and Workforce

Marie Williams - Commissioner of Mental Health

Jeff Holmes - Commissioner of the Military

David Gerregano - Commissioner of Revenue

Jeff Long - Commissioner of Safety and Homeland Security

Gabe Roberts - Director of TennCare

Mark Ezell - Commissioner of Tourism

Clay Bright - Commissioner of Transportation

Courtney Rogers - Commissioner of Veterans
  </Tab.Pane> },
  { menuItem: 'Legislative', render: () => <Tab.Pane>
    
    Legislative branch
    <br/>
The Tennessee General Assembly, the state legislature, consists of the 33-member Senate and the 99-member House of Representatives. Senators serve four-year terms, and House members serve two-year terms. Each chamber chooses its own speaker, e.g., the Lieutenant Governor and Speaker of the Senate of Tennessee is elected by the Senate from among its members. Constitutional officials in the legislative branch are elected by a joint session of the legislature.
    </Tab.Pane> },
  { menuItem: 'Judicial', render: () => <Tab.Pane>Judicial<br/>
  Supreme Court[4]
The Supreme Court of Tennessee is known as the “Court of Last Resort.” It composed of a chief justice (currently Jeffrey S. Bivins) and four associate justices (currently Holly Kirby, Cornelia Clark, Sharon Lee, and Roger Page). No more than two justices can be from the same Grand Division. As required by the Tennessee Constitution, the Supreme Court regularly meets in Jackson, Knoxville, and Nashville. In addition to the regular meetings of the Supreme Court, the Court takes their oral arguments on the road as part of the SCALES program (Supreme Court Advancing Legal Education for Students) a few times each year.

The Supreme Court of Tennessee also appoints the Attorney General (currently Herbert Slatery III), a practice that is not found in any of the other 49 states in the Union. The Attorney General of Tennessee is the chief legal officer of the state, and "represents state officers and agencies through his staff of approximately 340 employees working in five offices across Tennessee".

Intermediate Appellate Courts
The intermediate appellate courts of Tennessee include the court of appeals and the court of criminal appeals. The court of appeals hears cases appealed from probate, chancery, and circuit courts, whereas the court of criminal appeals hears cases appealed from circuit and criminal courts.

Both the Court of Appeals and the Court of Criminal Appeals have 12 judges.

Trial Courts
Trial courts in the state of Tennessee include probate courts, chancery courts, circuit courts, and criminal courts. The circuit courts, chancery and probate courts, and criminal courts each have 31 judicial districts.

Courts of Limited Jurisdiction
The courts of limited jurisdiction include juvenile courts, general sessions courts, and municipal courts.
  </Tab.Pane> },
]

const TabExampleVerticalTabular = () => (
  <>
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
      <Card className='govOfficialCard'>
            
            <Card.Content>
            <Image className='cardImage' src={require('../../../images/stateCapitol.jpeg')}  wrapped />
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
            <Image className='cardImage' src={require('../../../images/houseChamber.jpeg')}  wrapped/>
                <Card.Header>Legislative Branch</Card.Header>
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
            <Image className='cardImage' src={require('../../../images/tnSupremeCourt.jpeg')}  wrapped />
                <Card.Header>Judicial Branch</Card.Header>
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