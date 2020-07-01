import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";

// Form
import LoginForm from '../../components/Authentication/LoginForm';

// HTTP Request
import {SignInMutation} from '../../queries/Authentication';
import { strings } from "../../localization/localization";

export default function Login(props: any) {
  const [error, setError] = useState<string|null>(null);

  const handleSubmit = (email: string, password: string) => {
    const payload = {
      identifier: email,
      password
    };

    if(!email || !password) return setError('Email and password are required');
    else setError(null);

    SignInMutation(payload).then(result => {
      setError(null);

      // Store the jwt in the local storage
      localStorage.setItem('auth', result.jwt);

      // Redirect to home page
      props.history.push('/home');

    }).catch(err => {
      const error = err.data.data[0].messages[0].message;
      setError(error);
    })
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{strings.main.login}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >

        <LoginForm handleSubmit={handleSubmit} error={error}/>
    
      </IonContent>
    </IonPage>
  );
}
