# ecolofin.by - Современный сайт на Astro

Модернизированный сайт компании "Экология Финансов" на базе Astro с оптимизацией для производительности, SEO и конверсии.

## Технологии

- **Astro** - статическая генерация сайта
- **TypeScript** - типобезопасность
- **Tailwind CSS** - utility-first CSS фреймворк
- **Telegram Bot API** - отправка форм в Telegram

## Установка и запуск

### Требования

- Node.js 18+ 
- npm или yarn

### Установка зависимостей

```bash
npm install
```

### Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
PUBLIC_SITE_URL=https://ecolofin.by
```

Для получения токена Telegram бота:
1. Найдите @BotFather в Telegram
2. Отправьте команду `/newbot`
3. Следуйте инструкциям
4. Скопируйте полученный токен в `.env`

Для получения Chat ID:
1. Найдите @userinfobot в Telegram
2. Отправьте любое сообщение
3. Скопируйте ваш Chat ID в `.env`

### Разработка

```bash
npm run dev
```

Сайт будет доступен по адресу `http://localhost:4321`

### Сборка

```bash
npm run build
```

Собранные файлы будут в папке `dist/`

### Предпросмотр собранного сайта

```bash
npm run preview
```

## Структура проекта

```
ecolofin-by/
├── src/
│   ├── components/     # Компоненты Astro
│   ├── layouts/        # Layout компоненты
│   ├── pages/          # Страницы (file-based routing)
│   │   └── api/        # API endpoints
│   ├── content/        # Данные контента (TypeScript)
│   ├── styles/         # Глобальные стили
│   └── utils/          # Утилиты
├── public/             # Статические файлы
│   ├── img/            # Изображения
│   ├── robots.txt      # SEO
│   └── sitemap.xml     # SEO
└── .env                # Переменные окружения (не в git)
```

## Деплой

### Статический хостинг

После сборки (`npm run build`) загрузите содержимое папки `dist/` на ваш хостинг.

### Поддержка API endpoints

Для работы форм обратной связи через Telegram API, хостинг должен поддерживать:
- Node.js runtime (для API endpoints)
- Или используйте serverless функции (Vercel, Netlify)

Если хостинг не поддерживает API endpoints, можно использовать:
- Внешний сервис (Formspree, EmailJS)
- Или настроить serverless функцию отдельно

## Особенности

- ✅ Mobile-first дизайн
- ✅ Оптимизация производительности (lazy loading, code splitting)
- ✅ SEO оптимизация (мета-теги, Schema.org, sitemap)
- ✅ Множественные CTA для конверсии
- ✅ Интеграция с Telegram Bot API
- ✅ Адаптивный дизайн для всех устройств

## Команды

- `npm run dev` - запуск dev сервера
- `npm run build` - сборка для продакшена
- `npm run preview` - предпросмотр собранного сайта
- `npm run astro` - запуск Astro CLI

## Лицензия

Частное предприятие "Экология финансов"
