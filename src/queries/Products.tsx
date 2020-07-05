import { Get } from './helpers';
import config from '../config';

const url = config.API_URL;

const GetProducts = async () => {
    return await Get(url + '/posts?post_type=1&_sort=created_at:DESC', {});
};

export { GetProducts };