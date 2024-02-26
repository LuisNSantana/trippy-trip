import { renderers } from './renderers.mjs';
import { manifest } from './manifest_v7MvL6Uy.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_6WRrM9d8.mjs');
const _page1 = () => import('./chunks/studio-route_lHrbUI9v.mjs');
const _page2 = () => import('./chunks/_slug__yRbUN8IE.mjs');
const _page3 = () => import('./chunks/index_i2rh5S5H.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/evento/[slug].astro", _page2],
    ["src/pages/index.astro", _page3]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "85c66c29-3c59-4228-8950-380251f9b2d6"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
