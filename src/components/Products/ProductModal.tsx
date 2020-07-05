import React, { useState, useEffect } from 'react';
import Product from '../../types/Product';
import { IonModal, IonToolbar, IonIcon, IonHeader, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSlides, IonSlide, IonCardContent, IonLoading } from '@ionic/react';
import { arrowBack, arrowForward } from 'ionicons/icons';
import { strings } from '../../localization/localization';
import ReactMarkdown from 'react-markdown';
import config from '../../config';
import './styles.css'

const url = config.API_URL;

const currentLang = localStorage.getItem('lang');

interface Props {
    product: Product | undefined,
    open: boolean,
    closeModal: () => void
}

export default function ProductModal(props: Props) {
    const product: Product | undefined = props.product;
    const price = product?.post_data.filter(data => data.name = "price");
    const [loading, setLoading] = useState<boolean>(true);

    return (
        <IonModal
            isOpen={props.open}
            swipeToClose={true}
            onDidDismiss={props.closeModal}>
            <IonHeader>
                <IonToolbar>
                    <IonIcon
                        icon={currentLang === 'en' ? arrowBack : arrowForward}
                        onClick={() => props.closeModal()}
                        slot='start'
                        style={{ fontSize: 25, margin: 16, paddingBottom: 3 }} />

                    <IonTitle>{strings.main.product}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <div className='product-modal-card' style={currentLang === 'en' ? {marginLeft: -8} : {marginRight: -8}}>
                  
                    <IonSlides pager={true} onIonSlidesDidLoad={function(this: any){this.update()}}>
                        {product?.media.map((img, index) => (
                            <IonSlide key={index}>
                                <img src={url + img.url} onLoad={() => setLoading(false)} />
                            </IonSlide>
                        ))}
                    </IonSlides>

                    <IonCardHeader className='product-modal-title'>
                        <IonCardSubtitle>{price && price[0].value} EGP</IonCardSubtitle>
                        <IonCardTitle>{product?.title}</IonCardTitle>
                    </IonCardHeader>

                        <div>
                            <ReactMarkdown className="product-modal-content" source={product?.content} />
                        </div>

                </div>

                <IonLoading isOpen={loading} message={'Please wait...'} />
            </IonContent>


        </IonModal>
    )
}