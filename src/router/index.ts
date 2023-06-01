import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormularioInicialView from '../views/FormularioInicialView.vue'
import EntradaTesteView from '../views/EntradaTesteView.vue'
import CamposFormularioViewVue from '@/views/CamposFormularioView.vue'
import MinhasSolicitacoesView from '@/views/MinhasSolicitacoesView.vue'
import DetalhesSolicitacaoView from '../views/DetalhesSolicitacaoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EntradaTesteView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/form/:idservico',
      name: 'form',
      component: FormularioInicialView
    },
    {
      path: '/detalhesolicitacao/:siglaDocumento',
      name: 'detalhesolicitacao',
      component: DetalhesSolicitacaoView
    },
    {
      path: '/campos',
      name: 'campos',
      component: CamposFormularioViewVue
    },
    {
      path: '/minhassolicitacoes',
      name: 'minhassolicitacoes',
      component: MinhasSolicitacoesView
    },
 ]
})

export default router
