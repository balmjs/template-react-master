import { DEBUG } from '@/config';

export default {
  base: {
    getMenu: `/api/menu${DEBUG ? '' : '.json'}`
  }
};
