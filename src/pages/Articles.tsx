import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuButton,
} from "@ionic/react";
import { strings } from "../localization/localization";

const Articles: React.FC = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      let articles = await (
        await fetch(`http://13.90.214.197:8089/articles`)
      ).json();
      setArticles(articles);

    };
    fetchArticles();
  }, []);

  console.log(articles);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>{strings.main.articles}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
   
        <div>{/* Put articles here*/}</div>
      </IonContent>
    </IonPage>
  );
};

export default Articles;
