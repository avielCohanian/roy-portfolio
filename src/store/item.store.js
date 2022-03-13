// import { userService } from '../service/user-service.js';

import { itemService } from '../service/item.service';

export const itemStore = {
  state: {
    items: null,
  },
  getters: {
    items({ items }) {
      return items;
    },
  },
  mutations: {
    setItems(state, { items }) {
      state.items = items;
    },
  },
  actions: {
    async loadItem({ state, commit }) {
      try {
        const items = await itemService.query(state.filterBy);
        commit({ type: 'setItems', items });
      } catch (err) {
        console.log(err);
      }
    },
    async removeItem({ commit }, { itemId }) {
      try {
        const items = await itemService.remove(itemId);
        commit({ type: 'setItems', items });
      } catch (err) {
        console.log(err);
      }
    },
    async saveItem({ commit }, { item }) {
      try {
        const itemToSave = await itemService.save(item);
        console.log(itemToSave);
        item._id = itemToSave.insertedId;
        commit({ type: 'saveItem', item });
        return itemToSave;
      } catch (err) {
        console.log(err);
      }
    },
    async updateItem({ commit }, { item }) {
      try {
        const itemToUpdate = await itemService.save(item);
        commit({ type: 'updateItem', item });
        return itemToUpdate;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
