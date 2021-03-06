import React, { useEffect } from "react";
import {
  IonApp, IonSplitPane, IonPage
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";


/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "../theme/variables.css";
import Router from './router';
import SideMenu from "../components/SideMenu";
import { AppCtxt } from "./Context";

const App: React.FC = () => {
  const { checkAuth } = React.useContext(AppCtxt);

  useEffect(() => {
    const currentLanguage = localStorage.getItem('lang');
    document.body.style.direction = currentLanguage === "en" ? "ltr" : "rtl";
  }, []);

  // Check auth on router change
  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <SideMenu />
          <IonPage id="main">
            <Router />
          </IonPage>
        </IonSplitPane>
      </IonReactRouter>


    </IonApp>
  )
};

export default App;
