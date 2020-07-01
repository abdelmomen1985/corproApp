import React, { SyntheticEvent } from 'react';
import {
    IonInput,
    IonButton,
    IonCol,
    IonRow,
    IonText,
    IonItem,
    IonLabel,
} from "@ionic/react";
import './form.css'
import { Link } from 'react-router-dom';

import {strings  } from '../../localization/localization';

interface LoginFormProps {
    handleSubmit: (email: string, password: string) => any,
    error: string | null
}

export default function LoginForm(props: LoginFormProps) {
    const constants = strings.auth;

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const { email, password } = e.target as any;
        props.handleSubmit(email.value, password.value);
    };

    return (
        <form
            className="form"
            style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}
            onSubmit={onSubmit}>

            <IonRow>
                <IonCol className="column title">
                    <IonText className="title">
                        <h1>{constants.login}</h1>
                    </IonText>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column link">
                    <IonText color="primary">
                        <Link to='/register' className="link">
                            <p>{constants.registerRedirect}</p>
                        </Link>
                    </IonText>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column">
                    <IonItem className='item'>
            
                        <IonInput className='input' name="email" type="text" placeholder={constants.email}/>
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column">
                    <IonItem className='item'>
                        <IonInput
                            className='input'
                            placeholder={constants.password}
                            name="password"
                            type="password"
                        />
                    </IonItem>
                </IonCol>
            </IonRow>

            {
                props.error &&
                <IonRow>
                    <IonCol className="column">
                        <IonText color="danger">
                            <p>{props.error}</p>
                        </IonText>
                    </IonCol>
                </IonRow>
            }

            <IonRow className="column">
                <IonCol>
                    <IonButton className="column" type="submit">{constants.submit}</IonButton>
                </IonCol>
            </IonRow>

        </form >
    )
}