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
    let menu = await API.getMenu();
    this.items = menu;
  }
}

const menuStore = new MenuStore();

export default menuStore;
