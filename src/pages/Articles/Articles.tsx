import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonLoading,
} from "@ionic/react";
import { strings } from "../../localization/localization";
import { GetArticles } from "../../queries/Articles";
import ArticleCard from "../../components/Articles/ArticleCard";
import Article from "../../types/Article";

const Articles: React.FC = (props: any) => {
  const [articles, setArticles] = useState<Array<Article>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Get all articles on pagae mount
  useEffect(() => {
    setLoading(true);

    GetArticles().then(result => {
      setLoading(false);
      setArticles(result);
    }).catch(err => {
      setLoading(false);
      console.log(err)
    })
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>{strings.main.articles}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonLoading isOpen={loading} message={'Please wait...'} />

        {/* Articles iteration */}
        {articles.map((article: Article, index: number) => (
          <ArticleCard
            id={article.id}
            key={index}
            title={article.title}
            date={article.created_at}
            imageUrl={article.image_data[0]?.image?.url} /> 
        ))}

      </IonContent>
    </IonPage>
  );
};

export default Articles;
