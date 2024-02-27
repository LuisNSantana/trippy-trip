import { renderers } from './renderers.mjs';
import { manifest } from './manifest_TNuO3x1Q.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_MRiZfYIO.mjs');
const _page1 = () => import('./chunks/studio-route_zV6kSS3w.mjs');
const _page2 = () => import('./chunks/_slug__GJHs15-D.mjs');
const _page3 = () => import('./chunks/index_VY0JJtbd.mjs');

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
    "middlewareSecret": "da1f2756-b9d4-4018-ab99-3e83304c8a31"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
