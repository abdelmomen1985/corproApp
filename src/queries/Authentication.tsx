import { Post, Get } from './helpers';
import config from '../config';

const url = config.API_URL;


const SignInMutation = async (payload: object) => {
    return await Post(url + '/auth/local', payload, {});
};

const RegisterMutation = async (payload: object) => {
    return await Post(url + '/auth/local/register', payload, {});
};

const CheckAuth = async () => {
    const token = localStorage.getItem('auth');
    return await Get(url + '/users/me', {headers: {Authorization: `Bearer ${token}`}})
}
export { SignInMutation, RegisterMutation, CheckAuth };