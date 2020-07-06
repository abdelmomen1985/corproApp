import React, { SyntheticEvent } from 'react';
import {
    IonInput,
    IonButton,
    IonCol,
    IonRow,
    IonText,
    IonItem,
} from "@ionic/react";
import '../Authentication/form.css'
import { strings } from '../../localization/localization';

export default function AppForm(props: any) {
    const constants = strings.career;

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const { email, name, phone, file } = e.target as any;
        props.handleSubmit(email.value, name.value, phone.value, file);
    };

    return (
        <form
            className="form"
            style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}
            onSubmit={onSubmit}>

            <IonRow>
                <IonCol className="column title">
                    <IonText className="title">
                        <h1>{constants.application}</h1>
                    </IonText>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column">
                    <IonItem className='item'>
                        <IonInput
                            className='input' placeholder={constants.fullName} name="name" type="text"
                        />
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column">
                    <IonItem className='item'>
                        <IonInput className='input' name="email" type="text" placeholder={constants.email} />
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column">
                    <IonItem className='item'>
                        <IonInput
                            className='input' placeholder={constants.phone} name="phone" type="tel"
                        />
                    </IonItem>
                </IonCol>
            </IonRow>

            <br />
            <IonRow>
               
                <IonCol className="column">
                <IonText style={{ paddingBottom: 8 }}>{constants.cvUpload}</IonText>
                    <IonItem className='item' style={{marginTop: 12}}>
                        <input
                            className='input' type='file' name='file' style={{ marginTop: 14 }}
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
                    <IonButton className="column" type="submit" expand='block' disabled={props.loading}>{constants.submit}</IonButton>
                </IonCol>
            </IonRow>

        </form >
    )
}