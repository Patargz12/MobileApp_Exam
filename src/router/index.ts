import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/Login",
  },
  {
    path: "/folder/:id",
    component: () => import("../views/FolderPage.vue"),
  },

  {
    path: "/Home",
    component: () => import("../views/HomePage.vue"),
  },

  {
    path: "/Loyalty",
    component: () => import("../views/LoyaltyPage.vue"),
  },

  {
    path: "/Food",
    component: () => import("../views/FoodPage.vue"),
  },
  {
    path: "/Add",
    component: () => import("../views/AddPage.vue"),
  },
  {
    path: "/Order",
    component: () => import("../views/OrderPage.vue"),
  },
  {
    path: "/Folder",
    component: () => import("../views/FolderPage.vue"),
  },
  {
    path: "/Received",
    component: () => import("../views/ReceivedPage.vue"),
  },

  {
    path: "/Login",
    component: () => import("../views/LoginPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
