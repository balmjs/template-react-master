import { observable, autorun } from 'mobx';
import API from '../api';

class MenuStore {
  @observable items = [];

  constructor() {
    if (!this.items.length) {
      autorun(() => {
        this.getMenu();
      });
    }
  }

  async getMenu() {
    let { success, data } = await API.getMenu();
    if (success) {
      this.items = data;
    }
  }
}

const menuStore = new MenuStore();

export default menuStore;
