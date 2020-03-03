import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import NashvilleMain from "./statesMainDirectory/Tennessee/Cities/Nashville/NashvilleMain";
import HomePage from "./home/HomePage"
import TN_MainRouter from "./statesMainDirectory/Tennessee/TN_MainRouter"
import InProgressMessage from "./rerouteMessages/InProgressMessage"

const BodyRouter = () => {

    return (
      <>
            <Switch>
                <Route exact path="/" render={props => {
                    return (
                        <HomePage {...props} />
                    );
                }}
                />
                 <Route
                path="/tennessee"
                render={props => {
                    return <TN_MainRouter />
                }}
            />
                <Route component={InProgressMessage} />
            </Switch>
            {/* <Route */}
            <Route
                exact
                path="/nashville"
                render={props => {
                    return <NashvilleMain />
                }}
            />
     </>
    );
};

export default BodyRouter;

