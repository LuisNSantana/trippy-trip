import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_9p6dM9az.mjs';
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

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.euCpAo36.css"},{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/admin/[...params]","pattern":"^\\/admin(?:\\/(.*?))?\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.euCpAo36.css"}],"routeData":{"route":"/evento/[slug]","isIndex":false,"type":"page","pattern":"^\\/evento\\/([^/]+?)\\/?$","segments":[[{"content":"evento","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/evento/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted._ybTN-k2.js"}],"styles":[{"type":"external","src":"/_astro/studio-route.euCpAo36.css"},{"type":"external","src":"/_astro/index.iYXzxxEL.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://trippy-trip.netlify.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/index.astro":"chunks/pages/index_PP3ESrrC.mjs","/node_modules/@sanity/astro/dist/studio/studio-route.astro":"chunks/pages/studio-route_lCGxVD45.mjs","\u0000@astrojs-manifest":"manifest_v7MvL6Uy.mjs","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_6WRrM9d8.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"chunks/studio-route_lHrbUI9v.mjs","\u0000@astro-page:src/pages/evento/[slug]@_@astro":"chunks/_slug__yRbUN8IE.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_i2rh5S5H.mjs","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/@sanity/vision/lib/_chunks/resources-bPLLJ09x.js":"_astro/resources-bPLLJ09x.qiyznQBy.js","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/sanity/lib/_chunks/resources-YfoVZEUy.js":"_astro/resources-YfoVZEUy.pMD1Y9ja.js","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/sanity/lib/_chunks/index-USaWq-Uo.js":"_astro/index-USaWq-Uo.mkisokod.js","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.lzIJ7doo.js","@astrojs/react/client.js":"_astro/client.RV50O_G0.js","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/sanity/lib/_chunks/index-a-sWfEMi.js":"_astro/index-a-sWfEMi.NZOhuGY9.js","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/sanity/lib/_chunks/resources-7hAPJyyn.js":"_astro/resources-7hAPJyyn.nbLWsl-D.js","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/@sanity/client/dist/_chunks/stegaEncodeSourceMap-gZIRaYar.js":"_astro/stegaEncodeSourceMap-gZIRaYar.j2cqGWk5.js","/astro/hoisted.js?q=0":"_astro/hoisted._ybTN-k2.js","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/sanity/lib/_chunks/index-otefcaF1.js":"_astro/index-otefcaF1.PMBeOTTY.js","C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/node_modules/@sanity/vision/lib/_chunks/SanityVision-9R-J5NEI.js":"_astro/SanityVision-9R-J5NEI.k8zUstv1.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/inter-cyrillic-wght-normal.ZiSV2vHp.woff2","/_astro/inter-cyrillic-ext-wght-normal.yBM_KeYt.woff2","/_astro/inter-greek-wght-normal.8iAzSMjZ.woff2","/_astro/inter-greek-ext-wght-normal.-QGCzYqo.woff2","/_astro/inter-latin-wght-normal.YFatk6uG.woff2","/_astro/inter-latin-ext-wght-normal.jdaSF5G5.woff2","/_astro/inter-vietnamese-wght-normal.PxkLsD1V.woff2","/_astro/isotipo_blanco.4YZC0Ybj.png","/_astro/logo_blanco.qrvgSXHT.png","/_astro/elemento_2.V43xOTTU.png","/_astro/moon.iU9QHMMl.jpg","/_astro/index.iYXzxxEL.css","/_astro/studio-route.euCpAo36.css","/favicon.svg","/social.jpg","/_astro/browser.b362YRuq.js","/_astro/client.-OEVpZ6O.js","/_astro/client.RV50O_G0.js","/_astro/hoisted._ybTN-k2.js","/_astro/index-a-sWfEMi.NZOhuGY9.js","/_astro/index-otefcaF1.PMBeOTTY.js","/_astro/index-USaWq-Uo.mkisokod.js","/_astro/resources-7hAPJyyn.nbLWsl-D.js","/_astro/resources-bPLLJ09x.qiyznQBy.js","/_astro/resources-YfoVZEUy.pMD1Y9ja.js","/_astro/SanityVision-9R-J5NEI.k8zUstv1.js","/_astro/stegaEncodeSourceMap-gZIRaYar.j2cqGWk5.js","/_astro/studio-component.lzIJ7doo.js","/_astro/studio-component.PqEAoOOh.js"],"buildFormat":"directory"});

export { manifest };
