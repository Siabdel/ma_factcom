
import Vue from 'vue'
import Router from 'vue-router'
import Clients from './components/ClientList.vue'
import InvoiceItems from './components/InvoiceItems.vue'

Vue.use(Router)


const routes = [
    {
        name : "home", 
        path: "/",
       component : InvoiceItems,
    },
    {
        name : "clients",
        path: "/client",
        component : Clients,
    },
  ]


export default new Router({
    mode : "history",
    routes : routes,
});




