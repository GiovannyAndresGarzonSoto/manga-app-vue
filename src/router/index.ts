import { createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    { 
        path: '/', 
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */ '../pages/Home.vue')
    },
    { 
        path: '/title/:id', 
        name: 'manga-title',
        component: () => import(/* webpackChunkName: "Home" */ '../pages/MangaTitle.vue')
    },
    { 
        path: '/manga-list', 
        name: 'manga-list',
        component: () => import(/* webpackChunkName: "MangaList" */ '../pages/MangaList.vue')
    },
    { 
        path: '/favorites', 
        name: 'favorites',
        component: () => import(/* webpackChunkName: "Favorites" */ '../pages/Favorites.vue')
    },
    { 
        path: '/ranking', 
        name: 'ranking',
        component: () => import(/* webpackChunkName: "Ranking" */ '../pages/Ranking.vue')
    },
    { 
        path: '/viewer/:chapterId', 
        name: 'viewer',
        component: () => import(/* webpackChunkName: "Viewer" */ '../pages/Viewer.vue')
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: '404',
        component: () => import(/* webpackChunkName: "404" */ '../pages/404.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router