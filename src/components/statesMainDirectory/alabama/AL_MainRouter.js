import React from "react"
import { Route, Switch } from "react-router-dom"
import AL_CountiesMap  from "./maps/AL_CountiesMap"
import InProgressMessage from "../../rerouteMessages/InProgressMessage"

const AL_MainRouter = (props) => {

    return (
      <>
            <Switch>
                 <Route
                    exact
                    path="/alabama"
                    render={props => {
                    return (
                    <>
                    <AL_CountiesMap {...props} />
                    </>
                    )}}
                />
                <Route component={InProgressMessage} />
            </Switch>
           
     </>
    );
};

export default AL_MainRouter;