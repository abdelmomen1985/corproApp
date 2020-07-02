import { Get, Post } from './helpers';
import config from '../config';

const url = config.API_URL;

const GetCareers = async () => {
    return await Get(url + '/careers', {});
};

const PostApplication = async (payload: object) => {
    return await Post(url + '/job-applications', payload, {headers: {'content-type': 'multipart/form-data'}});
};

export { GetCareers, PostApplication };