import Home from './views/Home.vue'
import SignUp from './views/SignUp.vue'
import SignIn from './views/SignIn.vue'
import Enrolled from './views/Enrolled.vue'
import Assignment from './views/Assignment.vue'
import Subjects from './views/Subjects.vue'
import Account from './views/Account.vue'
import manage_subjects from './views/manage_subjects.vue'


import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'SignIn',
        component: SignIn,
        path: '/sign-in'
    },
    {
        name: 'Enrolled',
        component: Enrolled,
        path: '/enrolled'
    },
    {
        name: 'Assignment',
        component: Assignment,
        path: '/assignment'
    },
    {
        name: 'Subjects',
        component: Subjects,
        path: '/subjects'
    },
    {
        name: 'Account',
        component: Account,
        path: '/account'
    },
    {
        name: 'manage_subjects',
        component: manage_subjects,
        path: '/manage-subjects'
    },
  
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;