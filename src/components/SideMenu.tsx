import React, { useState } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonIcon, IonLabel, IonItem } from "@ionic/react";
import { RouteComponentProps, withRouter } from 'react-router';

import {home, card, call, logIn, create, briefcase, pricetag } from "ionicons/icons";
import { strings } from '../localization/localization';

interface Page {
    title: string;
    path: string;
    icon: string;
};

const constants = strings.main

const pages: Page[] = [
    { title: constants.home, path: '/', icon: home },
    { title: constants.careers, path: '/careers', icon: briefcase},
    { title: constants.articles, path: '/articles', icon: card },
    { title: constants.products, path: '/products', icon: pricetag},
    { title: constants.requests, path:'/requests', icon: call},
    { title: constants.login, path: '/login', icon: logIn},
    { title: constants.register, path: '/register', icon: create}
];

type Props = RouteComponentProps<{}>;

const SideMenu = ({ history }: Props) => {
    const [activePage, setActivePage] = useState(pages[0].title);

    const renderMenuItems = (): JSX.Element[] => {
        return pages.map((page: Page) => (
            <IonMenuToggle key={page.title} auto-hide="false">
                <IonItem button
                    color={page.title === activePage ? 'primary' : ''}
                    onClick={() => navigateToPage(page)}>
                    <IonIcon slot="start" icon={page.icon}></IonIcon>
                    <IonLabel>
                        {page.title}
                    </IonLabel>
                </IonItem>
            </IonMenuToggle>
        ));
    }

    const navigateToPage = (page: Page) => {
        history.push(page.path);
        setActivePage(page.title);
    }

    return (
        <IonMenu contentId="main" style={{maxWidth: 300, border: 'none'}} maxEdgeStart={-5}>
            <IonHeader>
            </IonHeader>
            <IonContent >
                <IonList style={{marginTop: 50}}>
                    { renderMenuItems() }
                </IonList>
            </IonContent>
        </IonMenu>
    );
}

export default withRouter(
    SideMenu
);
