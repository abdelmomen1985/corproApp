import React, { useReducer } from 'react';
import { CheckAuth } from '../queries/Authentication';
import App from './App';

type StateType = {
    user: any,
    checkAuth: any
};

const initialState: StateType = {
    user: null,
    checkAuth: null
};

const AppCtxt = React.createContext({ ...initialState });

function appReducer(state: StateType, action: any) {
    switch (action.type) {
        case "CHECK_AUTH":
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};

function CtxtProvider(props: any) {
    const [state, dispatch] = useReducer(appReducer, { ...initialState });

    // Check currently authenticated user
    function checkAuth() {
        console.log('check auth');
        CheckAuth().then(result => {
            dispatch({ type: "CHECK_AUTH", user: result });
        }).catch(error => {
            dispatch({ type: "CHECK_AUTH", user: null });
        })
    }

    return (
        <AppCtxt.Provider
            value={{
                checkAuth,
                user: state.user
            }}
            {...props}>
            <App />
        </AppCtxt.Provider>
    )
}

export { AppCtxt, CtxtProvider };