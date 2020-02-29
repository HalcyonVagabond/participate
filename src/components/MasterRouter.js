import React from "react"
import { Route } from "react-router-dom"
import MapPlaceholder from "./maps/MapPlaceholder"
import NashvilleMain from "./governments/states/tennessee/cities/Nashville/NashvilleMain";
import TN_mapWithCounties from "./maps/StateMaps/TennesseeMap/TN_mapWithCounties"
import HomePage from "./home/HomePage"
import TN_FourCities from "./maps/StateMaps/TennesseeMap/TN_FourCities"


const MasterRouter = () => {

    return (
        <React.Fragment>
            <Route
            exact
            path="/"
            render={props => {
             return (
             <HomePage />
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
                    return <TN_FourCities />
                }}
            />
            <Route
                exact
                path="/tennessee"
                render={props => {
                    return <TN_mapWithCounties />
                }}
            />
        </React.Fragment>
    );
};

export default MasterRouter;

