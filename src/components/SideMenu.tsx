import React, { useState, useEffect } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonIcon, IonLabel, IonItem } from "@ionic/react";
import { RouteComponentProps, withRouter } from 'react-router';

import { home, card, call, logIn, create, briefcase, pricetag, person } from "ionicons/icons";
import { strings } from '../localization/localization';
import { AppCtxt, CtxtProvider } from "../setup/Context";


interface Page {
    title: string;
    path: string;
    icon: string;
};

const constants = strings.main

var pages: Page[] = [
    { title: constants.home, path: '/', icon: home },
    { title: constants.careers, path: '/careers', icon: briefcase },
    { title: constants.articles, path: '/articles', icon: card },
    { title: constants.products, path: '/products', icon: pricetag },
    { title: constants.requests, path: '/requests', icon: call },
];

type Props = RouteComponentProps<{}>;

const SideMenu = ({ history }: Props) => {
    const [activePage, setActivePage] = useState(pages[0].title);
    const { user } = React.useContext(AppCtxt);

    // Auth related page elements
    const authPages: Page[] = !user ? [
        { title: constants.login, path: '/login', icon: logIn },
        { title: constants.register, path: '/register', icon: create }
    ] : [{title: user?.username, path:'/profile', icon: person }]
    

    const MenuItem = (page: any) => {
        const item = page.page
        return (
            <IonMenuToggle auto-hide="false">
                <IonItem button
                    color={item.title === activePage ? 'primary' : ''}
                    onClick={() => navigateToPage(item)}>
                    <IonIcon slot="start" icon={item.icon}></IonIcon>
                    <IonLabel>
                        {item.title}
                    </IonLabel>
                </IonItem>
            </IonMenuToggle>
        )
    }

    const renderMenuItems = (): JSX.Element[] => {
        return pages.map((page: Page, index: number) => (
            <MenuItem page={page} key={index} />
        ));
    }

    const renderAuthItems = (): JSX.Element[] => {
        return authPages.map((page: Page, index: number) => (
            <MenuItem page={page} key={index}/>
        ));
    }

    const navigateToPage = (page: Page) => {
        history.push(page.path);
        setActivePage(page.title);
    }

    return (
        <IonMenu contentId="main" style={{ maxWidth: 300, border: 'none' }} maxEdgeStart={-5}>
            <IonHeader>
            </IonHeader>
            <IonContent >
                <IonList style={{ marginTop: 50 }}>
                    {renderMenuItems()}
                    {renderAuthItems()}
                </IonList>
            </IonContent>
        </IonMenu>
    );
}

export default withRouter(
    SideMenu
);
