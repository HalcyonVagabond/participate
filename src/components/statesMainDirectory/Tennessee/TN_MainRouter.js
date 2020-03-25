import React from "react"
import { Route, Switch } from "react-router-dom"
import TN_Home from "./TN_Home"
import TN_GovernmentTabs from "./state/TN_GovTabsMain"
import NashvilleMain from "./cities/Nashville/NashvilleMain"
import InProgressMessage from "../../rerouteMessages/InProgressMessage"

const TN_MainRouter = ({ govLevel, changeGovLevel }) => {

    return (
        <>
            <Switch>
                <Route
                    exact
                    path="/tennessee"
                    render={routerProps => {
                        return (
                            <>
                                <h1 className="stateBanner">Tennessee</h1>
                                <TN_Home {...routerProps} govLevel={govLevel} changeGovLevel={changeGovLevel} />
                            </>
                        )
                    }}
                />
                <Route
                    path="/tennessee/nashville"
                    render={routerProps => {
                        return (
                            <>
                                <h1 className="stateBanner">Nashville</h1>
                                <TN_Home {...routerProps} govLevel={govLevel} changeGovLevel={changeGovLevel} />
                                <NashvilleMain {...routerProps} />
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