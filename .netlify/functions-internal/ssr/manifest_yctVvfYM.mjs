import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_jTt2QGKU.mjs';
import 'clsx';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.EIhXM3EB.css"},{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/admin/[...params]","pattern":"^\\/admin(?:\\/(.*?))?\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.SjY-TRSj.js"}],"styles":[{"type":"external","src":"/_astro/studio-route.EIhXM3EB.css"},{"type":"inline","content":".fixed-header #theme-switcher[data-astro-cid-l4aeqea3]{margin-left:0;--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.fixed-header[data-astro-cid-hpnw4vwy]{position:fixed;bottom:auto;top:0;border-color:var(--color-border);background-color:var(--color-background);color:var(--color-text)}.modal[data-astro-cid-hpnw4vwy].is-open{display:block}\n"}],"routeData":{"route":"/evento/[slug]","isIndex":false,"type":"page","pattern":"^\\/evento\\/([^/]+?)\\/?$","segments":[[{"content":"evento","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/evento/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.wgquAZOl.js"}],"styles":[{"type":"external","src":"/_astro/studio-route.EIhXM3EB.css"},{"type":"inline","content":"@font-face{font-family:Inter Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/inter-cyrillic-ext-wght-normal.yBM_KeYt.woff2) format(\"woff2-variations\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/inter-cyrillic-wght-normal.ZiSV2vHp.woff2) format(\"woff2-variations\");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/inter-greek-ext-wght-normal.-QGCzYqo.woff2) format(\"woff2-variations\");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/inter-greek-wght-normal.8iAzSMjZ.woff2) format(\"woff2-variations\");unicode-range:U+0370-03FF}@font-face{font-family:Inter Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/inter-vietnamese-wght-normal.PxkLsD1V.woff2) format(\"woff2-variations\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/inter-latin-ext-wght-normal.jdaSF5G5.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/inter-latin-wght-normal.YFatk6uG.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@keyframes float{0%{transform:translateZ(0)}to{transform:translate3d(0,30px,0)}}#astronaut[data-astro-cid-3egmgwtg]{animation:float linear 2.5s infinite alternate}@media (prefers-reduced-motion: reduce){#astronaut[data-astro-cid-3egmgwtg]{animation:none}#starfield{display:none}#splash-bg-fallback[data-astro-cid-3egmgwtg]{display:block}}a,.btn{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}a:hover,.btn:hover{color:var(--color-secondary)}a:focus,.btn:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-color: var(--color-secondary);--tw-ring-offset-width: 2px;--tw-ring-offset-color: transparent}.gradient-text{-webkit-background-clip:text;background-clip:text;color:transparent;background-image:linear-gradient(to bottom right,var(--tw-gradient-stops));--tw-gradient-from: #a855f7 var(--tw-gradient-from-position);--tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to: rgb(74 222 128 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), #4ade80 var(--tw-gradient-via-position), var(--tw-gradient-to);--tw-gradient-to: #ec4899 var(--tw-gradient-to-position)}[data-theme=light]{--color-primary: #ec4899;--color-secondary: #6366f1;--color-text: #111827;--color-text-offset: #e5e7eb;--color-background: #f9fafb;--color-background-offset: #804AFF;--color-border: rgb(17 24 39 / 10%)}[data-theme=dark]{--color-primary: #f472b6;--color-secondary: #818cf8;--color-text: #f9fafb;--color-text-offset: #9ca3af;--color-background: #000;--color-background-offset: #804AFF;--color-border: rgb(249 250 251 / 10%)}\n.fixed-header #theme-switcher[data-astro-cid-l4aeqea3]{margin-left:0;--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.fixed-header[data-astro-cid-hpnw4vwy]{position:fixed;bottom:auto;top:0;border-color:var(--color-border);background-color:var(--color-background);color:var(--color-text)}.modal[data-astro-cid-hpnw4vwy].is-open{display:block}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://trippy-trip.netlify.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_mSzm0ycg.mjs","/src/pages/index.astro":"chunks/pages/index_3JY4BqOr.mjs","/node_modules/@sanity/astro/dist/studio/studio-route.astro":"chunks/pages/studio-route__39gaepj.mjs","\u0000@astrojs-manifest":"manifest_yctVvfYM.mjs","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_njhRsJC7.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"chunks/studio-route_1pdAxpRt.mjs","\u0000@astro-page:src/pages/evento/[slug]@_@astro":"chunks/_slug__odQR27MJ.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_GcYjQk3X.mjs","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/@sanity/vision/lib/_chunks/resources-bPLLJ09x.js":"_astro/resources-bPLLJ09x.yh6XFekI.js","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.ddYbKR8M.js","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/sanity/lib/_chunks/resources-YfoVZEUy.js":"_astro/resources-YfoVZEUy.bMtm7KJm.js","@astrojs/react/client.js":"_astro/client.RV50O_G0.js","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/sanity/lib/_chunks/resources-7hAPJyyn.js":"_astro/resources-7hAPJyyn.aCwMG-91.js","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/sanity/lib/_chunks/index-a-sWfEMi.js":"_astro/index-a-sWfEMi.oedvoNy9.js","/astro/hoisted.js?q=0":"_astro/hoisted.wgquAZOl.js","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/sanity/lib/_chunks/index-USaWq-Uo.js":"_astro/index-USaWq-Uo.QXF5fOQK.js","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/@sanity/client/dist/_chunks/stegaEncodeSourceMap-gZIRaYar.js":"_astro/stegaEncodeSourceMap-gZIRaYar.u-sOHXNp.js","/astro/hoisted.js?q=1":"_astro/hoisted.SjY-TRSj.js","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/sanity/lib/_chunks/index-otefcaF1.js":"_astro/index-otefcaF1.vkd0skbw.js","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/@sanity/vision/lib/_chunks/SanityVision-9R-J5NEI.js":"_astro/SanityVision-9R-J5NEI.oerrh2dg.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/inter-cyrillic-ext-wght-normal.yBM_KeYt.woff2","/_astro/inter-cyrillic-wght-normal.ZiSV2vHp.woff2","/_astro/inter-greek-wght-normal.8iAzSMjZ.woff2","/_astro/inter-greek-ext-wght-normal.-QGCzYqo.woff2","/_astro/inter-vietnamese-wght-normal.PxkLsD1V.woff2","/_astro/inter-latin-ext-wght-normal.jdaSF5G5.woff2","/_astro/inter-latin-wght-normal.YFatk6uG.woff2","/_astro/isotipo_blanco.4YZC0Ybj.png","/_astro/logo_blanco.qrvgSXHT.png","/_astro/elemento_2.V43xOTTU.png","/_astro/moon.iU9QHMMl.jpg","/_astro/studio-route.EIhXM3EB.css","/favicon.svg","/social.jpg","/_astro/browser.b362YRuq.js","/_astro/client.-OEVpZ6O.js","/_astro/client.RV50O_G0.js","/_astro/hoisted.SjY-TRSj.js","/_astro/hoisted.wgquAZOl.js","/_astro/index-a-sWfEMi.oedvoNy9.js","/_astro/index-otefcaF1.vkd0skbw.js","/_astro/index-USaWq-Uo.QXF5fOQK.js","/_astro/resources-7hAPJyyn.aCwMG-91.js","/_astro/resources-bPLLJ09x.yh6XFekI.js","/_astro/resources-YfoVZEUy.bMtm7KJm.js","/_astro/SanityVision-9R-J5NEI.oerrh2dg.js","/_astro/stegaEncodeSourceMap-gZIRaYar.u-sOHXNp.js","/_astro/studio-component.ddYbKR8M.js","/_astro/studio-component.OGLZesIZ.js"],"buildFormat":"directory"});

export { manifest };
