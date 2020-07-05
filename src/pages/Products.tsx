import React, { useState, useEffect } from 'react';
import { IonHeader, IonPage, IonMenuButton, IonTitle, IonContent, IonToolbar, IonLoading } from '@ionic/react';
import { strings } from '../localization/localization';
import ProductCard from '../components/Products/ProductCard';
import Product from '../types/Product';
import { GetProducts } from '../queries/Products';
import ProductModal from '../components/Products/ProductModal';

export default function Products() {
    const [products, setProducts] = useState<Array<Product>>([])
    const [modal, setModal] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<Product>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        GetProducts().then(result => {
            setLoading(false);
            setProducts(result);
        }).catch(err => {
            console.log(err);
        });

    }, []);

    // Open Product Modal
    const openModal = (product: Product) => {
        setSelectedProduct(product);
        setModal(true)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonMenuButton slot='start' />
                    <IonTitle>{strings.main.products}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <IonLoading isOpen={loading} message={'Please wait...'} />

                {products.map((product: Product, index: number) => (
                    <ProductCard product={product} key={index} onClick={() => openModal(product)} />
                ))}

                <ProductModal
                    product={selectedProduct}
                    open={modal}
                    closeModal={() => setModal(false)}
                />

            </IonContent>
        </IonPage>
    )
};