import React, { useState, useEffect } from "react"
import { Collapse, Button } from "reactstrap"
import TN_FullMap from "./maps/TN_FullMap"
import TN_GovTabsMain from "./state/TN_GovTabsMain"

const TN_Home = ({location, history, govLevel, changeGovLevel}) => {

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isGovOpen, setIsGovOpen] = useState(false);

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

    if (location.pathname === '/tennessee') {
      return (
        <>
          <Button id='govTabsButton' className={`mapToggleButton ${toggleGovButtonColor()}`}  onClick={toggleGov} style={{ marginBottom: '1rem' }}>Toggle Tennessee Government</Button>
          <Collapse isOpen={isGovOpen}>
              <TN_GovTabsMain />
          </Collapse>

        </>
      )
    } else {
      return null
    }
  }

  const routeToSelectedArea = (event) => {
    console.log(event)
    history.push(`/tennessee/${event.target.id.toLowerCase()}`)
  }

  useEffect(() => {

    if(govLevel !== 'state'){
      setIsMapOpen(true)
    } else {
      setIsMapOpen(false)
      setIsGovOpen(true)
      history.push('/tennessee')
    }
  }, [govLevel])

  return (
    <>
      <Button id='toggleMapButton' className={`mapToggleButton ${toggleMapButtonColor()}`}  onClick={toggleMap} style={{ marginBottom: '1rem' }}>Toggle State Map</Button>
      <Collapse isOpen={isMapOpen}>
          <TN_FullMap govLevel={govLevel} changeGovLevel={changeGovLevel} routeToSelectedArea={routeToSelectedArea} />
      </Collapse>
    {stateGovernment()}
    </>
  );
}

export default TN_Home;