import React from 'react';

// Page Components
import Login from "./pages/Authentication/Login";
import Requests from "./pages/Requests";
import Home from "./pages/Home";
import Register from './pages/Authentication/Register';
import Articles from "./pages/Articles";
import { Route, Redirect  } from 'react-router';
import {home, card, call, logIn } from "ionicons/icons";

import { strings } from './localization/localization';

import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
  } from "@ionic/react";

const Router: React.FC = () => {

    const constants = strings.main;
    return (
        <IonTabs>

            {/* Router */}
            <IonRouterOutlet>
                <Route path="/home" component={Home} exact={true} />
                <Route path="/articles" component={Articles} />
                <Route path="/login" component={Login} />
                <Route path='/register' component={Register} />
                <Route path="/requests" component={Requests} />
                <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
            </IonRouterOutlet>

            {/* Navigation Tabs */}
            <IonTabBar slot="bottom">

                <IonTabButton tab="home" href='/home' >
                    <IonIcon icon={home} />
                    <IonLabel>{constants.home}</IonLabel>
                </IonTabButton>

                <IonTabButton tab="articles" href='/articles'>
                    <IonIcon icon={card} />
                    <IonLabel>{constants.articles}</IonLabel>
                </IonTabButton>

                <IonTabButton tab="requests" href="/requests">
                    <IonIcon icon={call} />
                    <IonLabel>{constants.requests}</IonLabel>
                </IonTabButton>
                
                <IonTabButton tab="login" href="/login">
                    <IonIcon icon={logIn} />
                    <IonLabel>{constants.login}</IonLabel>
                </IonTabButton>


            </IonTabBar>

        </IonTabs>

    )
}

export default Router;