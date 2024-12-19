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
  const noSession = dataUser === null || dataUser === "undefined";

  if (to.matched.some((record) => record.meta.authAdmin)) {
    if (noSession) {
      next({
        name: "login",
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.authLanding)) {
    if (noSession) {
      next();
    } else {
      next({ name: "login" });
    }
  }
  else if (to.matched.some((record) => record.meta.guestPage)) {
    if (noSession) {
      next();
    } else {
      next({ name: "dashboard" });
    }
  }
});

export default router
