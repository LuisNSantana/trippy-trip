import { renderers } from './renderers.mjs';
import { manifest } from './manifest_KEyQWITu.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_InyRWa1n.mjs');
const _page1 = () => import('./chunks/studio-route_z4ncWL_4.mjs');
const _page2 = () => import('./chunks/_slug__V-lzEQ9b.mjs');
const _page3 = () => import('./chunks/index_Pip2UQcy.mjs');

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
    "middlewareSecret": "c739055a-8972-46f1-90ce-fe02bd5c1038"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
