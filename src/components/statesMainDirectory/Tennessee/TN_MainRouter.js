import React from "react"
import { Route, Switch } from "react-router-dom"
import TN_Home from "./TN_Home"
import TN_GovernmentTabs from "./state/TN_GovernmentTabsMain"
import NashvilleMain from "./cities/Nashville/NashvilleMain"
import InProgressMessage from "../../rerouteMessages/InProgressMessage"

const TN_MainRouter = (props) => {

    return (
      <>
            <Switch>
                 <Route
                    exact
                    path="/tennessee"
                    render={props => {
                    return (
                    <TN_Home {...props} />
                    )}}
                />
                <Route
                    path="/tennessee/nashville"
                    render={props => {
                    return (
                        <>
                        <TN_Home {...props}/>
                        <NashvilleMain {...props} />
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