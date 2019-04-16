import axios from 'axios';
import { callback } from './util';
import API from '@/config/api';

export default {
  async getMenu() {
    let response = await axios.get(API.base.getMenu);
    return callback(response.data);
  }
};
