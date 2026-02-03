/* empty css                                  */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cvcs5Eve.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_DREmePbj.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 | \u042D\u043A\u043E\u043B\u043E\u0433\u0438\u044F \u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432", "description": "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u042D\u043A\u043E\u043B\u043E\u0433\u0438\u044F \u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432", "noindex": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="pt-16 md:pt-20 section-padding"> <div class="container-custom max-w-4xl"> <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
Политика конфиденциальности
</h1> <div class="prose prose-lg max-w-none"> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Общие положения</h2> <p class="text-gray-700 mb-4">
Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей веб-сайта ecolofin.by (далее — «Сайт»), принадлежащего Частному предприятию «Экология финансов» (далее — «Компания»).
</p> <p class="text-gray-700">
Используя Сайт, вы соглашаетесь с условиями настоящей Политики конфиденциальности.
</p> </section> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Собираемые данные</h2> <p class="text-gray-700 mb-4">
При заполнении форм на Сайте мы можем собирать следующую информацию:
</p> <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4"> <li>Имя и название компании</li> <li>Номер телефона</li> <li>Адрес электронной почты</li> <li>Текст сообщения или вопроса</li> </ul> </section> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Использование данных</h2> <p class="text-gray-700 mb-4">
Собранные данные используются исключительно для:
</p> <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4"> <li>Связи с вами по вопросам предоставления услуг</li> <li>Ответа на ваши запросы и вопросы</li> <li>Улучшения качества обслуживания</li> </ul> <p class="text-gray-700">
Мы не передаем ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством Республики Беларусь.
</p> </section> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Защита данных</h2> <p class="text-gray-700">
Мы принимаем необходимые меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
</p> </section> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Контакты</h2> <p class="text-gray-700 mb-4">
По всем вопросам, связанным с обработкой персональных данных, вы можете обращаться:
</p> <p class="text-gray-700"> <strong>Частное предприятие «Экология финансов»</strong><br>
УНП 191099473<br>
Адрес: 220104, Минск, ул. Михася Лынькова, дом 19/1, каб. 3-26<br>
Телефон: 8 (029) 690-89-45, 8 (017) 373-89-45<br>
Email: info@ecolofin.by
</p> </section> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Изменения в Политике</h2> <p class="text-gray-700">
Компания оставляет за собой право вносить изменения в настоящую Политику конфиденциальности. Актуальная версия всегда доступна на данной странице.
</p> </section> </div> <div class="mt-8"> <a href="/" class="btn-primary inline-block">
Вернуться на главную
</a> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/aibrain/04_projects/ecolofin-by/src/pages/privacy.astro", void 0);

const $$file = "D:/aibrain/04_projects/ecolofin-by/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
