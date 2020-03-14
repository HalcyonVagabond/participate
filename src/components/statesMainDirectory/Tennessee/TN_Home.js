import React, { useState, useEffect } from "react"
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import TN_FullMap from "./maps/TN_FullMap"

const TN_Home = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const toggleButtonColor = () => {
    if (isOpen === true){
      return 'openToggle'
    } else if (isOpen === false) {
      return 'closedToggle'
    }
  }

  const consoleLogProps = () => {
    return console.log(props)
  }

  useEffect(() => {
    const govLevel = props.location.state

    if(govLevel === 'state'){
      setIsOpen(false)
      return console.log(govLevel)
    }
  }, [])

  return (
    <>
    <h1 className="stateBanner">Tennessee</h1>
    <div className="mapCollapseContainer" onClick={consoleLogProps}>
      <Button className={`mapToggleButton ${toggleButtonColor()}`}  onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle Map</Button>
      <Collapse isOpen={isOpen}>
        
        <Card>
          <TN_FullMap props={props} />
        </Card>
      </Collapse>
    </div>
    </>
  );
}

export default TN_Home;