import React from "react"
import { Route, Switch } from "react-router-dom"
import NashvilleMain from "./Cities/Nashville/NashvilleMain"
import TN_FullMap from "./Maps/TN_FullMap"
import InProgressMessage from "../../rerouteMessages/InProgressMessage"

const TN_MainRouter = () => {

    return (
      <>
            <Switch>
                 <Route
                    exact
                    path="/tennessee"
                    render={props => {
                    return <TN_FullMap />
                    }}
                />
                <Route
                    path="/tennessee/nashville"
                    render={props => {
                    return (
                        <>
                        <TN_FullMap />
                        <NashvilleMain />
                        </>
                        )
                    }}
                />
                <Route component={InProgressMessage} />
            </Switch>
           
     </>
    );
};

export default TN_MainRouter;