import { defineStore } from 'pinia';

export const taskStore = defineStore('todo', {
  state: () => ({
    tasks: [],
  }),
  getters: {

  },
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    deleteTask(id) {
      console.log(id)
      this.tasks = this.tasks.filter(t => {
        return t.id !== id
      })
    }
  },
});
