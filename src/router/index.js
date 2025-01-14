import { createRouter, createWebHistory } from 'vue-router'

import baseRoutes from "@/router/routes";

let routes = baseRoutes;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
    ? `${to.meta.title} - Hoffmann Lane `
    : "404 Not Found - Hoffmann Lane";

  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  // console.log('dataUser.role', dataUser.role);
  const noSession = dataUser === null || dataUser === "undefined";
  const roleAdmin = dataUser?.role === 1;
  const roleUser = dataUser?.role === 2;

  if (to.matched.some((record) => record.meta.authAdmin)) {
    if (noSession) {
      next({
        name: "login",
      });
    } else {
      if (roleAdmin) {
        next();
      } else {
        next({ name: "login", });
      }
    }
  } else if (to.matched.some((record) => record.meta.authLanding)) {
    if (noSession) {
      next();
    } else {
      if (roleUser) {
        next();
      } else {
        next({ name: "login" });
      }
    }
  }
  else if (to.matched.some((record) => record.meta.guestPage)) {
    if (noSession) {
      next();
    } else {
      next({ name: "dashboard" });
    }
  }
  else {
    next();
  }
});

export default router
