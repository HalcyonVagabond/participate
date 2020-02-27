import React from "react"
import { Route } from "react-router-dom"
import MapPlaceholder from "./maps/MapPlaceholder"
import NashvilleMain from "./governments/states/tennessee/cities/Nashville/NashvilleMain";
import US_mapWithTerritories from "./maps/US_mapWithTerritoriesCard"
import TN_mapWithCounties from "./maps/StateMaps/TennesseeMap/TN_mapWithCounties"


const ApplicationViews = () => {

    return (
        <React.Fragment>
            <Route
            exact
            path="/"
            render={props => {
             return (
             <US_mapWithTerritories />
             );
            }}
        />
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
            <Route
                exact
                path="/tn"
                render={props => {
                    return <TN_mapWithCounties />
                }}
            />
        </React.Fragment>
    );
};

export default ApplicationViews;

