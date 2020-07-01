import React, { useEffect } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuButton,
} from "@ionic/react";
import { strings } from "../localization/localization";

export default function JobApp() {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>Job Application</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent> Job Application Here</IonContent>
    </IonPage>
  );
}
