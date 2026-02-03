import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, n as renderScript } from './astro/server_Cvcs5Eve.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://ecolofin.by");
const $$CTAForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTAForm;
  const {
    title = "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E",
    subtitle = "\u041D\u0430\u0448 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0412\u0430\u043C\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 15 \u043C\u0438\u043D\u0443\u0442",
    source = "\u0424\u043E\u0440\u043C\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438",
    compact = false,
    dark = false
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`rounded-2xl p-6 md:p-8 ${dark ? "bg-gray-900 text-white" : "bg-white shadow-card"}`, "class")}> ${title && renderTemplate`<h3${addAttribute(`font-bold mb-2 ${compact ? "text-lg" : "text-2xl"} ${dark ? "text-white" : "text-gray-900"}`, "class")}> ${title} </h3>`} ${subtitle && !compact && renderTemplate`<p${addAttribute(`mb-6 text-sm ${dark ? "text-gray-300" : "text-gray-500"}`, "class")}> ${subtitle} </p>`} <form class="space-y-4"${addAttribute(`cta-form-${Math.random().toString(36).substr(2, 9)}`, "id")}${addAttribute(source, "data-source")}> <div> <input type="text" name="name" placeholder="Ваше имя или компания" required${addAttribute(`input ${dark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : ""}`, "class")}> </div> <div> <input type="tel" name="phone" placeholder="Телефон для связи" required${addAttribute(`input ${dark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : ""}`, "class")}> </div> ${!compact && renderTemplate`<div> <input type="email" name="email" placeholder="Email (необязательно)"${addAttribute(`input ${dark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : ""}`, "class")}> </div>`} <button type="submit" class="w-full btn-primary py-4 text-lg relative overflow-hidden group"> <span class="relative z-10">Получить консультацию</span> <span class="absolute inset-0 bg-white/20 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span> </button> <p${addAttribute(`text-xs text-center ${dark ? "text-gray-400" : "text-gray-500"}`, "class")}>
Нажимая кнопку, вы соглашаетесь с${" "} <a href="/privacy"${addAttribute(`underline hover:no-underline ${dark ? "text-gray-300" : "text-primary-600"}`, "class")}>
политикой конфиденциальности
</a> </p> <div id="form-message" class="hidden mt-4 p-4 rounded-xl text-center"></div> </form> <!-- Trust Badges --> ${!compact && renderTemplate`<div${addAttribute(`mt-6 pt-6 border-t ${dark ? "border-gray-700" : "border-gray-100"}`, "class")}> <div class="flex items-center justify-center gap-6 text-xs"> <div class="flex items-center gap-2"> <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> <span${addAttribute(dark ? "text-gray-400" : "text-gray-500", "class")}>Конфиденциально</span> </div> <div class="flex items-center gap-2"> <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span${addAttribute(dark ? "text-gray-400" : "text-gray-500", "class")}>Ответим за 15 мин</span> </div> </div> </div>`} </div> ${renderScript($$result, "D:/aibrain/04_projects/ecolofin-by/src/components/CTAForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/aibrain/04_projects/ecolofin-by/src/components/CTAForm.astro", void 0);

export { $$CTAForm as $ };
