import { observable, autorun } from 'mobx';
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

  async getMenu() {
    let response = await axios.get('/data/menu.json');
    let items = response.data;
    this.items = items;
  }
}

const menuStore = new MenuStore();

export default menuStore;
