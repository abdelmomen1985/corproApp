import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import config from '../../config';
import './styles.css'
import { formatDate } from '../../helpers';


const url = config.API_URL;

interface ArticleCardProps {
    id: number,
    imageUrl: string,
    date: Date,
    title: string,
}

export default function ArticleCard(props: ArticleCardProps) {
  const lang = localStorage.getItem('lang')
    return (
        <IonCard className='article-card' routerLink={'/article/' + props.id} 
        style={lang === 'en' ? {marginLeft: -8} : {marginRight: -8}}>
        <img className='article-image' src={url + props.imageUrl} />
       
        <IonCardHeader className="overlay">
          
          <IonCardTitle color='white'>{props.title}</IonCardTitle>
          <IonCardSubtitle className='article-sub-title'>{formatDate(props.date)}</IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    )
}