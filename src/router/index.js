import { createRouter, createWebHistory } from "vue-router";
import ContactBook from "../views/ContactBook.vue";

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: () => import("../views/ContactEdit.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("../views/NotFound.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
