import { createRouter, createWebHistory } from 'vue-router'
import CookieClicker from '@/views/MovieShop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CookieClicker,
    },
  ],
})

export default router

// ---------------------------------------------

// Sample Project

// import { createRouter, createWebHistory } from 'vue-router'
// import CookieClicker from '@/views/CookieClicker.vue'
// import UserCreate from '@/views/UserCreate.vue'
// import VueLists from '@/views/ViewLists.vue/'
// import PokemonData from '@/views/PokemonData.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: CookieClicker,
//     },
//     {
//       path: '/user-create',
//       name: 'user-create',
//       component: UserCreate,
//     },
//     {
//       path: '/vue-lists',
//       name: 'vue-lists',
//       component: VueLists,
//     },
//     {
//       ///pkmn/3
//       path: '/pkmn/:id',
//       name: 'pkmn',
//       component: PokemonData,
//     },
//   ],
// })

// export default router
