export default [
  {
    path: '/admin',
    redirect: '/dashboard',
    meta: {
      authAdmin: true,
    },
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
        path: '/add-user',
        name: 'addUser',
        meta: {
          title: 'Create Users',
        },
        component: () => import('@/views/admin/AddAdministratorView.vue'),
      },
      {
        path: '/edit-user/:id',
        name: 'editUser',
        meta: {
          title: 'Edit Users',
        },
        component: () => import('@/views/admin/EditAdministratorView.vue'),
      },
      {
        path: '/inventory',
        name: 'inventory',
        meta: {
          title: 'Inventory',
          icon: 'mdi-arrow-left'
        },
        component: () => import('@/views/admin/InventoryView.vue'),
      },
      {
        path: '/add-inventory',
        name: 'addInventory',
        meta: {
          title: 'Create Inventory',
        },
        component: () => import('@/views/admin/AddInventoryView.vue'),
      },
      {
        path: '/edit-inventory/:id',
        name: 'editInventory',
        meta: {
          title: 'Edit Inventory',
        },
        component: () => import('@/views/admin/EditInventoryView.vue'),
      },
      {
        path: '/category',
        name: 'category',
        meta: {
          title: 'Category',
        },
        component: () => import('@/views/admin/CategoryView.vue'),
      },
      {
        path: '/add-category',
        name: 'addCategory',
        meta: {
          title: 'Create Category',
        },
        component: () => import('@/views/admin/AddCategoryView.vue'),
      },
      {
        path: '/edit-category/:id',
        name: 'editCategory',
        meta: {
          title: 'Edit Category',
        },
        component: () => import('@/views/admin/EditCategoryView.vue'),
      },
      {
        path: '/our-menu',
        name: 'ourmenu',
        meta: {
          title: 'Menu',
        },
        component: () => import('@/views/admin/MenuView.vue'),
      },
      {
        path: '/add-menu',
        name: 'addMenu',
        meta: {
          title: 'Create Menu',
        },
        component: () => import('@/views/admin/AddMenuView.vue'),
      },
      {
        path: '/edit-menu/:id',
        name: 'editMenu',
        meta: {
          title: 'Edit Menu',
        },
        component: () => import('@/views/admin/EditMenuView.vue'),
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
          authAdmin: true,
        },
        name: "404",
        component: () => import("@/views/error/ErrorNotFound.vue"),
      },
      {
        path: "/login",
        name: "login",
        meta: {
          guestPage: true,
          title: "login"
        },
        component: () => import("@/views/auth/LoginPage.vue"),
      },
      {
        path: "/register",
        name: "register",
        meta: {
          guestPage: true,
          title: "register"
        },
        component: () => import("@/views/auth/RegisterView.vue"),
      }
    ],
  },
  // landing page
  {
    path: "/",
    redirect: "/",
    meta: {
      authLanding: true,
    },
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
]
