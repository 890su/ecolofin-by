/* empty css                                  */
import { f as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate, h as addAttribute, l as Fragment, n as renderScript, u as unescapeHTML, e as createAstro, o as renderSlot } from '../chunks/astro/server_Cvcs5Eve.mjs';
import 'piccolore';
import { s as serviceList, $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_DREmePbj.mjs';
import { $ as $$CTAForm } from '../chunks/CTAForm_BCdReIUF.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="relative min-h-[90vh] flex items-center overflow-hidden"> <!-- Background Pattern --> <div class="absolute inset-0 bg-gradient-hero"></div> <div class="absolute inset-0 opacity-[0.03]" style="background-image: url('/img/header-bg.svg'); background-size: 100px;"></div> <!-- Decorative Elements --> <div class="absolute top-20 right-10 w-72 h-72 bg-accent-200 rounded-full blur-3xl opacity-30"></div> <div class="absolute bottom-20 left-10 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-30"></div> <div class="container-custom relative z-10 py-12 md:py-20"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"> <!-- Left Column: Content --> <div class="text-center lg:text-left animate-fade-in-up"> <!-- Badge --> <div class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft mb-6"> <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> <span class="text-sm font-medium text-gray-700">7+ лет безупречной работы</span> </div> <h1 class="text-gray-900 mb-6">
Бухгалтерские услуги<br class="hidden sm:block"> <span class="text-gradient">для вашего бизнеса</span> </h1> <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl">
Аутсорсинг бухгалтерии в Минске и Беларуси.
<span class="font-semibold text-gray-800">Экономия до 70%</span> без потери качества.
</p> <!-- Key Benefits --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"> <div class="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl"> <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> <span class="text-gray-700 text-sm font-medium">Страхование до $90K</span> </div> <div class="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl"> <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path> </svg> </div> <span class="text-gray-700 text-sm font-medium">2650+ деклараций</span> </div> <div class="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl"> <div class="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> </div> <span class="text-gray-700 text-sm font-medium">Личный бухгалтер</span> </div> <div class="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl"> <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <span class="text-gray-700 text-sm font-medium">Быстрый старт</span> </div> </div> <!-- Phone Number --> <div class="flex flex-col sm:flex-row items-center gap-4 mb-8"> <a href="tel:+375296908945" class="text-2xl md:text-3xl font-bold text-primary-700 hover:text-primary-800 transition-colors">
8 (029) 690-89-45
</a> <span class="hidden sm:block text-gray-400">|</span> <span class="text-gray-500">Пн-Пт 8:00-18:00</span> </div> <!-- CTA Buttons --> <div class="flex flex-col sm:flex-row gap-4"> <a href="#contacts" class="btn-primary text-center">
Бесплатная консультация
</a> <a href="#services" class="btn-secondary text-center">
Подобрать услугу
</a> </div> </div> <!-- Right Column: Form + Image --> <div class="relative"> <!-- Promo Image (Desktop) --> <div class="hidden lg:block absolute -right-8 -bottom-20 w-48 h-48 z-0"> <img src="/img/guy.png" alt="Бухгалтер" class="w-full h-full object-contain opacity-20" loading="lazy"> </div> <!-- Form Card --> <div class="relative z-10"> ${renderComponent($$result, "CTAForm", $$CTAForm, { "title": "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E", "subtitle": "\u041D\u0430\u0448 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0412\u0430\u043C\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 15 \u043C\u0438\u043D\u0443\u0442", "source": "Hero \u0441\u0435\u043A\u0446\u0438\u044F" })} </div> </div> </div> </div> </section>`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/Hero.astro", void 0);

const $$TrustSignals = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    {
      value: "7+",
      label: "\u043B\u0435\u0442 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435",
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
      color: "primary"
    },
    {
      value: "$90K",
      label: "\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435",
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>`,
      color: "green"
    },
    {
      value: "25+",
      label: "\u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432",
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
      color: "accent"
    },
    {
      value: "2650+",
      label: "\u0434\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0438\u0439",
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>`,
      color: "purple"
    },
    {
      value: "19",
      label: "\u043F\u0440\u043E\u0432\u0435\u0440\u043E\u043A",
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
      color: "teal"
    },
    {
      value: "24",
      label: "\u0432\u044B\u0438\u0433\u0440\u0430\u043D\u043D\u044B\u0445 \u0438\u0441\u043A\u0430",
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>`,
      color: "indigo"
    }
  ];
  const colorClasses = {
    primary: { bg: "bg-primary-100", text: "text-primary-600", value: "text-primary-700" },
    green: { bg: "bg-green-100", text: "text-green-600", value: "text-green-700" },
    accent: { bg: "bg-accent-100", text: "text-accent-600", value: "text-accent-700" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", value: "text-purple-700" },
    teal: { bg: "bg-teal-100", text: "text-teal-600", value: "text-teal-700" },
    indigo: { bg: "bg-indigo-100", text: "text-indigo-600", value: "text-indigo-700" }
  };
  return renderTemplate`${maybeRenderHead()}<section id="trust-signals" class="py-12 md:py-16 bg-white relative overflow-hidden"> <!-- Decorative --> <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"></div> <div class="container-custom"> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"> ${stats.map((stat, index) => {
    const colors = colorClasses[stat.color];
    return renderTemplate`<div${addAttribute(`text-center p-5 rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-${stat.color}-200 hover:shadow-soft transition-all duration-300 group animate-on-scroll stagger-${index + 1}`, "class")}> <div${addAttribute(`w-12 h-12 mx-auto mb-3 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} group-hover:scale-110 transition-transform duration-300`, "class")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(stat.icon)}` })} </div> <div${addAttribute(`text-3xl md:text-4xl font-bold ${colors.value} mb-1 count-number`, "class")}> ${stat.value} </div> <div class="text-sm text-gray-600">${stat.label}</div> </div>`;
  })} </div> <!-- Guarantee Badge --> <div class="mt-8 flex justify-center"> <div class="inline-flex items-center gap-3 bg-green-50 border border-green-200 px-6 py-3 rounded-full"> <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> <span class="font-semibold text-green-800">Гарантия качества или возврат средств</span> </div> </div> </div> </section> ${renderScript($$result, "D:/aibrain/04_projects/ecolofin-by/src/components/TrustSignals.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/TrustSignals.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="features" class="section-padding bg-gray-50"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Почему стоит работать с нами
</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto">
Отличный сервис, высокое качество услуг и продукции гарантированы
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"> <!-- Feature 1 --> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"> <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-3">Опыт и экспертиза</h3> <p class="text-gray-600">
7 лет на рынке. Штат бухгалтеров с опытом 16-20 лет. Квалифицированные специалисты.
</p> </div> <!-- Feature 2 --> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"> <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-3">Всегда на связи</h3> <p class="text-gray-600">
Клиенты ценят нас за отзывчивость и готовность помочь даже в экстренных ситуациях.
</p> </div> <!-- Feature 3 --> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"> <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-3">Персональный подход</h3> <p class="text-gray-600">
За каждым клиентом закреплен отдельный бухгалтер. Учитываем все тонкости вашего бизнеса.
</p> </div> <!-- Feature 4 --> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"> <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-3">Гарантии и защита</h3> <p class="text-gray-600">
Страхование профессиональной ответственности. Лимит до $90 тыс. Защита от штрафов.
</p> </div> </div> </div> </section>`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/Features.astro", void 0);

const $$StatsSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="stats" class="section-padding bg-primary-600 text-white"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4">Наши результаты</h2> <p class="text-lg text-primary-100">Цифры, которые говорят сами за себя</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <div class="text-center"> <div class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">2650+</div> <div class="text-xl md:text-2xl text-primary-100">налоговых деклараций сдано</div> </div> <div class="text-center"> <div class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">24</div> <div class="text-xl md:text-2xl text-primary-100">выигранных иска против клиентов</div> </div> <div class="text-center"> <div class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">19</div> <div class="text-xl md:text-2xl text-primary-100">пройденных налоговых проверок</div> </div> <div class="text-center"> <div class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">25+</div> <div class="text-xl md:text-2xl text-primary-100">компаний доверяют нам</div> </div> </div> </div> </section>`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/StatsSection.astro", void 0);

const oneTimeServices = [
  {
    id: "setup",
    title: "Постановка учета",
    price: "от 130р",
    description: "Комплексная настройка бухгалтерского учета для вашей компании",
    features: [
      "Изучение специфики деятельности предприятия",
      "Выбор рациональной и выгодной для клиента системы налогообложения",
      "Разработка и утверждение учетной политики в области налогового и бухгалтерского учета",
      "Автоматизация бухгалтерского учета",
      "Предоставление разработанной нормативной внутренней документации: приказы, должностные инструкции и пр."
    ],
    category: "one-time"
  },
  {
    id: "zero",
    title: "Нулевая отчетность",
    price: "от 65 руб.",
    description: "Своевременная сдача нулевой отчетности носит обязательный характер",
    features: [
      "Своевременная сдача нулевой отчетности",
      "Защита от штрафов",
      "Для новых и приостановленных компаний"
    ],
    category: "one-time"
  },
  {
    id: "primary",
    title: "Выписка первичных документов",
    price: "от 3 руб. за комплект",
    description: "Подготовка счетов и накладных удаленно",
    features: [
      "Подготовка счетов и накладных",
      "Удаленная подготовка и печать на вашем принтере",
      "Или передача документов лично"
    ],
    category: "one-time"
  },
  {
    id: "analysis",
    title: "Экспресс-анализ финансово-хозяйственной деятельности",
    description: "Анализ финансового состояния предприятия",
    features: [
      "При смене руководства, в т.ч. главного бухгалтера предприятия",
      "При принятии решения о покупке-продаже бизнеса",
      "Перед предстоящей налоговой проверки",
      "По собственной инициативе, для реальной оценки дел на предприятии"
    ],
    category: "one-time"
  },
  {
    id: "reporting",
    title: "Формирование и сдача отчетности в налоговую и ФСЗН",
    price: "от 200р",
    description: "Составление всех форм отчетов, расчетов и деклараций",
    features: [
      "Составление всех форм отчетов, расчетов и деклараций",
      "Взаимодействие с налоговыми органами, ФСЗН, Белгосстрах, отделы статистики"
    ],
    category: "one-time"
  },
  {
    id: "restore",
    title: "Восстановление бухгалтерского и налогового учета",
    description: "Восстановление учета при его отсутствии или низком качестве",
    features: [
      "При отсутствии ведения учета",
      "При низкой квалификации бухгалтера",
      "Перед предстоящей налоговой проверкой"
    ],
    category: "one-time"
  }
];
const fullServiceSteps = [
  {
    title: "Предварительная оценка состояния бухгалтерии",
    description: "Эта процедура позволяет определить необходимость восстановления бухучета, а также оценить объем предоставляемых услуг"
  },
  {
    title: "Оформление договора на бухгалтерское сопровождение",
    description: "Прозрачные условия и фиксированная цена"
  },
  {
    title: "Предоставление необходимых документов и сведений в ИМНС",
    description: "Оформление всех необходимых документов"
  },
  {
    title: "Предоставление документов для открытия счета в банке",
    description: "Помощь в открытии банковского счета"
  },
  {
    title: "Ежедневное ведение учета",
    description: "Регулярное ведение бухгалтерского и налогового учета"
  },
  {
    title: "Регулярная отчетность",
    description: "Своевременная сдача всех форм отчетности"
  },
  {
    title: "Консультации и поддержка",
    description: "Постоянная поддержка и консультации по вопросам учета"
  }
];

const $$ServicesSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="services" class="section-padding bg-white" data-astro-cid-satlbe6z> <div class="container-custom" data-astro-cid-satlbe6z> <div class="text-center mb-12" data-astro-cid-satlbe6z> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-satlbe6z>
Наши услуги
</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-satlbe6z>
Полный спектр услуг от постановки учета до полного сопровождения
</p> </div> <!-- Быстрые ссылки на посадочные --> <div class="mb-8" data-astro-cid-satlbe6z> <p class="text-sm text-gray-500 mb-3 text-center" data-astro-cid-satlbe6z>Популярные запросы</p> <div class="flex flex-wrap justify-center gap-3" data-astro-cid-satlbe6z> ${serviceList.slice(0, 6).map((item) => renderTemplate`<a${addAttribute(`/${item.slug}`, "href")} class="text-sm px-3 py-1 rounded-full bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors" data-astro-cid-satlbe6z> ${item.title} </a>`)} </div> </div> <!-- Tabs --> <div class="mb-8" data-astro-cid-satlbe6z> <div class="flex flex-wrap justify-center border-b border-gray-200" data-astro-cid-satlbe6z> <button class="tab-button px-6 py-3 font-semibold text-gray-600 border-b-2 border-transparent hover:text-primary-600 transition-colors" data-tab="one-time" data-astro-cid-satlbe6z>
Разовые бухгалтерские услуги
</button> <button class="tab-button px-6 py-3 font-semibold text-gray-600 border-b-2 border-transparent hover:text-primary-600 transition-colors" data-tab="full-service" data-astro-cid-satlbe6z>
Полное сопровождение
</button> </div> </div> <!-- One-time Services Tab --> <div id="tab-one-time" class="tab-content" data-astro-cid-satlbe6z> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-satlbe6z> ${oneTimeServices.map((service) => renderTemplate`<div class="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow" data-astro-cid-satlbe6z> <div class="flex justify-between items-start mb-4" data-astro-cid-satlbe6z> <h3 class="text-xl font-bold text-gray-900" data-astro-cid-satlbe6z>${service.title}</h3> ${service.price && renderTemplate`<span class="text-lg font-semibold text-primary-600 whitespace-nowrap ml-4" data-astro-cid-satlbe6z> ${service.price} </span>`} </div> <p class="text-gray-600 mb-4" data-astro-cid-satlbe6z>${service.description}</p> <ul class="space-y-2 mb-6" data-astro-cid-satlbe6z> ${service.features.map((feature) => renderTemplate`<li class="flex items-start space-x-2" data-astro-cid-satlbe6z> <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-satlbe6z> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-satlbe6z></path> </svg> <span class="text-gray-700 text-sm" data-astro-cid-satlbe6z>${feature}</span> </li>`)} </ul> <a href="#contacts" class="btn-primary inline-block text-center w-full" data-astro-cid-satlbe6z>
Узнать стоимость
</a> </div>`)} </div> </div> <!-- Full Service Tab --> <div id="tab-full-service" class="tab-content hidden" data-astro-cid-satlbe6z> <div class="max-w-4xl mx-auto" data-astro-cid-satlbe6z> <p class="text-lg text-gray-700 mb-8 text-center" data-astro-cid-satlbe6z>
Приобретая полное обслуживание бухгалтерии в "Экологии финансов",
          Вы получаете не только безупречное ведение учета и отчетности.
          Вы также можете рассчитывать на значительную экономию времени и денег.
</p> <div class="space-y-6" data-astro-cid-satlbe6z> ${fullServiceSteps.map((step, index) => renderTemplate`<div class="bg-gray-50 p-6 rounded-lg" data-astro-cid-satlbe6z> <div class="flex items-start space-x-4" data-astro-cid-satlbe6z> <div class="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold" data-astro-cid-satlbe6z> ${index + 1} </div> <div class="flex-1" data-astro-cid-satlbe6z> <h3 class="text-xl font-bold text-gray-900 mb-2" data-astro-cid-satlbe6z>${step.title}</h3> <p class="text-gray-600" data-astro-cid-satlbe6z>${step.description}</p> </div> </div> </div>`)} </div> <div class="mt-8 text-center" data-astro-cid-satlbe6z> <p class="text-lg text-gray-700 mb-4" data-astro-cid-satlbe6z>
В результате Вы будете осведомлены о финансовом положении Вашей организации:
            основные финансовые показатели, дебиторская и кредиторская задолженности,
            информация об остатках, суммах налогов и сборов и т.п.
</p> <a href="#pricing" class="btn-primary inline-block" data-astro-cid-satlbe6z>
Посмотреть цены →
</a> </div> </div> </div> </div> </section> ${renderScript($$result, "D:/aibrain/04_projects/ecolofin-by/src/components/ServicesSection.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/ServicesSection.astro", void 0);

const $$ServiceLinksSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-padding bg-gray-50"> <div class="container-custom"> <div class="text-center mb-10"> <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
Бухгалтерские услуги — направления
</h2> <p class="text-gray-600">
Выберите нужное направление и получите подробную информацию
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ${serviceList.map((item) => renderTemplate`<a${addAttribute(`/${item.slug}`, "href")} class="group rounded-lg bg-white p-5 shadow-sm hover:shadow-md transition-shadow"> <h3 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors"> ${item.title} </h3> <p class="text-sm text-gray-500 mt-2">Подробнее →</p> </a>`)} </div> </div> </section>`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/ServiceLinksSection.astro", void 0);

const $$ProcessSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="process" class="section-padding bg-gray-50"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Как мы работаем
</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto">
Простой и прозрачный процесс сотрудничества
</p> </div> <div class="max-w-5xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4"> <!-- Step 1 --> <div class="text-center"> <div class="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
1
</div> <h3 class="text-lg font-bold text-gray-900 mb-2">Консультация</h3> <p class="text-sm text-gray-600">Бесплатная оценка вашей ситуации</p> </div> <!-- Arrow --> <div class="hidden md:flex items-center justify-center"> <svg class="w-8 h-8 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> <!-- Step 2 --> <div class="text-center"> <div class="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
2
</div> <h3 class="text-lg font-bold text-gray-900 mb-2">Договор</h3> <p class="text-sm text-gray-600">Прозрачные условия и фиксированная цена</p> </div> <!-- Arrow --> <div class="hidden md:flex items-center justify-center"> <svg class="w-8 h-8 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> <!-- Step 3 --> <div class="text-center"> <div class="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
3
</div> <h3 class="text-lg font-bold text-gray-900 mb-2">Начало работы</h3> <p class="text-sm text-gray-600">Передача документов, настройка процессов</p> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"> <!-- Step 4 --> <div class="bg-white p-6 rounded-lg shadow-md text-center"> <div class="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
4
</div> <h3 class="text-lg font-bold text-gray-900 mb-2">Ежедневная работа</h3> <p class="text-sm text-gray-600">Ведение учета, консультации, поддержка</p> </div> <!-- Step 5 --> <div class="bg-white p-6 rounded-lg shadow-md text-center"> <div class="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
5
</div> <h3 class="text-lg font-bold text-gray-900 mb-2">Результат</h3> <p class="text-sm text-gray-600">Своевременная отчетность, прозрачность</p> </div> </div> </div> </div> </section>`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/ProcessSection.astro", void 0);

const $$BusinessSectors = createComponent(($$result, $$props, $$slots) => {
  const sectors = [
    { name: "\u041E\u043F\u0442\u043E\u0432\u0430\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044F", icon: "\u{1F4E6}" },
    { name: "\u0412\u042D\u0414", icon: "\u{1F30D}" },
    { name: "\u041E\u043A\u0430\u0437\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433", icon: "\u{1F44D}" },
    { name: "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E", icon: "\u2699\uFE0F" },
    { name: "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043E\u0434\u0435\u0436\u0434\u044B", icon: "\u{1F455}" },
    { name: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F", icon: "\u{1F34E}" },
    { name: "\u0413\u0440\u0443\u0437\u043E\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438", icon: "\u{1F69A}" },
    { name: "\u041E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F", icon: "\u{1F465}" },
    { name: "\u0421\u0435\u043B\u044C\u0445\u043E\u0437\u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F", icon: "\u{1F33E}" },
    { name: "\u0424\u0438\u0442\u043D\u0435\u0441-\u0446\u0435\u043D\u0442\u0440\u044B", icon: "\u{1F3AF}" },
    { name: "\u041A\u043E\u0441\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u0430\u043B\u043E\u043D\u044B", icon: "\u{1F484}" },
    { name: "\u0420\u043E\u0437\u043D\u0438\u0447\u043D\u0430\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044F", icon: "\u{1F6D2}" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="business-sectors" class="section-padding bg-gradient-to-br from-primary-50 to-primary-100"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Опыт работы в следующих сферах бизнеса
</h2> </div> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> ${sectors.map((sector) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"> <div class="text-4xl mb-3">${sector.icon}</div> <h3 class="text-lg font-semibold text-gray-900">${sector.name}</h3> </div>`)} </div> </div> </section>`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/BusinessSectors.astro", void 0);

const $$Astro$1 = createAstro("https://ecolofin.by");
const $$PricingCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PricingCard;
  const { name, price, period, features, popular = false, cta } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative bg-white rounded-lg shadow-lg p-8 ${popular ? "border-2 border-primary-600 transform scale-105" : ""}`, "class")}> ${popular && renderTemplate`<div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
ПОПУЛЯРНЫЙ
</div>`} <div class="text-center mb-6"> <h3 class="text-2xl font-bold text-gray-900 mb-2">${name}</h3> <div class="mb-2"> <span class="text-4xl font-bold text-primary-600">${price}</span> ${period && renderTemplate`<span class="text-gray-600 ml-2">${period}</span>`} </div> </div> <ul class="space-y-3 mb-8"> ${features.map((feature) => renderTemplate`<li class="flex items-start space-x-2"> <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700">${feature}</span> </li>`)} </ul> <a href="#contacts"${addAttribute(`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${popular ? "bg-primary-600 text-white hover:bg-primary-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`, "class")}> ${cta} </a> </div>`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/PricingCard.astro", void 0);

const pricingPlans = [
  {
    id: "zero",
    name: "Нулевой",
    price: "от 75р.",
    period: "в месяц",
    features: [
      "Подготовка отчетности",
      "Нет первичных документов",
      "Если деятельность не ведется"
    ],
    cta: "Заказать"
  },
  {
    id: "start",
    name: "Начальный",
    price: "от 200р.",
    period: "ежемесячно",
    features: [
      "До 30 первичных документов",
      "Кадровый учет",
      "Налоговая отчетность",
      "Отчетность в ФСЗН",
      "Отчетность в Белгосстрах"
    ],
    cta: "Заказать"
  },
  {
    id: "standard",
    name: "Стандартный",
    price: "от 350р.",
    period: "в месяц",
    features: [
      "От 30 до 50 первичных документов",
      "Кассовые операции",
      "Кадровый учет",
      "Налоговая отчетность",
      "Отчетность в ФСЗН",
      "Отчетность в Белгосстрах"
    ],
    popular: true,
    cta: "Заказать"
  },
  {
    id: "personal",
    name: "Персональный",
    price: "договорная",
    period: "ежемесячно",
    features: [
      "Более 50 первичных документов",
      "Кадровый учет",
      "Клиент-банк",
      "Учет ВЭД",
      "Несколько видов деятельности",
      "Составление первичных документов"
    ],
    cta: "Рассчитать стоимость"
  }
];

const $$PricingSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="pricing" class="section-padding bg-white"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Пакеты услуг и цены
</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto">
Цены ориентировочные. Для получения подробной информации - ЗВОНИТЕ
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"> ${pricingPlans.map((plan) => renderTemplate`${renderComponent($$result, "PricingCard", $$PricingCard, { "name": plan.name, "price": plan.price, "period": plan.period, "features": plan.features, "popular": plan.popular, "cta": plan.cta })}`)} </div> <!-- Savings Block --> <div class="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8 text-center"> <h3 class="text-2xl font-bold text-gray-900 mb-4">Ваша экономия</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"> <div> <div class="text-3xl font-bold text-primary-600 mb-2">от 4800р.</div> <div class="text-gray-700">В год</div> </div> <div class="text-left md:text-center"> <ul class="space-y-2 text-gray-700"> <li>✓ Нет затрат на штатного бухгалтера</li> <li>✓ Нет затрат на обслуживание рабочего места</li> <li>✓ Не нужны бухгалтерские программы</li> </ul> </div> <div class="flex items-center justify-center"> <a href="#contacts" class="btn-primary">
КОНСУЛЬТАЦИЯ
</a> </div> </div> </div> <!-- CTA Section --> <div class="mt-12 text-center"> <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
ОСТАЛИСЬ ВОПРОСЫ? ПРОСТО ПОЗВОНИТЕ!
</h2> <p class="text-lg text-gray-600 mb-6">
Позвоните нам по телефонам и получите бесплатную консультацию
</p> <div class="space-y-2"> <a href="tel:+375296908945" class="block text-2xl md:text-3xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
8 (029) 690-89-45
</a> <a href="tel:+375173738945" class="block text-2xl md:text-3xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
8 (017) 373-89-45
</a> </div> </div> </div> </section>`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/PricingSection.astro", void 0);

const $$ClientsSection = createComponent(($$result, $$props, $$slots) => {
  const clients = Array.from({ length: 21 }, (_, i) => ({
    id: i + 1,
    src: `/img/client-${i + 1}.webp`,
    alt: `\u041A\u043B\u0438\u0435\u043D\u0442 ${i + 1}`
  }));
  return renderTemplate`${maybeRenderHead()}<section id="clients" class="section-padding bg-white"> <div class="container-custom"> <!-- Header --> <div class="text-center mb-12"> <span class="badge-accent mb-4">Нам доверяют</span> <h2 class="text-gray-900 mb-4">
Наши клиенты
</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto">
25+ компаний доверили нам ведение бухгалтерии. Мы работаем с бизнесом разных масштабов и сфер.
</p> </div> <!-- Logos Grid --> <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4"> ${clients.map((client) => renderTemplate`<div class="group"> <div class="aspect-square bg-gray-50 rounded-xl p-4 flex items-center justify-center border border-gray-100 hover:border-primary-200 hover:shadow-soft transition-all duration-300"> <img${addAttribute(client.src, "src")}${addAttribute(client.alt, "alt")} class="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300" loading="lazy" width="100" height="100"> </div> </div>`)} </div> <!-- Testimonial Quote --> <div class="mt-16 max-w-3xl mx-auto"> <div class="bg-primary-50 rounded-2xl p-8 relative"> <!-- Quote Icon --> <div class="absolute -top-4 left-8"> <div class="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center"> <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"> <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path> </svg> </div> </div> <p class="text-gray-700 text-lg italic mb-4 pl-8">
"Более 3 лет работаем с Экологией Финансов. Всё чётко, в срок, 
          без неприятных сюрпризов. Рекомендуем всем, кто ценит своё время и деньги."
</p> <div class="flex items-center gap-3 pl-8"> <div class="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center"> <span class="text-primary-700 font-semibold">ДК</span> </div> <div> <p class="font-semibold text-gray-900">Дмитрий К.</p> <p class="text-sm text-gray-500">Директор, ООО «Техносервис»</p> </div> </div> </div> </div> </div> </section>`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/ClientsSection.astro", void 0);

const $$TeamSection = createComponent(($$result, $$props, $$slots) => {
  const team = [
    {
      name: "\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440",
      role: "\u0412\u0435\u0434\u0443\u0449\u0438\u0439 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442",
      experience: "15+ \u043B\u0435\u0442 \u043E\u043F\u044B\u0442\u0430",
      image: "/img/team-1.webp"
    },
    {
      name: "\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440",
      role: "\u041D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442",
      experience: "12+ \u043B\u0435\u0442 \u043E\u043F\u044B\u0442\u0430",
      image: "/img/team-2.webp"
    },
    {
      name: "\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440",
      role: "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u043F\u043E \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u0438",
      experience: "10+ \u043B\u0435\u0442 \u043E\u043F\u044B\u0442\u0430",
      image: "/img/team-3.webp"
    },
    {
      name: "\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440",
      role: "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442",
      experience: "8+ \u043B\u0435\u0442 \u043E\u043F\u044B\u0442\u0430",
      image: "/img/team-4.webp"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="team" class="section-padding bg-gray-50"> <div class="container-custom"> <!-- Header --> <div class="text-center mb-12"> <span class="badge-primary mb-4">Наша команда</span> <h2 class="text-gray-900 mb-4">
Профессионалы своего дела
</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto">
За каждым клиентом закреплён личный бухгалтер с опытом работы от 8 до 20 лет. 
        Мы знаем специфику вашего бизнеса.
</p> </div> <!-- Team Grid --> <div class="grid grid-cols-2 md:grid-cols-4 gap-6"> ${team.map((member, index) => renderTemplate`<div${addAttribute(`group animate-on-scroll stagger-${index + 1}`, "class")}> <div class="card overflow-hidden"> <!-- Image --> <div class="aspect-square overflow-hidden bg-gray-100"> <img${addAttribute(member.image, "src")}${addAttribute(member.name, "alt")} class="w-full h-full object-cover img-smooth" loading="lazy" width="300" height="300"> </div> <!-- Info --> <div class="p-4 text-center"> <h3 class="font-semibold text-gray-900 mb-1">${member.name}</h3> <p class="text-sm text-primary-600 mb-1">${member.role}</p> <p class="text-xs text-gray-500">${member.experience}</p> </div> </div> </div>`)} </div> <!-- CTA --> <div class="mt-12 text-center"> <div class="inline-flex items-center gap-4 bg-white p-4 md:p-6 rounded-2xl shadow-soft"> <div class="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center"> <svg class="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> </div> <div class="text-left"> <p class="font-semibold text-gray-900">Личный бухгалтер для вашего бизнеса</p> <p class="text-sm text-gray-500">Знает специфику вашей отрасли и всегда на связи</p> </div> </div> </div> </div> </section>`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/TeamSection.astro", void 0);

const faqItems = [
  {
    question: "Что такое аутсорсинг бухгалтерии компании?",
    answer: "Аутсорсинг бухгалтерии - полная или частичная передача функций Вашей бухгалтерии компании-аутсорсеру. Аутсорсинг позволяет владельцам или управляющим компании больше времени и внимания уделять развитию бизнеса. Аутсорсинг бухгалтерии освободит Вас от отвлечений на организацию работы бухгалтерии, создание и поддержку инфраструктуры (автоматизацию, информационную поддержку, обучение персонала, контроль за его работой и т.д.)"
  },
  {
    question: 'Чем "Экология финансов" лучше собственной бухгалтерии?',
    answer: "1. Вы больше не зависите от здоровья кошки Вашего бухгалтера\n2. Вы не платите ШТРАФЫ за невнимательность или некомпетентность своего бухгалтера\n3. В Нашей бухгалтерии идеальный порядок и не бывает потерянных документов\n4. Вам не нужно больше искать нового крутого бухгалтера и платить ему 1500р. за 40% загрузки в течении месяца\n5. Ваша отчетность готова к сдаче за две недели до крайнего срока\n\nЭто Ваш Бизнес! Занимайтесь Им, а не бухгалтерией!"
  },
  {
    question: "Опишите процесс работы с вами",
    answer: "Контакт с Вашим ответственным лицом может происходить по электронной почте, скайпу, телефону или через визиты. В зависимости от договоренных услуг, мы можем формировать первичные документы или вносить их в базу. По утвержденному регламенту документооборота все бумаги попадают в архив. По мере необходимости Вы получаете информацию о текущем финансовом положении, о текущих и планируемых платежах, дебиторской задолженности. Также по запросу мы формируем акты сверок с Вашими клиентами. В любое время Вы можете получить консультацию или юридическую поддержку."
  },
  {
    question: "Сколько стоит полное бухгалтерское сопровождение?",
    answer: "Стоимость для Вас зависит от условий Вашего бизнеса и перечня необходимых для Вас услуг. На стоимость влияют количество видов деятельности, объем документооборота, режим налогообложения, количество сотрудников и прочие факторы. В любом случае Вы можете рассчитывать на значительную экономию в сравнении с содержанием собственной бухгалтерии."
  },
  {
    question: 'Какие гарантии дает "Экология финансов"?',
    answer: 'Мы гарантируем конфиденциальность, качественное обслуживание, ведение бухгалтерского и налогового учета в соответствии с требованиями законодательства Республики Беларусь. Кроме условий, прописанных в договоре, мы обеспечиваем Вам защиту от наших ошибок - высокие (до $90 тыс.) лимиты по страхованию профессиональной деятельности "Экология финансов"'
  },
  {
    question: "Как гарантируется конфиденциальность?",
    answer: "Мы заключаем соглашение о конфиденциальности. Ваша Конфиденциальная информация не может быть передана третьим лицам, включая налоговые органы. Любое предоставление данных по требованию государственных органов согласовывается с руководством предприятия. Требования по обеспечению конфиденциальности также включены в условия договора."
  },
  {
    question: "Что делать, если возникла ошибка в отчетности?",
    answer: "Мы несем полную ответственность за качество нашей работы. В случае ошибки мы исправим её за свой счет и возместим все возможные штрафы в рамках страхового покрытия (до $90 тыс.)."
  },
  {
    question: "Можно ли работать удаленно?",
    answer: "Да, абсолютно. Мы работаем удаленно с большинством наших клиентов. Документы передаются через электронную почту, облачные сервисы или курьером. Все консультации проводятся по телефону, видеосвязи или при личных встречах по необходимости."
  },
  {
    question: "Какие документы нужны для начала работы?",
    answer: "Для начала работы нам необходимы: учредительные документы компании, свидетельство о регистрации, документы о постановке на учет в налоговых органах, банковские реквизиты, а также документы по текущему состоянию учета (если таковые имеются)."
  },
  {
    question: "Как быстро вы начинаете работу после подписания договора?",
    answer: "Обычно мы начинаем работу в течение 1-2 рабочих дней после подписания договора и передачи необходимых документов. В экстренных случаях можем начать работу в день обращения."
  },
  {
    question: "Что делать, если мне нужна консультация вне рабочего времени?",
    answer: "Мы понимаем, что бизнес не останавливается после 18:00. По предварительной договоренности мы можем предоставить консультации в нерабочее время. Также вы всегда можете отправить вопрос по электронной почте, и мы ответим в ближайшее рабочее время."
  },
  {
    question: "Можно ли перейти на другой тариф в процессе работы?",
    answer: "Да, конечно. Вы можете перейти на другой тариф в любое время. Изменения вступают в силу с начала следующего расчетного периода. Мы поможем выбрать оптимальный тариф в зависимости от изменения объема вашего документооборота."
  }
];

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="faq" class="section-padding bg-white" data-astro-cid-al2ca2vr> <div class="container-custom" data-astro-cid-al2ca2vr> <div class="text-center mb-12" data-astro-cid-al2ca2vr> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-al2ca2vr>
Ответы на популярные вопросы
</h2> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" data-astro-cid-al2ca2vr> <!-- FAQ Accordion --> <div class="space-y-4" data-astro-cid-al2ca2vr> ${faqItems.map((item, index) => renderTemplate`<div class="border border-gray-200 rounded-lg overflow-hidden" data-astro-cid-al2ca2vr> <button class="faq-question w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-between"${addAttribute(index, "data-index")} data-astro-cid-al2ca2vr> <span data-astro-cid-al2ca2vr>${item.question}</span> <svg class="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-al2ca2vr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-al2ca2vr></path> </svg> </button> <div class="faq-answer hidden px-6 pb-4 text-gray-600 whitespace-pre-line" data-astro-cid-al2ca2vr> ${item.answer} </div> </div>`)} </div> <!-- Contact Form --> <div data-astro-cid-al2ca2vr> ${renderComponent($$result, "CTAForm", $$CTAForm, { "title": "\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441", "subtitle": "\u041D\u0435 \u043D\u0430\u0448\u043B\u0438 \u043E\u0442\u0432\u0435\u0442? \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438!", "source": "FAQ \u0441\u0435\u043A\u0446\u0438\u044F", "data-astro-cid-al2ca2vr": true })} </div> </div> </div> </section> ${renderScript($$result, "D:/aibrain/04_projects/ecolofin-by/src/components/FAQ.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/FAQ.astro", void 0);

const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contacts" class="section-padding bg-white"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Контакты
</h2> <p class="text-lg text-gray-600">
Свяжитесь с нами удобным способом
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> <!-- Contact Info --> <div class="space-y-6"> <div> <h3 class="text-xl font-bold text-gray-900 mb-4">Адрес</h3> <p class="text-gray-700">
220104, Минск, ул. Михася Лынькова, дом 19/1, каб. 3-26
</p> </div> <div> <h3 class="text-xl font-bold text-gray-900 mb-4">Телефоны</h3> <div class="space-y-2"> <a href="tel:+375296908945" class="block text-lg text-primary-600 hover:text-primary-700 transition-colors">
8 (029) 690-89-45
</a> <a href="tel:+375173738945" class="block text-lg text-primary-600 hover:text-primary-700 transition-colors">
8 (017) 373-89-45
</a> </div> </div> <div> <h3 class="text-xl font-bold text-gray-900 mb-4">Email</h3> <a href="mailto:info@ecolofin.by" class="text-lg text-primary-600 hover:text-primary-700 transition-colors">
info@ecolofin.by
</a> </div> <div> <h3 class="text-xl font-bold text-gray-900 mb-4">Время работы</h3> <p class="text-gray-700">
Понедельник - Пятница: 8:00 - 18:00
</p> </div> </div> <!-- Map and Form --> <div class="space-y-6"> <!-- Yandex Map --> <div class="h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden"> <div id="map-lazy" class="w-full h-full flex items-center justify-center text-gray-500">
Загрузка карты...
</div> </div> <!-- Contact Form --> ${renderComponent($$result, "CTAForm", $$CTAForm, { "title": "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C", "subtitle": "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443, \u0438 \u043C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438", "source": "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B", "compact": true })} </div> </div> </div> </section> ${renderScript($$result, "D:/aibrain/04_projects/ecolofin-by/src/components/ContactSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/ContactSection.astro", void 0);

const $$Astro = createAstro("https://ecolofin.by");
const $$CTASection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTASection;
  const {
    title,
    subtitle,
    variant = "primary",
    showForm = false,
    bgImage = "/img/call-to-action.webp"
  } = Astro2.props;
  const variantClasses = {
    primary: "bg-gradient-cta text-white",
    secondary: "bg-gray-50 text-gray-900",
    gradient: "bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white",
    image: "text-white"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`section-padding relative overflow-hidden ${variant !== "image" ? variantClasses[variant] : ""}`, "class")}>  ${variant === "image" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="absolute inset-0"> <img${addAttribute(bgImage, "src")} alt="" class="w-full h-full object-cover" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div> </div> ` })}`}  ${variant === "gradient" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div> <div class="absolute bottom-0 left-0 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl"></div> ` })}`}  ${variant === "primary" && renderTemplate`<div class="absolute inset-0 opacity-5" style="background-image: url('/img/header-bg.svg'); background-size: 80px;"></div>`} <div class="container-custom relative z-10"> <div${addAttribute(`text-center max-w-3xl mx-auto ${showForm ? "mb-8" : ""}`, "class")}> <h2${addAttribute(`text-3xl md:text-4xl font-bold mb-4 ${variant === "secondary" ? "text-gray-900" : "text-white"}`, "class")}> ${title} </h2> ${subtitle && renderTemplate`<p${addAttribute(`text-lg mb-8 ${variant === "secondary" ? "text-gray-600" : "text-white/80"}`, "class")}> ${subtitle} </p>`} ${!showForm && renderTemplate`<div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> ${variant === "secondary" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="tel:+375296908945" class="btn-primary text-lg px-8 py-4 flex items-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
8 (029) 690-89-45
</a> <a href="#contacts" class="btn-secondary text-lg px-8 py-4">
Написать нам
</a> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="tel:+375296908945" class="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
8 (029) 690-89-45
</a> <a href="#contacts" class="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
Написать нам
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> ` })}`} </div>`} </div> ${showForm && renderTemplate`<div class="max-w-md mx-auto"> ${renderSlot($$result, $$slots["default"])} </div>`} </div> </section>`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/CTASection.astro", void 0);

const $$StickyCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="sticky-cta" class="fixed bottom-0 left-0 right-0 z-40 md:hidden"> <div class="bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-100 py-3 px-4"> <div class="flex items-center gap-3"> <!-- Call Button --> <a href="tel:+375296908945" class="flex-1 flex items-center justify-center gap-2 bg-accent-500 text-white px-4 py-3.5 rounded-xl font-semibold hover:bg-accent-600 transition-all duration-300 shadow-lg"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
Позвонить
</a> <!-- Message Button --> <a href="#contacts" class="flex-1 flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-3.5 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path> </svg>
Написать
</a> </div> </div> </div> ${renderScript($$result, "D:/aibrain/04_projects/ecolofin-by/src/components/StickyCTA.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/StickyCTA.astro", void 0);

const $$SmoothScroll = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "D:/aibrain/04_projects/ecolofin-by/src/components/SmoothScroll.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/SmoothScroll.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435 | \u0410\u0443\u0442\u0441\u043E\u0440\u0441\u0438\u043D\u0433 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u0438 \u2014 \u042D\u043A\u043E\u043B\u043E\u0433\u0438\u044F \u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432", "description": "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435 \u0438 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438. \u0410\u0443\u0442\u0441\u043E\u0440\u0441\u0438\u043D\u0433 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u0438 \u0441 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0435\u0439 \u0434\u043E 70%. \u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 $90K. \u041E\u043F\u044B\u0442 7+ \u043B\u0435\u0442." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> <!-- Hero Section --> ${renderComponent($$result2, "Hero", $$Hero, {})} <!-- Trust Signals --> ${renderComponent($$result2, "TrustSignals", $$TrustSignals, {})} <!-- Features / Why Us --> ${renderComponent($$result2, "Features", $$Features, {})} <!-- Services Section --> ${renderComponent($$result2, "ServicesSection", $$ServicesSection, {})} <!-- Service Links (SEO pages) --> ${renderComponent($$result2, "ServiceLinksSection", $$ServiceLinksSection, {})} <!-- CTA: Экспресс-аудит --> ${renderComponent($$result2, "CTASection", $$CTASection, { "title": "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u043F\u0440\u0435\u0441\u0441\u2011\u0430\u0443\u0434\u0438\u0442 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u0438", "subtitle": "\u041E\u0446\u0435\u043D\u0438\u043C \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0447\u0435\u0442\u0430 \u0438 \u0434\u0430\u0434\u0438\u043C \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u0437\u0430 24 \u0447\u0430\u0441\u0430", "variant": "gradient", "showForm": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CTAForm", $$CTAForm, { "title": "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u044D\u043A\u0441\u043F\u0440\u0435\u0441\u0441\u2011\u0430\u0443\u0434\u0438\u0442", "source": "\u042D\u043A\u0441\u043F\u0440\u0435\u0441\u0441-\u0430\u0443\u0434\u0438\u0442", "compact": true, "dark": true })} ` })} <!-- How We Work --> ${renderComponent($$result2, "ProcessSection", $$ProcessSection, {})} <!-- Business Sectors --> ${renderComponent($$result2, "BusinessSectors", $$BusinessSectors, {})} <!-- Pricing --> ${renderComponent($$result2, "PricingSection", $$PricingSection, {})} <!-- CTA after Pricing --> ${renderComponent($$result2, "CTASection", $$CTASection, { "title": "\u041D\u0435 \u043D\u0430\u0448\u043B\u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0442\u0430\u0440\u0438\u0444?", "subtitle": "\u041C\u044B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043E\u0434 \u0432\u0430\u0448 \u0431\u0438\u0437\u043D\u0435\u0441", "variant": "secondary" })} <!-- Team Section --> ${renderComponent($$result2, "TeamSection", $$TeamSection, {})} <!-- Clients Logos + Testimonial --> ${renderComponent($$result2, "ClientsSection", $$ClientsSection, {})} <!-- Stats --> ${renderComponent($$result2, "StatsSection", $$StatsSection, {})} <!-- FAQ --> ${renderComponent($$result2, "FAQ", $$FAQ, {})} <!-- CTA with background image --> ${renderComponent($$result2, "CTASection", $$CTASection, { "title": "\u0413\u043E\u0442\u043E\u0432\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442\u044C?", "subtitle": "\u0417\u0432\u043E\u043D\u0438\u0442\u0435 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441 \u0438\u043B\u0438 \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u2014 \u043C\u044B \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 15 \u043C\u0438\u043D\u0443\u0442", "variant": "image", "bgImage": "/img/call-to-action.webp" })} <!-- Contact Section --> ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "StickyCTA", $$StickyCTA, {})} ${renderComponent($$result2, "SmoothScroll", $$SmoothScroll, {})} ` })}`;
}, "D:/aibrain/04_projects/ecolofin-by/src/pages/index.astro", void 0);

const $$file = "D:/aibrain/04_projects/ecolofin-by/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
