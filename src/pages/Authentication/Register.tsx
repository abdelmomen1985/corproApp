import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuButton,
} from "@ionic/react";

// Form
import RegisterForm from '../../components/Authentication/RegisterForm';

// HTTP Request
import { RegisterMutation } from '../../queries/Authentication';
import { strings } from "../../localization/localization";

export default function Register(props: any) {
  const [error, setError] = useState<string|null>(null);

  const handleSubmit = (email: string, password: string, username: string) => {

    const payload = { email, username, password };

    if(!email || !username || !password) return setError('Please fill all fields');
    else setError(null);

    RegisterMutation(payload).then(result => {
      setError(null);

      // Store the jwt in the local storage
      localStorage.setItem('auth', result.jwt);

      // Redirect to the home page
      props.history.push('/home');

    }).catch(err => {
      const error = err.data.data[0].messages[0].message;
      setError(error);
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonMenuButton slot="start"/>
          <IonTitle>{strings.main.register}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >

        <RegisterForm handleSubmit={handleSubmit} error={error}/>
    
      </IonContent>
    </IonPage>
  );
}
