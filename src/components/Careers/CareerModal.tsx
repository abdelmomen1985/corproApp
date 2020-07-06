import React from 'react';
import { IonModal, IonButton, IonToolbar, IonContent, IonTitle, IonHeader, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonText } from '@ionic/react';
import { arrowBack, arrowForward } from 'ionicons/icons';
import { withRouter } from 'react-router';
import { strings } from '../../localization/localization';
import Career from '../../types/Career';
import ReactMarkdown from 'react-markdown';

import './styles.css'

const currentLang = localStorage.getItem('lang')

interface CareerModalProps {
    career: Career | undefined,
    closeModal: () => void,
    open: boolean
};

export default function CareerModal(props: CareerModalProps) {
    const constants = strings.career;
    const career: Career | undefined = props.career;

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
                <IonCard className="career-modal-card" style={currentLang === 'en' ? { marginLeft: -8 } : { marginRight: -8 }}>
                    <IonCardHeader className='career-modal-title'>
                        <IonCardSubtitle>{career?.type}</IonCardSubtitle>
                        <IonCardTitle>{career?.title}</IonCardTitle>
                    </IonCardHeader>

                    <div className='career-modal-content'>
                        <IonText>
                            <ReactMarkdown source={career?.description} />
                        </IonText>


                        <h1 className='career-modal-bold' style={{ paddingTop: 16, paddingBottom: 16 }}>{constants.requirements}</h1>


                        <IonText>
                            <ReactMarkdown source={career?.requirements} />
                        </IonText>

                        <IonButton onClick={props.closeModal}
                            expand='block' style={{ marginTop: 16, marginBottom: 16 }}
                            routerLink={`/application/${career?.id}`}>
                            {constants.apply}
                        </IonButton>

                    </div>
                </IonCard>
            </IonContent>

        </IonModal>
    )
};