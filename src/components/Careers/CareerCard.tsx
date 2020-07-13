import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle } from '@ionic/react';
import ReactMarkdown from 'react-markdown';

interface CareerCardProps {
    id: number,
    type: string,
    title: string,
    description: string,
    onClick: () => void
}

export default function CareerCard(props: CareerCardProps) {

    return (
        <IonCard style={{cursor: 'pointer'}} onClick={props.onClick}>
            <IonCardHeader>
                <IonCardSubtitle>{props.type}</IonCardSubtitle>
                <IonCardTitle>{props.title}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                <ReactMarkdown source={props.description} escapeHtml={false} />
            </IonCardContent>
        </IonCard>
    )
}