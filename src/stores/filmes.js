import { defineStore } from 'pinia';

export const buscarFilmes = defineStore('filmes', {
  state: () => ({
    filme:  {}
  }),
  getters: {
    retornarFilme() {
      return this.filme
    }
  },
  actions: {
    addFilme(filme) {
      this.filme = filme
    },
    clearStore() {
      this.filme = []
    }
  },
});
