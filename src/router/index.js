import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/:catchAll(.*)',
		name: 'start',
		component: function () {
			return import('../views/AboutView.vue');
		},
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
