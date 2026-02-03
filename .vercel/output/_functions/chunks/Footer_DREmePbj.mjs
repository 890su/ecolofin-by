import { e as createAstro, f as createComponent, r as renderTemplate, o as renderSlot, p as renderHead, u as unescapeHTML, h as addAttribute, m as maybeRenderHead, n as renderScript } from './astro/server_Cvcs5Eve.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://ecolofin.by");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    canonical,
    ogImage = "/img/logo.png",
    noindex = false
  } = Astro2.props;
  const siteUrl = Astro2.site || "https://ecolofin.by";
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;
  const canonicalUrl = canonical || Astro2.url.pathname;
  const fullCanonical = canonicalUrl.startsWith("http") ? canonicalUrl : `${siteUrl}${canonicalUrl}`;
  return renderTemplate(_b || (_b = __template(['<html lang="ru"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/x-icon" href="/favicon.ico">', "<title>", '</title><meta name="description"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Structured Data (Schema.org) --><script type="application/ld+json">', "<\/script>", "", "</head> <body> ", ' <!-- Yandex Metrika --> <script type="text/javascript">\n      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n      m[i].l=1*new Date();\n      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n      (window, document, "script", "https://mc.yandex.ru/metrika/watch.js", "ym");\n      \n      try {\n        ym(27429140, "init", {\n          clickmap: true,\n          trackLinks: true,\n          accurateTrackBounce: true,\n          webvisor: true,\n          trackHash: true\n        });\n      } catch(e) { }\n    <\/script> <noscript> <div> <img src="https://mc.yandex.ru/watch/27429140" style="position:absolute; left:-9999px;" alt=""> </div> </noscript> </body> </html>'])), noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`, title, addAttribute(description, "content"), addAttribute(fullCanonical, "href"), addAttribute(fullCanonical, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(fullOgImage, "content"), addAttribute(fullCanonical, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(fullOgImage, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u044F \u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432",
    "image": `${siteUrl}/img/logo.png`,
    "url": siteUrl,
    "telephone": "+375296908945",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "\u0443\u043B. \u041C\u0438\u0445\u0430\u0441\u044F \u041B\u044B\u043D\u044C\u043A\u043E\u0432\u0430, \u0434\u043E\u043C 19/1, \u043A\u0430\u0431\u0438\u043D\u0435\u0442 3-26",
      "addressLocality": "\u041C\u0438\u043D\u0441\u043A",
      "postalCode": "220104",
      "addressCountry": "BY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.9167,
      "longitude": 27.4444
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  })), Astro2.url.pathname === "/" && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0430\u0443\u0442\u0441\u043E\u0440\u0441\u0438\u043D\u0433 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "\u0410\u0443\u0442\u0441\u043E\u0440\u0441\u0438\u043D\u0433 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u0438 - \u043F\u043E\u043B\u043D\u0430\u044F \u0438\u043B\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0439 \u0412\u0430\u0448\u0435\u0439 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438-\u0430\u0443\u0442\u0441\u043E\u0440\u0441\u0435\u0440\u0443. \u042D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430\u043C \u0443\u0434\u0435\u043B\u044F\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044E \u0431\u0438\u0437\u043D\u0435\u0441\u0430."
        }
      },
      {
        "@type": "Question",
        "name": "\u0427\u0435\u043C \u042D\u043A\u043E\u043B\u043E\u0433\u0438\u044F \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432 \u043B\u0443\u0447\u0448\u0435 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u0438?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "\u0412\u044B \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u0442\u0435 \u043E\u0442 \u043B\u0438\u0447\u043D\u044B\u0445 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043E\u0434\u043D\u043E\u0433\u043E \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u043D\u0435 \u043F\u043B\u0430\u0442\u0438\u0442\u0435 \u0448\u0442\u0440\u0430\u0444\u044B \u0437\u0430 \u043E\u0448\u0438\u0431\u043A\u0438, \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0432 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0445 \u0438 \u0433\u043E\u0442\u043E\u0432\u0443\u044E \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u0434\u0432\u0435 \u043D\u0435\u0434\u0435\u043B\u0438 \u0434\u043E \u0441\u0440\u043E\u043A\u0430."
        }
      },
      {
        "@type": "Question",
        "name": "\u041A\u0430\u043A\u0438\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438 \u0434\u0430\u0435\u0442 \u042D\u043A\u043E\u043B\u043E\u0433\u0438\u044F \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "\u041C\u044B \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0443\u0447\u0435\u0442\u0430. \u0422\u0430\u043A\u0436\u0435 \u043C\u044B \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u043C \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0443 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0441 \u043B\u0438\u043C\u0438\u0442\u043E\u043C \u0434\u043E $90 \u0442\u044B\u0441."
        }
      }
    ]
  }))), renderHead(), renderSlot($$result, $$slots["default"]));
}, "D:/aibrain/04_projects/ecolofin-by/src/layouts/BaseLayout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" data-astro-cid-3ef6ksr2> <div class="bg-white/95 backdrop-blur-md shadow-soft" data-astro-cid-3ef6ksr2> <nav class="container-custom" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between h-16 md:h-20" data-astro-cid-3ef6ksr2> <!-- Logo --> <a href="/" class="flex items-center space-x-2 group" data-astro-cid-3ef6ksr2> <img src="/img/logo.png" alt="Экология Финансов" class="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" width="120" height="48" loading="eager" decoding="sync" data-astro-cid-3ef6ksr2> </a> <!-- Desktop Navigation --> <div class="hidden md:flex items-center gap-6" data-astro-cid-3ef6ksr2> <!-- Nav Links --> <nav class="flex items-center gap-1" data-astro-cid-3ef6ksr2> <a href="#services" class="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors" data-astro-cid-3ef6ksr2>
Услуги
</a> <a href="#pricing" class="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors" data-astro-cid-3ef6ksr2>
Цены
</a> <a href="#faq" class="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors" data-astro-cid-3ef6ksr2>
FAQ
</a> <a href="#contacts" class="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors" data-astro-cid-3ef6ksr2>
Контакты
</a> </nav> <!-- Divider --> <div class="w-px h-8 bg-gray-200" data-astro-cid-3ef6ksr2></div> <!-- Phone --> <div class="flex items-center gap-3" data-astro-cid-3ef6ksr2> <div class="text-right" data-astro-cid-3ef6ksr2> <a href="tel:+375296908945" class="text-lg font-bold text-gray-900 hover:text-primary-600 transition-colors" data-astro-cid-3ef6ksr2>
8 (029) 690-89-45
</a> <p class="text-xs text-gray-500" data-astro-cid-3ef6ksr2>Пн-Пт 8:00-18:00</p> </div> <a href="tel:+375296908945" class="w-10 h-10 bg-accent-500 rounded-xl flex items-center justify-center hover:bg-accent-600 transition-colors" data-astro-cid-3ef6ksr2> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-3ef6ksr2></path> </svg> </a> </div> </div> <!-- Mobile: Phone + Menu --> <div class="flex items-center gap-3 md:hidden" data-astro-cid-3ef6ksr2> <a href="tel:+375296908945" class="w-10 h-10 bg-accent-500 rounded-xl flex items-center justify-center" data-astro-cid-3ef6ksr2> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-3ef6ksr2></path> </svg> </a> <button id="mobile-menu-button" class="w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" aria-label="Открыть меню" data-astro-cid-3ef6ksr2> <svg id="menu-icon-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> <svg id="menu-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </div> </nav> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 shadow-lg" data-astro-cid-3ef6ksr2> <nav class="container-custom py-4" data-astro-cid-3ef6ksr2> <div class="flex flex-col gap-1" data-astro-cid-3ef6ksr2> <a href="#services" class="mobile-nav-link" data-astro-cid-3ef6ksr2> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-3ef6ksr2></path> </svg>
Услуги
</a> <a href="#pricing" class="mobile-nav-link" data-astro-cid-3ef6ksr2> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-3ef6ksr2></path> </svg>
Цены
</a> <a href="#faq" class="mobile-nav-link" data-astro-cid-3ef6ksr2> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-3ef6ksr2></path> </svg>
FAQ
</a> <a href="#contacts" class="mobile-nav-link" data-astro-cid-3ef6ksr2> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-3ef6ksr2></path> </svg>
Контакты
</a> </div> <div class="mt-4 pt-4 border-t border-gray-100" data-astro-cid-3ef6ksr2> <div class="flex items-center gap-3" data-astro-cid-3ef6ksr2> <div class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center" data-astro-cid-3ef6ksr2> <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-3ef6ksr2></path> </svg> </div> <div data-astro-cid-3ef6ksr2> <a href="tel:+375296908945" class="text-lg font-bold text-gray-900" data-astro-cid-3ef6ksr2>
8 (029) 690-89-45
</a> <p class="text-sm text-gray-500" data-astro-cid-3ef6ksr2>Пн-Пт 8:00-18:00</p> </div> </div> </div> </nav> </div> </header>  ${renderScript($$result, "D:/aibrain/04_projects/ecolofin-by/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/Header.astro", void 0);

const servicePages = [
  {
    slug: "autsorsing-buhgalterskogo-ucheta",
    title: "Аутсорсинг бухгалтерского учета в Минске",
    metaDescription: "Аутсорсинг бухгалтерского учета в Минске и Беларуси: ведение учета, отчетность, контроль рисков. Прозрачные условия, опыт 7+ лет.",
    heroTitle: "Аутсорсинг бухгалтерского учета",
    heroSubtitle: "Освободите время для развития бизнеса",
    lead: "Современный аутсорсинг бухгалтерии — это точность, соблюдение сроков и снижение рисков. Мы берём на себя учет, отчетность и контроль качества, чтобы вы могли сосредоточиться на росте компании.",
    includes: [
      "Постановка и ведение бухгалтерского и налогового учета",
      "Своевременная сдача отчетности в ИМНС, ФСЗН, Белгосстрах",
      "Контроль первичных документов и корректности операций",
      "Консультации по налоговым вопросам и рискам",
      "Регламенты документооборота и контроль сроков"
    ],
    forWhom: [
      "ИП и малый бизнес, которым нужен стабильный учет",
      "ООО с регулярным документооборотом",
      "Компании, которые хотят снизить расходы на штатную бухгалтерию",
      "Бизнес с сезонной нагрузкой"
    ],
    benefits: [
      "Экономия до 70% на содержании бухгалтерии",
      "Страхование ответственности до $90 тыс.",
      "Замена штатного бухгалтера без простоев",
      "Прозрачная стоимость и контроль качества"
    ],
    faq: [
      {
        q: "Чем аутсорсинг отличается от штатного бухгалтера?",
        a: "Аутсорсинг снимает риски простоя и больничных, а также снижает затраты на рабочее место и ПО. Команда заменяет одного специалиста."
      },
      {
        q: "Какие документы нужны для старта?",
        a: "Учредительные документы, доступ к первичным документам и текущим данным учета. Составляем чек‑лист при первом контакте."
      },
      {
        q: "Как быстро можно начать работу?",
        a: "Обычно в течение 1–2 рабочих дней после подписания договора и передачи данных."
      }
    ],
    ctaTitle: "Получите бесплатную консультацию",
    ctaSubtitle: "Оценим текущий учет и предложим оптимальный формат сотрудничества"
  },
  {
    slug: "vedenie-buhgalterskogo-i-nalogovogo-ucheta",
    title: "Ведение бухгалтерского и налогового учета",
    metaDescription: "Ведение бухгалтерского и налогового учета для ИП и ООО: корректность, сроки, контроль рисков и отчетности.",
    heroTitle: "Ведение бухгалтерского и налогового учета",
    heroSubtitle: "Точность, сроки, контроль рисков",
    lead: "Выстроим регулярный учет и налоговое сопровождение: от первичных документов до отчетности. Минимизируем риски штрафов и обеспечим прозрачность.",
    includes: [
      "Учет операций и первичных документов",
      "Налоговый учет и расчет обязательств",
      "Сдача отчетности и взаимодействие с госорганами",
      "Контроль корректности данных и сверки"
    ],
    forWhom: [
      "Компании на УСН/ОСН",
      "ИП с регулярными операциями",
      "Бизнес, которому нужен контроль и прозрачность учета"
    ],
    benefits: [
      "Снижение налоговых рисков",
      "Контроль сроков сдачи отчетности",
      "Экспертная проверка операций"
    ],
    faq: [
      {
        q: "Можете вести учет удаленно?",
        a: "Да, большая часть клиентов обслуживается удаленно с удобным обменом документами."
      },
      {
        q: "Можно ли подключить частично?",
        a: "Да, возможны гибридные форматы: часть функций оставляем внутри, часть передаем нам."
      },
      {
        q: "Как контролируется качество?",
        a: "Используем чек‑листы, внутренний аудит и регулярные сверки."
      }
    ],
    ctaTitle: "Нужен стабильный учет?",
    ctaSubtitle: "Опишите бизнес — подберём формат и стоимость"
  },
  {
    slug: "abonentskoe-buhgalterskoe-obsluzhivanie",
    title: "Абонентское бухгалтерское обслуживание",
    metaDescription: "Абонентское бухгалтерское обслуживание для бизнеса: фиксированная стоимость, регулярный контроль учета, сопровождение.",
    heroTitle: "Абонентское бухгалтерское обслуживание",
    heroSubtitle: "Фиксированная стоимость и предсказуемый сервис",
    lead: "Регулярное обслуживание с прозрачной стоимостью. Поддерживаем учет, отчетность и консультации в рамках абонентского договора.",
    includes: [
      "Ежемесячное ведение учета",
      "Сдача отчетности",
      "Консультации по вопросам учета и налогов",
      "Сверки и контроль первичных документов"
    ],
    forWhom: [
      "Компании с регулярным документооборотом",
      "Бизнес, которому важна прогнозируемость расходов"
    ],
    benefits: [
      "Прозрачная стоимость без скрытых платежей",
      "Постоянный контроль качества учета",
      "Удобный формат взаимодействия"
    ],
    faq: [
      {
        q: "Что входит в абонентское обслуживание?",
        a: "Ведение учета, отчетность, консультации и контроль корректности данных."
      },
      {
        q: "Можно ли менять тариф?",
        a: "Да, при изменении объема операций возможен переход на другой тариф."
      }
    ],
    ctaTitle: "Рассчитать абонентскую стоимость",
    ctaSubtitle: "Укажите объем операций — предложим тариф"
  },
  {
    slug: "postanovka-buhgalterskogo-ucheta",
    title: "Постановка бухгалтерского учета",
    metaDescription: "Постановка бухгалтерского и налогового учета: выбор системы налогообложения, учетная политика, регламенты.",
    heroTitle: "Постановка бухгалтерского учета",
    heroSubtitle: "Старт с правильной системой учета",
    lead: "Настроим учет с нуля: от выбора системы налогообложения до регламентов документооборота. Это снижает риски и ошибки в будущем.",
    includes: [
      "Выбор системы налогообложения",
      "Разработка учетной политики",
      "Регламенты документооборота",
      "Настройка учетных процессов"
    ],
    forWhom: [
      "Новые компании и стартапы",
      "Бизнес после реорганизации",
      "Компании, меняющие систему учета"
    ],
    benefits: [
      "Правильная база с первого дня",
      "Снижение риска штрафов",
      "Прозрачные процессы"
    ],
    faq: [
      {
        q: "Сколько занимает постановка учета?",
        a: "Зависит от структуры бизнеса, обычно 3–10 рабочих дней."
      },
      {
        q: "Можно ли совместить с ведением учета?",
        a: "Да, постановка может перейти в регулярное сопровождение."
      }
    ],
    ctaTitle: "Настроить учет правильно",
    ctaSubtitle: "Заполните форму — подготовим план работ"
  },
  {
    slug: "revizija-buhgalterskogo-ucheta",
    title: "Ревизия бухгалтерского учета",
    metaDescription: "Ревизия бухгалтерского учета: проверка корректности, выявление рисков, рекомендации по исправлению ошибок.",
    heroTitle: "Ревизия бухгалтерского учета",
    heroSubtitle: "Выявим ошибки до проверки",
    lead: "Проверим состояние учета, выявим риски и предложим план исправления. Это помогает избежать штрафов и проблем при проверках.",
    includes: [
      "Анализ первичных документов",
      "Проверка корректности проводок",
      "Оценка налоговых рисков",
      "Отчет с рекомендациями"
    ],
    forWhom: [
      "Компании перед налоговой проверкой",
      "Бизнес после смены бухгалтера",
      "Руководители, желающие понять состояние учета"
    ],
    benefits: [
      "Прозрачная картина учета",
      "Рекомендации по устранению ошибок",
      "Снижение рисков штрафов"
    ],
    faq: [
      {
        q: "Что будет в итоге ревизии?",
        a: "Подробный отчет с выявленными рисками и планом корректировок."
      },
      {
        q: "Сколько длится ревизия?",
        a: "Срок зависит от объема данных, обычно 5–15 рабочих дней."
      }
    ],
    ctaTitle: "Заказать ревизию учета",
    ctaSubtitle: "Проверьте учет до штрафов"
  },
  {
    slug: "sostavlenie-buhgalterskoj-otchyotnosti",
    title: "Составление бухгалтерской отчётности",
    metaDescription: "Составление бухгалтерской отчетности: корректные формы, своевременная сдача, контроль рисков.",
    heroTitle: "Составление бухгалтерской отчётности",
    heroSubtitle: "Своевременно и без ошибок",
    lead: "Подготовим отчетность в соответствии с требованиями законодательства. Контролируем сроки и качество данных.",
    includes: [
      "Составление отчетов и деклараций",
      "Проверка корректности данных",
      "Сдача отчетности в госорганы"
    ],
    forWhom: [
      "ИП и ООО, которым нужна точная отчетность",
      "Компании с нерегулярной отчетной нагрузкой"
    ],
    benefits: [
      "Минимизация ошибок",
      "Соблюдение сроков",
      "Контроль изменений законодательства"
    ],
    faq: [
      {
        q: "Можно ли подготовить отчетность разово?",
        a: "Да, работаем с разовыми задачами и регулярным сопровождением."
      },
      {
        q: "Какие сроки подготовки?",
        a: "Зависит от объема, обычно 1–5 рабочих дней."
      }
    ],
    ctaTitle: "Сдать отчетность вовремя",
    ctaSubtitle: "Оставьте заявку — подготовим документы"
  },
  {
    slug: "vosstanovlenie-buhgalterskogo-ucheta",
    title: "Восстановление бухгалтерского учета",
    metaDescription: "Восстановление бухгалтерского и налогового учета: исправление ошибок, восстановление данных, подготовка к проверкам.",
    heroTitle: "Восстановление бухгалтерского учета",
    heroSubtitle: "Вернем учет в порядок",
    lead: "Если учет велся нерегулярно или с ошибками, восстановим данные, исправим проводки и подготовим отчетность.",
    includes: [
      "Сбор и анализ документов",
      "Восстановление проводок",
      "Корректировка отчетности",
      "Рекомендации по дальнейшему учету"
    ],
    forWhom: [
      "Компании с нарушенным учетом",
      "Бизнес после смены бухгалтера",
      "Организации перед проверкой"
    ],
    benefits: [
      "Восстановление прозрачности учета",
      "Снижение риска штрафов",
      "Подготовка к проверкам"
    ],
    faq: [
      {
        q: "Сколько стоит восстановление учета?",
        a: "Стоимость зависит от объема и глубины проблем, проводится предварительная оценка."
      },
      {
        q: "Сколько времени занимает восстановление?",
        a: "Обычно от 1 до 4 недель в зависимости от объема."
      }
    ],
    ctaTitle: "Восстановить учет",
    ctaSubtitle: "Оценим состояние и предложим план восстановления"
  },
  {
    slug: "buhgalterskie-konsultacii",
    title: "Бухгалтерские консультации",
    metaDescription: "Бухгалтерские консультации: ответы на вопросы учета, отчетности и налогов, снижение рисков.",
    heroTitle: "Бухгалтерские консультации",
    heroSubtitle: "Четкие ответы на сложные вопросы",
    lead: "Поможем разобраться с учетом, отчетностью и нюансами законодательства. Быстро и по существу.",
    includes: [
      "Консультации по учету и отчетности",
      "Разбор сложных ситуаций",
      "Рекомендации по снижению налоговых рисков"
    ],
    forWhom: [
      "ИП и ООО с вопросами по учету",
      "Бизнес при изменении законодательства",
      "Руководители без штатного бухгалтера"
    ],
    benefits: [
      "Экономия времени на разборе законодательства",
      "Снижение риска ошибок"
    ],
    faq: [
      {
        q: "Можно ли получить консультацию онлайн?",
        a: "Да, работаем удаленно по телефону и в мессенджерах."
      },
      {
        q: "Можно ли задать один вопрос?",
        a: "Да, есть формат разовых консультаций."
      }
    ],
    ctaTitle: "Получить консультацию",
    ctaSubtitle: "Опишите вопрос — ответим быстро"
  },
  {
    slug: "nalogovoe-konsultirovanie",
    title: "Налоговое консультирование",
    metaDescription: "Налоговое консультирование: оптимизация налоговой нагрузки в рамках закона и контроль рисков.",
    heroTitle: "Налоговое консультирование",
    heroSubtitle: "Управляйте налоговыми рисками",
    lead: "Консультации по налоговым вопросам, разбор рисков и законных вариантов оптимизации.",
    includes: [
      "Разбор налоговой ситуации",
      "Рекомендации по корректному учету",
      "Снижение рисков штрафов"
    ],
    forWhom: [
      "Компании с изменением нагрузки",
      "Бизнес при проверках",
      "ИП и ООО с вопросами по налогообложению"
    ],
    benefits: [
      "Понимание налоговых рисков",
      "Прозрачные рекомендации"
    ],
    faq: [
      {
        q: "Даете ли письменные рекомендации?",
        a: "Да, по запросу формируем письменное заключение."
      },
      {
        q: "Можно ли заказать разбор перед проверкой?",
        a: "Да, это частая задача наших клиентов."
      }
    ],
    ctaTitle: "Разобрать налоговую ситуацию",
    ctaSubtitle: "Оставьте заявку — проведем консультацию"
  },
  {
    slug: "razovye-buhgalterskie-uslugi",
    title: "Разовые бухгалтерские услуги",
    metaDescription: "Разовые бухгалтерские услуги: подготовка отчетности, документы, консультации под задачу.",
    heroTitle: "Разовые бухгалтерские услуги",
    heroSubtitle: "Точечные задачи без долгосрочного договора",
    lead: "Если нужен разовый сервис — подготовим документы, отчетность или консультацию под вашу задачу.",
    includes: [
      "Составление отчетности",
      "Подготовка первичных документов",
      "Консультации и разовые проверки"
    ],
    forWhom: [
      "ИП и ООО с разовыми задачами",
      "Компании в период пиковых нагрузок"
    ],
    benefits: [
      "Оплата только за результат",
      "Быстрое решение задачи"
    ],
    faq: [
      {
        q: "Можно ли заказать разовую отчетность?",
        a: "Да, работаем с разовыми отчетами и документами."
      }
    ],
    ctaTitle: "Решить разовую задачу",
    ctaSubtitle: "Опишите задачу — оценим срок и стоимость"
  },
  {
    slug: "autsorsing-buhgalterii-dlya-marketplejsov",
    title: "Аутсорсинг бухгалтерии для маркетплейсов",
    metaDescription: "Бухгалтерия для маркетплейсов: учет продаж, комиссии, отчетность и контроль налогов.",
    heroTitle: "Бухгалтерия для маркетплейсов",
    heroSubtitle: "Учет продаж и комиссий без ошибок",
    lead: "Настроим учет для работы с маркетплейсами: продажи, комиссии, возвраты, налоги и отчетность.",
    includes: [
      "Учет продаж и комиссий",
      "Контроль возвратов и корректировок",
      "Сверки с маркетплейсами",
      "Отчетность и налоги"
    ],
    forWhom: [
      "ИП и ООО, продающие на маркетплейсах",
      "Компании с большим количеством операций"
    ],
    benefits: [
      "Корректный учет сложных операций",
      "Снижение риска налоговых ошибок"
    ],
    faq: [
      {
        q: "С какими маркетплейсами работаете?",
        a: "Работаем с основными платформами. Уточним список на консультации."
      }
    ],
    ctaTitle: "Настроить учет маркетплейсов",
    ctaSubtitle: "Опишите площадки и объем операций"
  },
  {
    slug: "autsorsing-buhgalterskih-uslug",
    title: "Аутсорсинг бухгалтерских услуг",
    metaDescription: "Аутсорсинг бухгалтерских услуг для бизнеса: учет, отчетность, контроль рисков и прозрачные условия.",
    heroTitle: "Аутсорсинг бухгалтерских услуг",
    heroSubtitle: "Профессиональный сервис по понятной цене",
    lead: "Передайте учет профессионалам и получите стабильный сервис, контроль качества и поддержку.",
    includes: [
      "Полный цикл учета и отчетности",
      "Консультации и контроль рисков",
      "Гибкие форматы сотрудничества"
    ],
    forWhom: [
      "Бизнес, которому нужен надежный партнер",
      "Компании с ростом документооборота"
    ],
    benefits: [
      "Стабильное качество",
      "Экономия на штатных расходах"
    ],
    faq: [
      {
        q: "Можно ли начать с тестового периода?",
        a: "Да, обсуждаем пилотный формат и KPI."
      }
    ],
    ctaTitle: "Запросить коммерческое предложение",
    ctaSubtitle: "Подберем формат под ваш бизнес"
  }
];
const serviceList = servicePages.map(({ slug, title }) => ({
  slug,
  title
}));

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const quickLinks = [
    { href: "#services", label: "\u0423\u0441\u043B\u0443\u0433\u0438" },
    { href: "#pricing", label: "\u0426\u0435\u043D\u044B" },
    { href: "#team", label: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacts", label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" }
  ];
  const serviceLinks = serviceList.slice(0, 6);
  return renderTemplate`${maybeRenderHead()}<footer id="footer" class="bg-gray-900 text-gray-300"> <!-- Main Footer --> <div class="container-custom py-16"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"> <!-- Company Info --> <div class="lg:col-span-1"> <a href="/" class="inline-block mb-6"> <img src="/img/logo.png" alt="Экология Финансов" class="h-10 brightness-0 invert opacity-90" width="120" height="40"> </a> <p class="text-gray-400 mb-4 text-sm leading-relaxed">
Профессиональные бухгалтерские услуги в Минске и по всей Беларуси. 
          Экономия до 70% без потери качества.
</p> <div class="flex items-center gap-2 mb-3"> <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center"> <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> <span class="text-sm text-gray-400">Страхование до $90K</span> </div> </div> <!-- Quick Links --> <div> <h3 class="text-white font-semibold text-lg mb-5">Навигация</h3> <ul class="space-y-3"> ${quickLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"> <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> ${link.label} </a> </li>`)} </ul> </div> <!-- Services --> <div> <h3 class="text-white font-semibold text-lg mb-5">Услуги</h3> <ul class="space-y-3"> ${serviceLinks.map((service) => renderTemplate`<li> <a${addAttribute(`/${service.slug}`, "href")} class="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"> <svg class="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> ${service.title.replace(" \u0432 \u041C\u0438\u043D\u0441\u043A\u0435", "").replace("\u0410\u0443\u0442\u0441\u043E\u0440\u0441\u0438\u043D\u0433 ", "")} </a> </li>`)} </ul> </div> <!-- Contact Info --> <div> <h3 class="text-white font-semibold text-lg mb-5">Контакты</h3> <div class="space-y-4"> <!-- Phones --> <div> <a href="tel:+375296908945" class="text-xl font-bold text-white hover:text-primary-400 transition-colors block mb-1">
8 (029) 690-89-45
</a> <a href="tel:+375173738945" class="text-gray-400 hover:text-white transition-colors block text-sm">
8 (017) 373-89-45
</a> </div> <!-- Email --> <a href="mailto:info@ecolofin.by" class="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
info@ecolofin.by
</a> <!-- Address --> <div class="text-gray-400 text-sm flex items-start gap-2"> <svg class="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span>220104, Минск, ул. Михася Лынькова, дом 19/1, каб. 3-26</span> </div> <!-- Working Hours --> <div class="text-gray-400 text-sm flex items-center gap-2"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Пн-Пт: 8:00-18:00
</div> </div> </div> </div> </div> <!-- Bottom Bar --> <div class="border-t border-gray-800"> <div class="container-custom py-6"> <div class="flex flex-col md:flex-row items-center justify-between gap-4"> <div class="text-sm text-gray-500"> <p class="mb-1">ЧП «Экология финансов» | УНП 191099473</p> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Все права защищены</p> </div> <div class="flex items-center gap-6"> <a href="/privacy" class="text-sm text-gray-500 hover:text-white transition-colors">
Политика конфиденциальности
</a> </div> </div> </div> </div> </footer>`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/Footer.astro", void 0);

export { $$BaseLayout as $, $$Header as a, $$Footer as b, servicePages as c, serviceList as s };
