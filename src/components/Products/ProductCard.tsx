import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSlides, IonSlide } from '@ionic/react';
import Product from '../../types/Product';
import ReactMarkdown from 'react-markdown';
import config from '../../config';

const url = config.API_URL;

interface Props {
    product: Product,
    onClick: () => void
}

export default function ProductCard({ product, onClick }: Props) {

    // Set a limit to the amount of content characters
    var content: string = product.content;
    if (product.content.length > 200) {
        content = product.content.substring(0, 199) + "..."
    };

    const price = product.post_data.filter(data => data.name = "price");

    return (
        <IonCard style={{cursor: 'pointer'}} onClick={onClick}>
            <IonSlides pager={true}>
                {product.media.map((img, index) => (
                    <IonSlide key={index}>
                        <img src={url + img.url} />
                    </IonSlide>
                ))}
            </IonSlides>

            <IonCardHeader>
                <IonCardSubtitle>{price[0].value} EGP</IonCardSubtitle>
                <IonCardTitle>{product.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <ReactMarkdown source={content} />
            </IonCardContent>
        </IonCard>
    )
}