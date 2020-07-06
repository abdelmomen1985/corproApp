import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonContent, IonToast } from '@ionic/react';
import RequestForm from '../../components/Requests/RequestForm';
import { PostRequest } from '../../queries/Requests';
import { strings } from '../../localization/localization';
import { AppCtxt } from '../../setup/Context';

export default function RequestPage(props: any) {
    const [errors, setErrors] = useState<any>({});
    const [toast, setToast] = useState<boolean>(false);
    const { user } = React.useContext(AppCtxt);

    const constants = strings.request;

    const handleSubmit = (email: string, senderName: string, content: string) => {
        let payload: object = {
            email,
            sender_name: senderName,
            content, 
            user: user ? user.id : null
        };
        
        // Inputs' validation
        if (!email || !senderName || !content) return setErrors([constants.missingFieldError]);
        else setErrors([])

        // HTTP Post request
        PostRequest(payload).then((result) => {
            setErrors([]);
            setToast(true);
            props.history.push('/requests')
        }).catch(err => {
            const data = err.data.data.errors;
            let errors = [];

            // Push errors to the errors array
            data.email && errors.push(data.email);
            data.sender_name && errors.push(data.sender_name);
            data.content && errors.push(data.content);

            setErrors(errors);
        })
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonMenuButton slot="start" />
                    <IonTitle>New Request</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <RequestForm handleSubmit={handleSubmit} errors={errors} />

                {/* Success Toast */}
                <IonToast
                    isOpen={toast}
                    color='success'
                    onDidDismiss={() => setToast(false)}
                    message={constants.successToast}
                    duration={2000}
                />
            </IonContent>
        </IonPage>
    )
}