import { Post } from './helpers';
import config from '../config';

const url = config.API_URL;

const SignInMutation = async (payload: object) => {
    return await Post(url + '/auth/local', payload, {});
};

const RegisterMutation = async (payload: object) => {
    return await Post(url + '/auth/local/register', payload, {});
};
export { SignInMutation, RegisterMutation };