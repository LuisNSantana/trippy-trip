import { $ as $$Icon, a as $$ContentSection, b as $$Image, c as client, d as isoTipoTrippyBlanco, u as urlFor, e as $$Header } from './_slug__M_M-q_b0.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, F as Fragment, h as addAttribute, k as renderHead } from '../astro_jTt2QGKU.mjs';
import 'kleur/colors';
import 'cssesc';
/* empty css                          */
import 'clsx';

const $$Astro$8 = createAstro("https://trippy-trip.netlify.app/");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Features;
  const features = [
    {
      title: "Experiencias \xDAnicas",
      description: "Sum\xE9rgete en eventos memorables dise\xF1ados para desafiar lo convencional y despertar tus sentidos.",
      icon: "mdi:handshake"
    },
    {
      title: "Creatividad Sin L\xEDmites",
      description: "Explora un mundo de posibilidades donde la imaginaci\xF3n es el \xFAnico l\xEDmite en nuestros eventos innovadores.",
      icon: "mdi:feather"
    },
    {
      title: "Atenci\xF3n Personalizada",
      description: "Disfruta de un trato excepcional con nuestro servicio dedicado, adaptado a cada cliente y necesidad.",
      icon: "mdi:people-outline"
    },
    {
      title: "Tecnolog\xEDa Innovadora",
      description: "Experimenta la \xFAltima tecnolog\xEDa para una experiencia moderna y envolvente en cada evento.",
      icon: "mdi:graph"
    },
    {
      title: "Dise\xF1o Vanguardista",
      description: "D\xE9jate sorprender por ambientes impresionantes y dise\xF1o de vanguardia en cada rinc\xF3n de nuestros espacios",
      icon: "mdi:search-web"
    },
    {
      title: "Comunidad Vibrante",
      description: "\xDAnete a una comunidad de personas apasionadas por la aventura y la diversi\xF3n en cada evento de Trippy Trip.",
      icon: "mdi:account-group"
    }
  ];
  return renderTemplate`${renderComponent($$result, "ContentSection", $$ContentSection, { "title": "Features", "id": "features" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<ul class="grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> ${features.map(({ title, description, icon }) => renderTemplate`<li class="flex flex-col items-center gap-4 border border-default bg-offset p-6"> <div class="size-16 rounded-full border-2 border-current p-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "size-full" })} </div> <p class="text-center font-extrabold text-xl">${title}</p> <p class="text-center text-offset text-sm">${description}</p> </li>`)} </ul> `, "lead": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "lead" }, { "default": ($$result3) => renderTemplate` <p>
Trippy Trip catapulta a sus asistentes hacia aventuras<span class="text-primary">
inolvidables</span>, donde la creatividad desata emociones. Cada detalle se cuida
      meticulosamente, asegurando experiencias <span class="text-primary">únicas</span>. La excelencia en el servicio es primordial, cada huésped se siente
      especial. Desde festivales vibrantes hasta escapadas íntimas, Trippy Trip
      transforma lo ordinario en extraordinario, creando un espacio donde la
      diversión y la aventura convergen en una experiencia excepcional que deja
      una impresión duradera.
</p> ` })}` })}`;
}, "C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/src/components/features.astro", void 0);

const moonImage = new Proxy({"src":"/_astro/moon.iU9QHMMl.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/src/assets/moon.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$7 = createAstro("https://trippy-trip.netlify.app/");
const $$HeroImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$HeroImage;
  const widths = [450, 800, 1200];
  const sizes = "100vw";
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full object-cover", "src": moonImage, "widths": widths, "sizes": sizes, "alt": "The ridged surface of the moon" })}`;
}, "C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/src/components/hero-image.astro", void 0);

const $$Astro$6 = createAstro("https://trippy-trip.netlify.app/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Footer;
  const links = [
    {
      url: "https://astro.build/",
      description: "Astro's official website",
      icon: "mdi:home"
    },
    {
      url: "https://github.com/mhyfritz/astro-landing-page",
      description: "View source on GitHub",
      icon: "fa-brands:github-alt"
    },
    {
      url: "https://astro.build/chat",
      description: "Astro on Discord",
      icon: "fa-brands:discord"
    },
    {
      url: "https://twitter.com/astrodotbuild",
      description: "Astro on Twitter",
      icon: "fa-brands:twitter"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="relative flex h-64 items-center justify-center"> <div class="absolute inset-0 overflow-hidden opacity-40"> ${renderComponent($$result, "HeroImage", $$HeroImage, {})} </div> <ul class="relative grid grid-cols-2 gap-4 sm:grid-cols-4"> ${links.map((link) => renderTemplate`<li> <a class="flex size-16 items-center justify-center rounded-full border-2 border-current p-4"${addAttribute(link.url, "href")}> <span class="sr-only">${link.description}</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-full", "name": link.icon })} </a> </li>`)} </ul> </footer>`;
}, "C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/src/components/footer.astro", void 0);

const elemento2 = new Proxy({"src":"/_astro/elemento_2.V43xOTTU.png","width":4500,"height":4500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/src/assets/elemento_2.png";
							}
							
							return target[name];
						}
					});

const $$Astro$5 = createAstro("https://trippy-trip.netlify.app/");
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Intro;
  return renderTemplate`${renderComponent($$result, "ContentSection", $$ContentSection, { "title": "Trippy trip", "id": "intro" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "class": "top-25 absolute left-2 size-20", "src": elemento2, "alt": "Trippy Trip logo" })}  ${maybeRenderHead()}<div class="grid grid-cols-1 gap-2 sm:grid-cols-2"> <a href="https://docs.astro.build/" class="flex items-center justify-center gap-3 border-2 border-current px-6 py-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:telescope", "class": "size-8" })} <span>Read the docs</span> </a> <a href="https://astro.new/" class="flex items-center justify-center gap-3 border-2 border-current px-6 py-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:rocket", "class": "size-8" })} <span>Try it out</span> </a> </div> `, "lead": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "lead" }, { "default": ($$result3) => renderTemplate` <p>
