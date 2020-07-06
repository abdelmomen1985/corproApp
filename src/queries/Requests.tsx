import { Get, Post } from './helpers';
import config from '../config';

const url = config.API_URL;

const GetRequests = async (userId: number) => {
    return await Get(url + `/requests?user=${userId}`, {});
}

const PostRequest = async (payload: any) => {
    return await Post(url + '/requests', payload, {})
}

export { GetRequests, PostRequest };