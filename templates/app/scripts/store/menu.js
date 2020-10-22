import { makeObservable, observable, action, autorun } from 'mobx';
import API from '@/api';

class MenuStore {
  items = [];

  constructor() {
    makeObservable(this, {
      items: observable,
      getMenu: action
    });
  }

  async getMenu() {
    let { success, data } = await API.base.getMenu();
    if (success) {
      this.items = data;
    }
  }
}

const menuStore = new MenuStore();

autorun(() => {
  if (!menuStore.items.length) {
    menuStore.getMenu();
  }
});

export default menuStore;