Somos una empresa especializada en eventos y fiestas exclusivas, donde la
<span class="text-primary">creatividad</span>, la
<span class="text-primary">excelencia en el servicio</span> y la
<span class="text-primary">atención al detalle</span> son nuestras señas de
      identidad. Desde bodas íntimas hasta eventos corporativos de gran envergadura,
      nos dedicamos a crear experiencias inolvidables. Nuestro enfoque en el lujo
      garantiza que cada evento sea único y excepcional. Confíe en nosotros para
      hacer realidad sus sueños y convertir cualquier ocasión en un momento inolvidable
      y extraordinario.
</p> ` })}` })}`;
}, "C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/src/components/intro.astro", void 0);

const logoTrippyBlanco = new Proxy({"src":"/_astro/logo_blanco.qrvgSXHT.png","width":4500,"height":4500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/src/assets/logo_blanco.png";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro("https://trippy-trip.netlify.app/");
const $$Starfield = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Starfield;
  return renderTemplate`${maybeRenderHead()}<div id="starfield" class="absolute inset-0"> <canvas id="starfield-canvas"></canvas> </div> `;
}, "C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/src/components/starfield.astro", void 0);

const $$Astro$3 = createAstro("https://trippy-trip.netlify.app/");
const $$Splash = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Splash;
  const widths = [450, 800];
  const sizes = "(min-width: 640px) 42vw, 67vw";
  let descripcion = "";
  async function getData() {
    const query = `*[_type == "slogan"]`;
    try {
      const data = await client.fetch(query);
      descripcion = data.map((item) => item.descripcion)[0];
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }
  await getData();
  return renderTemplate`${maybeRenderHead()}<section class="relative h-full bg-black" data-astro-cid-3egmgwtg> ${renderComponent($$result, "Starfield", $$Starfield, { "data-astro-cid-3egmgwtg": true })} <!-- <GitHubCorner /> --> <div id="splash-bg-fallback" class="absolute inset-0 hidden opacity-40" data-astro-cid-3egmgwtg> ${renderComponent($$result, "HeroImage", $$HeroImage, { "data-astro-cid-3egmgwtg": true })} </div> <div class="relative grid h-full place-items-center sm:grid-cols-2" data-astro-cid-3egmgwtg> <h2 class="flex flex-col items-center gap-2 self-end sm:gap-4 sm:self-auto sm:justify-self-end" data-astro-cid-3egmgwtg> <!-- <Icon name="logomark" class="size-24 text-white md:size-32"   /> --> ${renderComponent($$result, "Image", $$Image, { "class": "size-28 md:32", "src": isoTipoTrippyBlanco, "alt": "Trippy Trip logo", "data-astro-cid-3egmgwtg": true })} <div class="gradient-text text-center font-extrabold tracking-tighter text-8xl" data-astro-cid-3egmgwtg> ${descripcion} </div> </h2> <div id="astronaut" class="w-2/3 max-w-3xl self-start sm:w-10/12 sm:self-auto sm:justify-self-start" data-astro-cid-3egmgwtg> ${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full object-cover", "src": logoTrippyBlanco, "widths": widths, "sizes": sizes, "loading": "eager", "alt": "A floating astronaut in a space suit", "data-astro-cid-3egmgwtg": true })} </div> </div> </section> <noscript> <style>
    #splash-bg-fallback {
      display: block;
    }
  </style> </noscript> `;
}, "C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/src/components/splash.astro", void 0);

const $$Astro$2 = createAstro("https://trippy-trip.netlify.app/");
const $$Evento = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Evento;
  const eventos = await client.fetch(
    `*[_type == "event"] {
  "title": title,
  "slug":slug,
  "url": url,
  "image": image.asset->url,
  "content": content[]{
    "text": children[].text,
    "imageUrl": asset->url
  }
}`
  );
  const eventosConImagen = eventos.filter((evento) => evento.image);
  eventos.map((evento) => {
    return evento.content.map((elemento) => elemento.imageUrl).filter((imageUrl) => imageUrl !== null);
  });
  const sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw";
  console.log("URL IMAGENES: ", eventosConImagen);
  return renderTemplate`${renderComponent($$result, "ContentSection", $$ContentSection, { "title": "Eventos", "id": "evento" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="max-w-6xl space-y-2"> ${eventosConImagen && renderTemplate`<ul class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> ${eventosConImagen.map((evento, index) => renderTemplate`<li${addAttribute(index, "key")}> <a class="group aspect-video hover:!text-default"${addAttribute(`evento/${evento.slug.current}`, "href")}> <figure class="relative h-full w-full overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "class": "h-full w-full bg-cover object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-20 group-focus:scale-110 group-focus:opacity-20", "src": urlFor(evento.image).url(), "width": 450, "height": 400, "sizes": sizes, "alt": `Imagen de ${evento.title}` })} <figcaption class="absolute inset-0"> <div class="flex h-full flex-col items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100"> <h3 class="text-center font-extrabold uppercase text-xl"> ${evento.title} </h3> <p class="border border-current px-4 py-2">${evento.url}</p> </div> </figcaption> </figure> </a> </li>`)} </ul>`} <p class="text-right text-sm"> <a class="text-primary" href="https://astro.build/showcase/">...and more &rarr;</a> </p> </div> `, "lead": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "lead" }, { "default": ($$result3) => renderTemplate`
Explora la sección de eventos, descubre <span class="text-primary">Experiencias únicas</span> y crea <span class="text-primary">recuerdos inolvidables</span>. ¡No te los pierdas!
` })}` })}`;
}, "C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/src/components/evento.astro", void 0);

const $$Astro$1 = createAstro("https://trippy-trip.netlify.app/");
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`${renderComponent($$result, "ContentSection", $$ContentSection, { "title": "Contacto", "id": "contacto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center w-full"> <div class="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg"> <div class="flex flex-col justify-between"> <div> <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Contactanos para cualquier duda</h2> <div class="text-gray-700 mt-8">
Te contactaremos de manera inmediata!
</div> </div> </div> <div class=""> <div> <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span> <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder=""> </div> <div class="mt-8"> <span class="uppercase text-sm text-gray-600 font-bold">Email</span> <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text"> </div> <div class="mt-8"> <span class="uppercase text-sm text-gray-600 font-bold">Message</span> <textarea class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea> </div> <div class="mt-8"> <button class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
Send Message
</button> </div> </div> </div> </div>` })}`;
}, "C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/src/components/contacto.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://trippy-trip.netlify.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { generator, site } = Astro2;
  const image = new URL("social.jpg", site);
  const description = "Build fast websites, faster. Astro is a new kind of site builder for the modern web. Lightning-fast performance meets powerful developer experience.";
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="h-full motion-safe:scroll-smooth" data-theme="dark"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><meta name="generator"', '><title>Trippy Trip Official Web Site</title><meta name="description"', '><!-- social media --><meta property="og:title" content="Astro"><meta property="og:type" content="website"><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta name="twitter:card" content="summary_large_image"><!-- initialize theme --><script>\n      const themeSaved = localStorage.getItem("theme");\n\n      if (themeSaved) {\n        document.documentElement.dataset.theme = themeSaved;\n      } else {\n        const prefersDark = window.matchMedia(\n          "(prefers-color-scheme: dark)",\n        ).matches;\n        document.documentElement.dataset.theme = prefersDark ? "dark" : "light";\n      }\n\n      window\n        .matchMedia("(prefers-color-scheme: dark)")\n        .addEventListener("change", (event) => {\n          if (!localStorage.getItem("theme")) {\n            document.documentElement.dataset.theme = event.matches\n              ? "dark"\n              : "light";\n          }\n        });\n    <\/script>', '</head> <body class="h-full overflow-x-hidden bg-default text-default text-base selection:bg-secondary selection:text-white"> ', " ", ' <div class="space-y-24 px-8 py-32"> ', " ", " <!-- <Compatibility /> --> <!-- <Showcase /> --> ", " ", "  </div> ", " </body></html>"])), addAttribute(generator, "content"), addAttribute(description, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(site, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Splash", $$Splash, {}), renderComponent($$result, "Intro", $$Intro, {}), renderComponent($$result, "Features", $$Features, {}), renderComponent($$result, "Evento", $$Evento, {}), renderComponent($$result, "Contacto", $$Contacto, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/src/pages/index.astro", void 0);

const $$file = "C:/Users/Luis Nayib/Documents/DEV-DESARROLLO/ASTRO-PROJECTS/trippy-trip/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
