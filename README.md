# VALORA — GitHub Pages + external JSON

Сайт остаётся на GitHub Pages. Изменяемые данные можно хранить отдельно в публичном JSON. При открытии страницы сайт запрашивает свежий JSON с `cache: no-store` и timestamp-параметром. Поэтому изменение JSON не требует нового GitHub Pages deploy.

## Структура
```text
VALORA/
├── index.html
├── config.js
├── data.example.json
└── assets/
```

## Подключение
1. Размести `data.example.json` (или его копию) в бесплатном публичном JSON-хранилище.
2. Убедись, что URL работает по HTTPS и разрешает CORS для сайта.
3. Открой `config.js`.
4. Вставь URL в `DATA_URL`.

Пример:
```js
const DATA_URL = "https://example.com/valora.json";
```

После этого реквизиты, сумма, Telegram, QR и тексты будут браться из внешнего JSON. GitHub Pages при изменении JSON заново публиковать не нужно.

Важно: всё, что отдаётся браузеру, публично. Не помещай в JSON пароли, API-ключи, токены или приватные данные.
