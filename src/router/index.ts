import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import BlogView from '@/views/BlogView.vue';
import NotFound from '@/views/NotFound.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import EmptyLayout from '@/layouts/EmptyLayout.vue';
import { h } from 'vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: {
      render: () => h(MainLayout, {}, { default: () => h(HomeView) }),
    },
    meta: { showNav: true },
  },
  {
    path: '/about',
    name: 'about',
    component: {
      render: () => h(MainLayout, {}, { default: () => h(AboutView) }),
    },
    meta: { showNav: true },
  },
  {
    path: '/blog/:blogId?',
    name: 'blog',
    component: {
      render: () => h(MainLayout, {}, { default: () => h(BlogView) }),
    },
    meta: { showNav: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: {
      render: () => h(EmptyLayout, {}, { default: () => h(NotFound) }),
    },
    meta: { showNav: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
