import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButton,
} from "@ionic/react";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

import { setLanguage, strings } from "../localization/localization";

const Home: React.FC = () => {
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>{strings.main.home}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <button onClick={setLanguage}>Change Language</button>
        <IonButton onClick={openScanner}>Scan</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
