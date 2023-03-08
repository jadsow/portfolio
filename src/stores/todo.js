import { defineStore } from 'pinia';

export const taskStore = defineStore('todo', {
  state: () => ({
    tasks: [
      {id: 1, title: "Estudar"},
      {id: 2, title: "DASDASdasdasdasdasdasdasdasdasdasdasdasdsadsadsadsdsadasdDASDIASJDOIASJDIOASJOIDSAJIODSAJIODSAJOIDJASIODJSAIOJDIOASJDIOASJDIOASJIODSAJIODASJOIDASJOIDAJIODASJIOJ"},
    ],
  }),
  getters: {

  },
  actions: {
    addTask(task) {
      this.tasks.push(task)
    }
  },
});
