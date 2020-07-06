import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { formatDate } from '../../helpers';

export default function RequestCard(props: any) {

    const { request } = props;
    const { content, status, created_at } = request;

    let statusText: string = ""

    if(status === 1) statusText = 'Approved';
    else if (status === 2) statusText = "Denied";
    else statusText = "Pending";

    return (
        <IonCard style={{ cursor: 'pointer' }} onClick={props.onClick}>
            <IonCardHeader>
                <IonCardSubtitle>{formatDate(created_at)}</IonCardSubtitle>
                <IonCardTitle>{statusText}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                {content}
            </IonCardContent>
        </IonCard>
    )
}