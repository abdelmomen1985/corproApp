import React from 'react';
import Request from '../../types/Request';
import { strings } from '../../localization/localization'
import { IonModal, IonHeader, IonToolbar, IonIcon, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText } from '@ionic/react';
import { arrowBack, arrowForward } from 'ionicons/icons';
import ReactMarkdown from 'react-markdown';
import { formatDate } from '../../helpers';

import './styles.css'

interface RequestModalProps {
    request: Request | undefined,
    closeModal: () => void,
    open: boolean
};

export default function RequestModal(props: RequestModalProps) {
    const constants = strings.request;
    const currentLang = localStorage.getItem('lang')
    const request: Request | undefined = props.request;

    let statusText: string = ""

    if (request?.status === 1) statusText = 'Approved';
    else if (request?.status === 2) statusText = "Denied";
    else statusText = "Pending";

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
                    <IonTitle >{constants.request}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard className="request-modal-card" style={currentLang === 'en' ? { marginLeft: -8 } : { marginRight: -8 }}>
                    <IonCardHeader className='request-modal-title'>
                        <IonCardSubtitle>{formatDate(request?.created_at)}</IonCardSubtitle>
                        <IonCardTitle>{statusText}</IonCardTitle>
                    </IonCardHeader>

                    <div className='request-modal-content'>
                  
                            <ReactMarkdown source={request?.content} />
                      

                        {request?.response && (
                            <>

                                <h1 className='request-modal-bold' style={{ paddingTop: 16, paddingBottom: 16 }}>Response</h1>
                                <IonText>
                                    <ReactMarkdown source={request?.response} />
                                </IonText>
                            </>
                        )}

                    </div>
                </IonCard>
            </IonContent>
        </IonModal>
    )
}