import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuButton,
} from "@ionic/react";

import {setLanguage, strings} from '../localization/localization'; 

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start"/>
          <IonTitle>{strings.main.home}</IonTitle>
        
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <button onClick={setLanguage}>Change Language</button>
      </IonContent>
    </IonPage>
  );
};

export default Home;
