import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuButton,
  IonButton,
  useIonViewDidEnter,
  IonText,
  IonLoading
} from "@ionic/react";
import { strings } from "../../localization/localization";
import { AppCtxt } from "../../setup/Context";
import { GetRequests } from "../../queries/Requests";
import RequestCard from "../../components/Requests/RequestCard";
import { CheckAuth } from "../../queries/Authentication";

export default function Requests(props: any) {
  const [requests, setRequests] = useState<Array<Request>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [auth, setAuth] = useState<boolean>(false);

  useIonViewDidEnter(() => {
    setLoading(true);
    CheckAuth().then(result => {
      setAuth(true);
      GetRequests(result.id).then(result => {
        setLoading(false);
        setRequests(result);
      }).catch(err => {
        console.log(err);
        setLoading(false)
      });
    }).catch(err => {
      setLoading(false)
      console.log(err)
    })
  })


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>{strings.main.requests}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <p style={{textAlign: 'center', margin: 32}}>
          {auth && requests.length < 1 ? "You do not have any pending requests, click below to send your first" :
            !auth && "Sign in to track your sent requests, click below to send an untracked request"}
        </p>

        {requests.map((request, index) => (
          <RequestCard key={index} request={request} />
        ))}

        <IonButton
          expand="block"
          style={{ margin: 16 }}
          routerLink={"/new-request"}>
          Send a new request
        </IonButton>

        <IonLoading isOpen={loading} message={"Please wait..."} />
      </IonContent>
    </IonPage>
  );
}
