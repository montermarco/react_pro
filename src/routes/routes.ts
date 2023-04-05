import { lazy, LazyExoticComponent } from 'react';
import NoLazy from '../lazyload/pages/NoLazy';

type  JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    name: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayout" */ '../lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        name: 'LazyLayout',
        Component: LazyLayout
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        name: 'No Lazy',
        Component: NoLazy
    },
];