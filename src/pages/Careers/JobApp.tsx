import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuButton,
  IonProgressBar,
  IonToast,
} from "@ionic/react";
import { strings } from "../../localization/localization";
import AppForm from "../../components/Careers/AppForm";
import { PostApplication } from "../../queries/Careers";

export default function JobApp(props: any) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<boolean>(false);


  const careerId = props.match.params.careerId;
  const constants = strings.career;

  const handleSubmit = (email: string, name: string, phone: string, file: any) => {
    setLoading(true);

    // Input Validation
    if (!email || !name || !phone || !file.files[0]) {
      setLoading(false);
      return setError("All fields are required");
    }
    else setError(null);

    const formData = new FormData();
    const jsonData = { email, name, phone, career: careerId };

    formData.append('data', JSON.stringify(jsonData));
    formData.append('files.cv_file', file.files[0], file.name);

    // Submit Application
    PostApplication(formData).then(() => {
      setLoading(false);
      setToast(true);
      props.history.push('/home')
    }).catch(err => {
      setLoading(false);
      setError(err.data.data.errors.email[0])
    });

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>{constants.jobApplication}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading && <IonProgressBar type="indeterminate" />}
        <AppForm handleSubmit={handleSubmit} error={error} loading={loading} />

        <IonToast
          isOpen={toast}
          color='success'
          onDidDismiss={() => setToast(false)}
          message="Your application has been submitted successfully"
          duration={2000}
        />

      </IonContent>
    </IonPage>
  );
}
