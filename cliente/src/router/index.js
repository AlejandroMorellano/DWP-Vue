import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  //ruta base
  {
    path: "/",
    redirect: "/inicio",
  },
  //rutas a componentes
  {
    path: "/",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    //Los componentes que se renderizan en router-view
    children: [
      {
        path: "/inicio",
        name: "inicio",
        component: () => import("../components/Inicio.vue"),
      },
      {
        path: "/renta",
        name: "renta",
        component: () => import("../components/Renta.vue"),
      },
      {
        path: "/informacion",
        name: "informacion",
        component: () => import("../components/Informacion.vue"),
      },
      {
        path: "/oferta",
        name: "oferta",
        component: () => import("../components/Oferta.vue"),
      },
      {
        path: "/catalogo",
        name: "catalogo",
        component: () => import("../components/Catalogo.vue"),
      },
      {
        path: "/detalles",
        name: "detalles",
        component: () => import("../components/Detalles.vue"),
      },
    ],
  },
];

const router = new VueRouter({ routes });
export default router;
