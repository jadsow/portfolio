
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: '', path: '/', component: () => import('src/pages/IndexPortfolio'), meta : {transition: 'animate__animated animate__slideInLeft'}},
      { name: 'home', path: '/home', component: () => import('src/pages/Home/IndexHome'), meta : {transition: 'animate__animated animate__zoomInDown'}},
      { name: 'conselhos', path: '/conselhos', component: () => import('src/pages/Conselhos/IndexConselhos'), meta : {transition: 'animate__animated animate__zoomInDown'}}
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
