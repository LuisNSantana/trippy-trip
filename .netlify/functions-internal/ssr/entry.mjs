import { renderers } from './renderers.mjs';
import { manifest } from './manifest_NeLS1N7M.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_v7W-uT3d.mjs');
const _page1 = () => import('./chunks/studio-route_kMFwunlR.mjs');
const _page2 = () => import('./chunks/_slug__NzhJdFDc.mjs');
const _page3 = () => import('./chunks/index_YCEsI8h7.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/evento/[slug].astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "967a78bd-4fbe-440e-a0c0-812f58a6aa51"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
