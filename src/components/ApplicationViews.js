import React from "react"
import { Route } from "react-router-dom"
import MapPlaceholder from "./maps/MapPlaceholder"
import NashvilleMain from "./governments/states/tennessee/cities/Nashville/NashvilleMain";


const ApplicationViews = () => {

    return (
        <React.Fragment>
            {/* <Route
            exact
            path="/"
            render={props => {
             return <MapPlaceholder />;
            }}
        /> */}
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
        </React.Fragment>
    );
};

export default ApplicationViews;

