import { Get } from './helpers';
import config from '../config';

const url = config.API_URL;

const GetCareers = async () => {
    return await Get(url + '/careers', {});
};

export { GetCareers };