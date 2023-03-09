
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: '', path: '/', component: () => import('src/pages/IndexPortfolio'), },
      { name: 'home', path: '/home', component: () => import('src/pages/Home/IndexHome'), meta : {transition: 'animate__animated animate__zoomInDown'}},
      { name: 'competencias', path: '/competencias', component: () => import('src/pages/Competencias/CompetenciasHabilidades'), meta : {transition: 'animate__animated animate__zoomInDown'}},
      { name: 'historico-educacional', path: '/educacional', component: () => import('src/pages/Educacional/HistoricoEducacional'), meta : {transition: 'animate__animated animate__zoomInDown'}},
      { name: 'conselhos', path: '/conselhos', component: () => import('src/pages/Conselhos/IndexConselhos'), meta : {transition: 'animate__animated animate__zoomInDown'}},
      { name: 'filmes', path: '/filmes', component: () => import('src/pages/Filmes/BuscarFilmes.vue'), meta : {transition: 'animate__animated animate__zoomInDown'}},
      { name: 'todo', path: '/todo', component: () => import('src/pages/ToDo/IndexToDo'), meta : {transition: 'animate__animated animate__zoomInDown'}}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
