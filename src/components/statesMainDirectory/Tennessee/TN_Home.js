import React, { useState, useEffect } from "react"
import { Collapse, Button } from "reactstrap"
import TN_FullMap from "./maps/TN_FullMap"
import TN_GovernmentTabsMain from "./state/TN_GovernmentTabsMain"

const TN_Home = (props) => {

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isGovOpen, setIsGovOpen] = useState(false);

  const [ govLevel, changeGovLevel ] = useState(props.location.state)
  // const [ areaSelected, setAreaSelected ] = useState()

  const toggleMap = () => setIsMapOpen(!isMapOpen);
  const toggleGov = () => setIsGovOpen(!isGovOpen);

  const toggleMapButtonColor = () => {
    if (isMapOpen === true){
      return 'openToggle'
    } else if (isMapOpen === false) {
      return 'closedToggle'
    } 
  }
  const toggleGovButtonColor = () => {
    if (isGovOpen === true){
      return 'openToggle'
    } else if (isGovOpen === false) {
      return 'closedToggle'
    } 
  }

  const stateGovernment = () => {

    if (props.location.pathname === '/tennessee') {
      return (
        <>
          <Button className={`mapToggleButton ${toggleGovButtonColor()}`}  onClick={toggleGov} style={{ marginBottom: '1rem' }}>Toggle Tennessee Government</Button>
          <Collapse isOpen={isGovOpen}>
              <h1 className="stateBanner">Tennessee</h1>
              <TN_GovernmentTabsMain />
          </Collapse>

        </>
      )
    } else {
      return null
    }
  }

  const routeToSelectedArea = (event) => {
    console.log(event)
    props.history.push(`/tennessee/${event.target.id.toLowerCase()}`)
  }

  useEffect(() => {

    if(govLevel !== 'state'){
      setIsMapOpen(true)
      return console.log(props.history)
    } else {
      setIsMapOpen(false)
      setIsGovOpen(true)
      props.history.push('/tennessee')
    }
  }, [govLevel])

  return (
    <>
      <Button className={`mapToggleButton ${toggleMapButtonColor()}`}  onClick={toggleMap} style={{ marginBottom: '1rem' }}>Toggle State Map</Button>
      <Collapse isOpen={isMapOpen}>
          <TN_FullMap govLevel={govLevel} changeGovLevel={changeGovLevel} routeToSelectedArea={routeToSelectedArea} />
      </Collapse>
    {stateGovernment()}
    </>
  );
}

export default TN_Home;