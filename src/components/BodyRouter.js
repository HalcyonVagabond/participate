import React from "react"
import { Router, Route, Switch, Redirect } from "react-router-dom"
import HomePage from "./home/HomePage"
import DashboardPageMain from "./dashboardContent/DashboardPageMain"
import AL_MainRouter from "./statesMainDirectory/alabama/AL_MainRouter"
import TN_MainRouter from "./statesMainDirectory/tennessee/TN_MainRouter"
import InProgressMessage from "./rerouteMessages/InProgressMessage"

const BodyRouter = ({props, govLevel, changeGovLevel}) => {

    const user = sessionStorage.getItem('userId')

    return (
      <>
            <Switch>
                <Route exact path="/" render={routerProps => {
                    return (
                        <HomePage routerProps={routerProps} govLevel={govLevel} changeGovLevel={changeGovLevel}/>
                    );
                }}
                />
                <Route exact path="/dashboard" render={props => {
                    return user ? <DashboardPageMain {...props}/> : <Redirect exact to='/' />
                }}
                />
                 <Route
                path="/tennessee"
                render={props => {
                    return <TN_MainRouter govLevel={govLevel} changeGovLevel={changeGovLevel}/>
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

