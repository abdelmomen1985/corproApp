import React from 'react';

// Page Components
import Login from "../pages/Authentication/Login";
import Requests from "../pages/Requests";
import Home from "../pages/Home";
import Register from '../pages/Authentication/Register';
import Articles from "../pages/Articles/Articles";
import Article from '../pages/Articles/Article';
import { Route, Redirect  } from 'react-router';
import {home, card, logIn, briefcase } from "ionicons/icons";

import { strings } from '../localization/localization';

import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
  } from "@ionic/react";

import Careers from '../pages/Careers/Careers';
import JobApp from '../pages/Careers/JobApp';
import Products from '../pages/Products';
import ProductModal from '../components/Products/ProductModal';

const Router: React.FC = () => {

    const constants = strings.main;
    return (
        <IonTabs>

            {/* Router */}
            <IonRouterOutlet >
                <Route path="/home" component={Home} exact={true} />
                <Route path='/article/:articleId' component={Article} />
                <Route path="/articles" component={Articles} />
                <Route path='/product/:id' component={ProductModal} />
                <Route path ='/products' component={Products} />
                <Route path="/login" component={Login} />
                <Route path='/register' component={Register} />
                <Route path="/requests" component={Requests} />
                <Route path='/careers' component={Careers} />
                <Route path='/application/:careerId' component={JobApp} />
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

                <IonTabButton tab="careers" href="/careers">
                    <IonIcon icon={briefcase} />
                    <IonLabel>{constants.careers}</IonLabel>
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