import React, { useEffect, useState } from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenuButton,
    IonLoading,
} from "@ionic/react";
import { strings } from "../../localization/localization";

// HTTP Request
import { GetCareers } from '../../queries/Careers';
import CareerCard from "../../components/Careers/CareerCard";
import CareerModal from "../../components/Careers/CareerModal";
import Career from "../../types/Career";

export default function Careers() {
    const [careers, setCareers] = useState<Array<Career>>([]);
    const [modal, setModal] = useState<boolean>(false);
    const [selectedCareer, setSelectedCareer] = useState<Career>();
    const [loading, setLoading] = useState<boolean>(false);

    // Get all careers once the component mounts
    useEffect(() => {
        setLoading(true);
        GetCareers().then(result => {
            setLoading(false);
            setCareers(result);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    // Open Career Modal
    const openModal = (career: Career) => {
        setSelectedCareer(career);
        setModal(true)
    }
    

    return (
        <IonPage>
            <IonHeader>
                
                <IonToolbar>
                    <IonMenuButton slot="start" />
                    <IonTitle>{strings.main.careers}</IonTitle>
                </IonToolbar>

            </IonHeader>

            <IonContent>
                {/* Careers List */}
                {careers.map((career: Career, index) => (
                    <CareerCard key={index}
                        onClick={() => openModal(career)}
                        id={career.id}
                        title={career.title}
                        type={career.type}
                        description={career.description} />
                ))}
        
                <CareerModal
                    career={selectedCareer}
                    open={modal}
                    closeModal={() => setModal(false)} />

                <IonLoading isOpen={loading} message={'Please wait...'}/>
            </IonContent>

        </IonPage>
    );
}
