// 路由库定义
// 在平台初始化中被加载

import { RouterConfig } from '@angular/router';
import { routes as pagesRoutes,
    asyncRoutes as pagesAsyncRoutes
} from './pages';

export const routes: RouterConfig = [
    { path: '', pathMatch: 'full', redirectTo: '/pages/dashboard' },
    ...pagesRoutes,
];

export const asyncRoutes: AsyncRoutes = Object.assign({}, pagesAsyncRoutes);