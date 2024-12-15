import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      redirect: '/dashboard',
      component: () => import('@/layouts/AdminLayout.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/views/admin/DashboardView.vue'),
        },
        {
          path: '/administrator',
          name: 'administrator',
          meta: {
            title: 'Users',
          },
          component: () => import('@/views/admin/AdministratorView.vue'),
        },
        {
          path: '/inventory',
          name: 'inventory',
          meta: {
            title: 'Inventory',
          },
          component: () => import('@/views/admin/InventoryView.vue'),
        },
        {
          path: '/our-menu',
          name: 'ourmenu',
          meta: {
            title: 'Menu',
          },
          component: () => import('@/views/admin/MenuView.vue'),
        },
      ],
    },
    {
      path: "/blank",
      component: () => import("@/layouts/BlankLayout.vue"),
      children: [
        {
          path: "/:pathMatch(.*)",
          meta: {
            authAdmin: false,
          },
          name: "404",
          component: () => import("@/views/error/ErrorNotFound.vue"),
        },
        // {
        //   path: "/home",
        //   name: "home",
        //   component: () => import("@/views/landing/HomeView.vue"),
        // },
        {
          path: "/login",
          name: "login",
          meta: {
            guestPage: false,
            title: "login"
          },
          component: () => import("@/views/auth/LoginPage.vue"),
        },
        {
          path: "/register",
          name: "register",
          component: () => import("@/views/auth/RegisterView.vue"),
        }
      ],
    },
    // landing page
    {
      path: "/",
      redirect: "/",
      component: () => import("@/layouts/LandingLayout.vue"),
      children: [
        {
          path: "/",
          name: "index",
          component: () => import("@/views/landing/IndexView.vue"),
        },
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/landing/HomeView.vue"),
        },
        {
          path: "/menu",
          name: "menu",
          component: () => import("@/views/landing/MenuView.vue"),

        },
        {
          path: "/recomendation",
          name: "recomendation",
          component: () => import("@/views/landing/RecomendationView.vue"),
        },
        {
          path: "/contact",
          name: "contact",
          component: () => import("@/views/landing/ContactView.vue"),
        },
      ],
    }
  ],
})

export default router
