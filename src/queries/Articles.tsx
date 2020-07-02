import { Get } from './helpers';
import config from '../config';

const url = config.API_URL;

// Get all articles
const GetArticles = async () => {
    return await Get(url + '/posts?post_type=2', {});
};

// Get one article using its ID
const GetArticle = async (id: number) => {
    return await Get(url + `/posts/${id}?timestamp=${new Date().getTime()}`, {})
};

export { GetArticles, GetArticle }