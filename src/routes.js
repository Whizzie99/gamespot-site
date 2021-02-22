/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './Store/store';

import Home from './components/Home/index.vue';
import Signin from './components/Signin/Index.vue';
import Dashboard from './components/Dashboard/Index.vue';

Vue.use(VueRouter);

const authGuard = {
    beforeEnter: (to, from, next) => {

        const redirect = () => {

            if(store.state.admin.token){
                if(to.path === '/signin'){
                    next('/dashboard')
                }else{
                    next()
                }
            }else{
                if(to.path === '/signin'){
                    next()
                }else{
                    next('/')
                }
            }

        }

        if(store.state.admin.refreshLoading){
            // async
            store.watch((state, getters) => getters['admin/refreshLoading'],() => {
                redirect();
            })
        }else{
            redirect();
        }
    } 
}

const routes = [
    {path: '/', component: Home},
    {path: '/signin', component: Signin,...authGuard},
    {path: '/dashboard', component: Dashboard,children:[],...authGuard}
];


export default new VueRouter({
    mode: 'history',
    routes,
    // eslint-disable-next-line no-unused-vars
    scrollBehaviour(from, to, savedPosition){
        return{x:0, y:0}
    }
})