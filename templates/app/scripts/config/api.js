import { isDev } from '@/config';

export default {
  base: {
    getMenu: `/api/menu${isDev ? '' : '.json'}`
  }
};
