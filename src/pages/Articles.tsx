import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
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
          <IonTitle>{strings.main.articles}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Articles</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>{/* Put articles here*/}</div>
      </IonContent>
    </IonPage>
  );
};

export default Articles;
