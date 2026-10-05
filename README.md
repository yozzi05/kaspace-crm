# kaspace CRM

Личная CRM студии kaspace: воронка клиентов, история общения, задачи, сводка.

- **Сайт:** https://yozzi05.github.io/kaspace-crm/
- **Код:** этот репозиторий (GitHub Pages, ветка `main`)
- **Данные:** Firebase, проект `kaspace-crm` (Firestore, регион eur3)

## Вход

Вход только по логину и паролю. Логин `kaspace`.
Внутри Firebase он хранится как `kaspace@kaspace-crm.firebaseapp.com`, но вводить нужно только логин.
Сменить пароль: в CRM → «Сменить пароль».
Если пароль забыт: Firebase Console → Authentication → Users → ⋮ у пользователя → Reset password / Edit.

## Безопасность

- Читать и менять данные может только один аккаунт: правила `firestore.rules` разрешают доступ только по его UID.
- Регистрация новых аккаунтов в Firebase отключена (Authentication → Settings → User actions).
- Ключи в `firebase-config.js` не секретные, так устроен Firebase. Данные защищают правила базы.
- Регулярно делайте резервную копию: «Резервная копия (JSON)» в меню CRM.

## Файлы

| Файл | Зачем |
|---|---|
| `index.html` | сама CRM |
| `firebase-config.js` | подключение к Firebase и UID владельца |
| `firestore.rules` | копия правил базы (действующие правила — в консоли Firebase) |
| `manifest.webmanifest`, `sw.js`, `icon*` | установка на телефон как приложение |

## На телефон

- **iPhone (Safari):** Поделиться → «На экран Домой».
- **Android (Chrome):** ⋮ → «Установить приложение».
