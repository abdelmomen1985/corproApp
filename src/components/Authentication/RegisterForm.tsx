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

interface RegisterFormProps {
    handleSubmit: (email: string, password: string, username: string) => any,
    error: string | null
}

export default function RegisterForm(props: RegisterFormProps) {

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
                        <h1>Register</h1>
                    </IonText>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column link">
                    <IonText color="primary">
                        <Link to='/login' className="link">
                            <p>Already have an account? Login</p>
                        </Link>
                    </IonText>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column">
                    <IonItem>
                        <IonLabel position='floating'>Username</IonLabel>
                        <IonInput name="username" type="text" />
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column">
                    <IonItem>
                        <IonLabel position='floating'>Email</IonLabel>
                        <IonInput name="email" type="text" />
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column">
                    <IonItem>
                        <IonLabel position='floating'>Password</IonLabel>
                        <IonInput
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
                    <IonButton className="column" type="submit">Submit</IonButton>
                </IonCol>
            </IonRow>

        </form>
    )
}