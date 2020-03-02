import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import MapPlaceholder from "./maps/MapPlaceholder"
import NashvilleMain from "./governments/states/tennessee/cities/Nashville/NashvilleMain";
import TN_mapWithCounties from "./maps/StateMaps/TennesseeMap/TN_mapWithCounties"
import HomePage from "./home/HomePage"
import TN_FourCities from "./maps/StateMaps/TennesseeMap/TN_FourCities"
import InProgressMessage from "./rerouteMessages/InProgressMessage"

const MasterRouter = () => {

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
                exact
                path="/tennessee"
                render={props => {
                    return <TN_FourCities />
                }}
            />
                <Route component={InProgressMessage} />
            </Switch>
            {/* <Route */}
            <Route exact
                path="/cities"
                render={(props) => {
                    return <MapPlaceholder />
                }} />
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

export default MasterRouter;

