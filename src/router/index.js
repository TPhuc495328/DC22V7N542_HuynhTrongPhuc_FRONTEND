import { createRouter, createWebHistory } from "vue-router";
import ContactBook from "../views/ContactBook.vue";

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

