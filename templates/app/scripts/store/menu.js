import {
  observable,
  autorun,
  action
} from 'mobx';
import axios from 'axios';

class MenuStore {
  @observable items = [];

  constructor() {
    if (!this.items.length) {
      autorun(() => {
        this.getMenu();
      });
    }
  }

  @action async getMenu() {
    let response = await axios.get('/data/menu.json');
    let items = response.data;
    this.items = items;
  }
}

const menuStore = new MenuStore();

export default menuStore;
