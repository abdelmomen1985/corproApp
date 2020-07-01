import React, { SyntheticEvent } from 'react';
import {
    IonInput,
    IonButton,
    IonCol,
    IonRow,
    IonText,
    IonLabel,
    IonItem,
} from "@ionic/react";
import './form.css'
import { Link } from 'react-router-dom';
import { strings } from '../../localization/localization';

interface RegisterFormProps {
    handleSubmit: (email: string, password: string, username: string) => any,
    error: string | null
}

export default function RegisterForm(props: RegisterFormProps) {

    const constants = strings.auth;

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const { email, password, username } = e.target as any;
        props.handleSubmit(email.value, password.value, username.value);
    };

    return (
        <form
            className="form"
            style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}
            onSubmit={onSubmit}>

            <IonRow>
                <IonCol className="column title">
                    <IonText className="title">
                        <h1>{strings.main.register}</h1>
                    </IonText>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column link">
                    <IonText color="primary">
                        <Link to='/login' className="link">
                            <p>{constants.loginRedirect}</p>
                        </Link>
                    </IonText>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column">
                    <IonItem>
                        <IonInput className="input" name="username" type="text" placeholder={constants.username} />
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column">
                    <IonItem>
                        <IonInput className="input" name="email" type="text" placeholder={constants.email} />
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column">
                    <IonItem>
                        <IonInput
                            placeholder={constants.password}
                            className="input"
                            name="password"
                            type="password"
                        />
                    </IonItem>
                </IonCol>
            </IonRow>

            {props.error &&
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

        </form>
    )
}