import React, { SyntheticEvent } from 'react'
import { strings } from '../../localization/localization'
import { IonRow, IonCol, IonText, IonItem, IonInput, IonTextarea, IonButton } from '@ionic/react';

export default function RequestForm(props: any) {
    const constants = strings.request;

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const { email, name, title, request } = e.target as any;
        props.handleSubmit(email.value, name.value, title.value, request.value);
    };

    return (
        <form
            className="form"
            style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}
            onSubmit={onSubmit}>

            <IonRow>
                <IonCol className='column title'>
                    <IonText className='title'>
                        <h1>{constants.request}</h1>
                    </IonText>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column">
                    <IonItem className='item'>
                        <IonInput
                            className='input' placeholder={constants.name} name="name" type="text"
                        />
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column">
                    <IonItem className='item'>
                        <IonInput
                            className='input' placeholder={constants.email} name="email" type="text"
                        />
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column">
                    <IonItem className='item'>
                        <IonInput
                            className='input' placeholder={constants.title} name="title" type="text"
                        />
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol className="column">
                    <IonItem className='item' style={{ height: 'fit-content' }}>
                        <IonTextarea rows={6} cols={20} name='request' placeholder={constants.content}></IonTextarea>
                    </IonItem>
                </IonCol>
            </IonRow>

            {
                props.errors.length > 0 &&

                <IonRow>
                    <IonCol className="column">

                        <IonText color="danger">
                            {props.errors.map((error: string, index: string) => (
                                <p key={index}>{error}</p>
                            ))}
                        </IonText>

                    </IonCol>
                </IonRow>
            }

            <IonRow className="column">
                <IonCol>
                    <IonButton className="column" type="submit" expand='block' disabled={props.loading}>{constants.submit}</IonButton>
                </IonCol>
            </IonRow>



        </form>
    )
}