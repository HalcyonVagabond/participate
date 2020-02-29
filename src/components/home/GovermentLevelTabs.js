import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const GovernmentLevelTabs = (props) => {
  const [activeTab, setActiveTab] = useState('city-tab');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 'city-tab' })}
            onClick={() => { toggle('city-tab'); }}
            to="/city"
          >
            City
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 'county-tab' })}
            onClick={() => { toggle('county-tab'); }}
          >
            County
          </NavLink>
          <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 'state-tab' })}
            onClick={() => { toggle('state-tab'); }}
          >
            State
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 'federal-tab' })}
            onClick={() => { toggle('federal-tab'); }}
          >
            Federal
          </NavLink>
        </NavItem>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="city">
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="county">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="state">
          <Row>
            <Col sm="12">
              <h4>Tab 3 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="city">
          <Row>
            <Col sm="12">
              <h4>Tab 4 Contents</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default GovernmentLevelTabs;