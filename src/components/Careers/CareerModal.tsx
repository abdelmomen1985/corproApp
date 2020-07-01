import React from 'react';
import { IonModal, IonButton, IonToolbar, IonContent, IonTitle, IonHeader, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonText } from '@ionic/react';
import { arrowBack, arrowForward } from 'ionicons/icons';
import { withRouter } from 'react-router';
import { strings } from '../../localization/localization';
import Career from '../../types/Career';

const currentLang = localStorage.getItem('lang')

interface CareerModalProps {
    career: Career,
    closeModal: () => void,
    open: boolean
};

export default function CareerModal(props: CareerModalProps) {
    const constants = strings.career;
    const career: Career = props.career;
    return (
        <IonModal
            isOpen={props.open}
            swipeToClose={true}
            onDidDismiss={props.closeModal}>
            <IonHeader>
                <IonToolbar>
                    <IonIcon icon={currentLang === 'en' ? arrowBack : arrowForward}
                        onClick={() => props.closeModal()}
                        slot='start'
                        style={{ fontSize: 25, margin: 16, paddingBottom: 3 }}
                    />
                    <IonTitle >{constants.jobDescription}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonCard style={{ cursor: 'pointer' }} className=''>
                    <IonCardHeader>
                        <IonCardSubtitle>{career?.type}</IonCardSubtitle>
                        <IonCardTitle>{career?.title}</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonText>
                            {career?.description}
                        </IonText>

                        <IonText>
                            <h1 style={{ color: 'white', paddingTop: 16, paddingBottom: 16 }}>{constants.requirements}</h1>
                        </IonText>

                        <IonText>
                            {career?.requirements}
                        </IonText>

                        <IonButton onClick={props.closeModal}
                            expand='block' style={{ marginTop: 16 }}
                            routerLink='/application/1'>
                            {constants.apply}
                            </IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>

        </IonModal>
    )
};