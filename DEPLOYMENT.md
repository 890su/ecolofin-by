# Деплой ecolofin.by на Vercel

## Быстрый старт

### 1. Создайте аккаунт на Vercel
Перейдите на [vercel.com](https://vercel.com) и войдите через GitHub, GitLab или email.

### 2. Импортируйте проект

**Вариант A: Через Git репозиторий**
1. Загрузите проект на GitHub/GitLab
2. В Vercel нажмите "Add New Project"
3. Выберите репозиторий
4. Vercel автоматически определит Astro

**Вариант B: Через Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel
```

### 3. Настройте переменные окружения

В панели Vercel: **Settings → Environment Variables**

Добавьте:
| Переменная | Значение |
|------------|----------|
| `TELEGRAM_BOT_TOKEN` | `8503860004:AAHjB6l5VJ2D9NP8oGd8gGuczSNmH5QP9u8` |
| `TELEGRAM_CHAT_ID` | `-5240163266` |
| `PUBLIC_SITE_URL` | `https://ecolofin.by` |

### 4. Привяжите домен

1. В Vercel: **Settings → Domains**
2. Добавьте `ecolofin.by` и `www.ecolofin.by`
3. В DNS вашего домена добавьте записи:
   - `A` запись: `76.76.19.19` (Vercel IP)
   - `CNAME` для `www`: `cname.vercel-dns.com`

### 5. Готово!

После каждого push в репозиторий Vercel автоматически пересоберёт сайт.

---

## Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка
npm run build

# Предпросмотр сборки
npm run preview
```

---

## Структура проекта

```
ecolofin-by/
├── src/
│   ├── components/     # Astro компоненты
│   ├── content/        # Данные (услуги, цены, FAQ)
│   ├── layouts/        # Базовый layout
│   ├── pages/          # Страницы и API routes
│   ├── styles/         # Глобальные стили
│   └── utils/          # Утилиты (Telegram)
├── public/             # Статические файлы
├── .env                # Переменные окружения (не коммитить!)
├── astro.config.mjs    # Конфигурация Astro
└── vercel.json         # Конфигурация Vercel
```

---

## Telegram бот

Бот уже создан и настроен:
- Username: @ecolofin_bot
- Группа: ecolofin.by

Для создания нового бота:
1. Напишите @BotFather в Telegram
2. Команда `/newbot`
3. Получите токен
4. Добавьте бота в группу
5. Получите Chat ID у @userinfobot

---

## Troubleshooting

### Формы не работают
1. Проверьте переменные окружения в Vercel
2. Проверьте логи в Vercel: **Deployments → Function Logs**

### 404 ошибки
1. Проверьте, что все страницы экспортируются
2. Очистите кэш: **Deployments → Redeploy**

### Изображения не загружаются
1. Проверьте путь (должен начинаться с `/img/`)
2. Проверьте, что файл есть в `public/img/`
