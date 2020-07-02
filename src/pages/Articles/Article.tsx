import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonContent, IonLoading, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonText, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import { strings } from '../../localization/localization';
import { GetArticle } from '../../queries/Articles';
import Article from '../../types/Article';
import config from '../../config';
import { formatDate } from '../../helpers';
import ReactMarkdown from 'react-markdown';

import './styles.css'

const url = config.API_URL;

export default function ArticlePage(props: any) {
  const [loading, setLoading] = useState<boolean>(false);
  const [article, setArticle] = useState<Article | null>();

  const articleId = props.match.params.articleId;

  // Get article using the URL ID parameter on component mount

  useEffect(() => {
    setArticle(null)
    setLoading(true);
    GetArticle(articleId).then(result => {
      setArticle(result);

    }).catch(err => {
      setLoading(false);
      console.log(err);
    });

  }, [articleId]);

 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>{strings.main.articles}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className='article-page-card'>
          <img
            className='article-page-card-image'
            src={url + article?.media[0].url}
            onLoad={() => setLoading(false)} />

          <IonCardHeader className="article-page-card-overlay">

            <IonCardTitle color='white'>{article?.title}</IonCardTitle>
            <IonCardSubtitle className='article-page-card-sub-title'>{formatDate(article?.created_at)}</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        <ReactMarkdown className="article-page-card-content" source={article?.content} />
        <IonLoading isOpen={loading} message={'Please wait...'} />

      </IonContent>
    </IonPage>
  )
}