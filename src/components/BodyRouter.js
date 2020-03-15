import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import HomePage from "./home/HomePage"
import AL_MainRouter from "./statesMainDirectory/alabama/AL_MainRouter"
import TN_MainRouter from "./statesMainDirectory/tennessee/TN_MainRouter"
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
                    return <TN_MainRouter {...props}/>
                }}
            />
            <Route
                    path="/alabama"
                    render={props => {
                    return (
                    <>
                    <AL_MainRouter {...props} />
                    </>
                    )}}
                />
                <Route component={InProgressMessage} />
            </Switch>
     </>
    );
};

export default BodyRouter;

