/* empty css                                  */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, u as unescapeHTML, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_Cvcs5Eve.mjs';
import 'piccolore';
import { s as serviceList, $ as $$BaseLayout, c as servicePages, b as $$Footer, a as $$Header } from '../chunks/Footer_DREmePbj.mjs';
import { $ as $$CTAForm } from '../chunks/CTAForm_BCdReIUF.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://ecolofin.by");
async function getStaticPaths() {
  return servicePages.map((page) => ({
    params: { slug: page.slug },
    props: { page }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { page } = Astro2.props;
  const relatedServices = serviceList.filter((item) => item.slug !== page.slug).slice(0, 6);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    provider: {
      "@type": "ProfessionalService",
      name: "\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u044F \u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432",
      url: "https://ecolofin.by"
    },
    areaServed: "BY",
    serviceType: "\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438",
    description: page.metaDescription
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": page.title, "description": page.metaDescription }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<main class="pt-16 md:pt-20"> <section class="section-padding bg-gradient-to-br from-primary-50 to-white"> <div class="container-custom"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"> <div> <p class="text-sm uppercase tracking-wide text-primary-600 font-semibold mb-3">\n\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438\n</p> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"> ', ' </h1> <p class="text-xl text-gray-700 mb-6">', '</p> <p class="text-gray-600 leading-relaxed mb-8">', '</p> <div class="flex flex-wrap gap-4"> <a href="#cta" class="btn-primary">\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E</a> <a href="#what-includes" class="btn-secondary">\u0427\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442</a> </div> </div> ', ' </div> </div> </section> <section id="what-includes" class="section-padding bg-white"> <div class="container-custom"> <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">\u0427\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ', ' </div> </div> </section> <section class="section-padding bg-gray-50"> <div class="container-custom"> <div class="grid grid-cols-1 md:grid-cols-2 gap-10"> <div> <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">\u041A\u043E\u043C\u0443 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442</h2> <ul class="space-y-3"> ', ' </ul> </div> <div> <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430</h2> <ul class="space-y-3"> ', ' </ul> </div> </div> </div> </section> <section class="section-padding bg-white"> <div class="container-custom"> <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B</h2> <div class="space-y-4"> ', ' </div> </div> </section> <section id="cta" class="section-padding bg-primary-600 text-white"> <div class="container-custom"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"> <div> <h2 class="text-3xl md:text-4xl font-bold mb-4">', '</h2> <p class="text-lg text-primary-100 mb-6">', '</p> <p class="text-primary-100">\n\u0418\u043B\u0438 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435: <a href="tel:+375296908945" class="font-semibold text-white">8 (029) 690-89-45</a> </p> </div> ', ' </div> </div> </section> <section class="section-padding bg-gray-50"> <div class="container-custom"> <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">\u0414\u0440\u0443\u0433\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ', " </div> </div> </section> </main> ", ' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), renderComponent($$result2, "Header", $$Header, {}), maybeRenderHead(), page.heroTitle, page.heroSubtitle, page.lead, renderComponent($$result2, "CTAForm", $$CTAForm, { "title": page.ctaTitle, "subtitle": page.ctaSubtitle, "source": `\u041F\u043E\u0441\u0430\u0434\u043E\u0447\u043D\u0430\u044F: ${page.slug}` }), page.includes.map((item) => renderTemplate`<div class="flex items-start gap-3 bg-gray-50 rounded-lg p-4"> <div class="w-6 h-6 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 font-bold">
✓
</div> <p class="text-gray-700">${item}</p> </div>`), page.forWhom.map((item) => renderTemplate`<li class="flex items-start gap-3"> <span class="text-primary-600 font-bold">•</span> <span class="text-gray-700">${item}</span> </li>`), page.benefits.map((item) => renderTemplate`<li class="flex items-start gap-3"> <span class="text-primary-600 font-bold">•</span> <span class="text-gray-700">${item}</span> </li>`), page.faq.map((item) => renderTemplate`<details class="rounded-lg border border-gray-200 p-4"> <summary class="font-semibold text-gray-900 cursor-pointer">${item.q}</summary> <p class="text-gray-600 mt-3">${item.a}</p> </details>`), page.ctaTitle, page.ctaSubtitle, renderComponent($$result2, "CTAForm", $$CTAForm, { "title": "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443", "subtitle": "", "source": `CTA: ${page.slug}`, "compact": true }), relatedServices.map((item) => renderTemplate`<a${addAttribute(`/${item.slug}`, "href")} class="block rounded-lg bg-white p-5 shadow-sm hover:shadow-md transition-shadow"> <h3 class="font-semibold text-gray-900">${item.title}</h3> <p class="text-sm text-primary-600 mt-2">Подробнее →</p> </a>`), renderComponent($$result2, "Footer", $$Footer, {}), unescapeHTML(JSON.stringify(serviceSchema)), unescapeHTML(JSON.stringify(faqSchema))) })}`;
}, "D:/aibrain/04_projects/ecolofin-by/src/pages/[slug].astro", void 0);

const $$file = "D:/aibrain/04_projects/ecolofin-by/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
