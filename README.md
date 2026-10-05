# kaspace CRM

Личная CRM студии kaspace: воронка клиентов, история общения, напоминания, сводка.
Сайт работает на GitHub Pages, данные хранятся в Firebase. Открыть и изменить их может только владелец.

## Файлы

| Файл | Зачем |
|---|---|
| `index.html` | сама CRM |
| `firebase-config.js` | настройки подключения к Firebase и email владельца |
| `firestore.rules` | правила доступа к базе (вставляются в консоль Firebase) |
| `manifest.webmanifest`, `sw.js`, `icon*.png`, `icon.svg` | установка на телефон как приложение |

## 1. Firebase (≈10 минут)

1. Откройте https://console.firebase.google.com → **Create a project** → название `kaspace-crm` → Google Analytics можно выключить.
2. **Build → Authentication → Get started → Sign-in method**:
   - **Google** → Enable → выберите свой email поддержки → Save.
   - (необязательно) **Email/Password** → Enable → Save. Затем вкладка **Users → Add user**: ваш email и пароль.
3. **Authentication → Settings → Authorized domains → Add domain** → `yozzi05.github.io`.
4. **Build → Firestore Database → Create database** → регион `eur3 (europe-west)` → **Start in production mode**.
5. **Firestore Database → Rules** → удалите всё и вставьте содержимое `firestore.rules`.
   Замените `ВСТАВЬТЕ_ВАШ_EMAIL` на свой email → **Publish**.
6. Шестерёнка → **Project settings → General → Your apps** → значок `</>` (Web) → имя `kaspace-crm` → Register app.
   Скопируйте блок `firebaseConfig` и вставьте значения в `firebase-config.js`.
   Там же укажите `OWNER_EMAIL` — тот же email, что в правилах.

## 2. GitHub Pages

1. https://github.com/new → Repository name `kaspace-crm` → Public → **Create repository**.
2. Нажмите **uploading an existing file** и перетащите все файлы из этой папки → **Commit changes**.
3. **Settings → Pages → Build and deployment → Source: Deploy from a branch** → Branch `main`, папка `/ (root)` → **Save**.
4. Через 1–2 минуты CRM откроется по адресу: **https://yozzi05.github.io/kaspace-crm/**

## 3. Перенос данных из старой версии

1. В старой CRM (ссылка claude.ai) удалите демо-примеры и нажмите **Резервная копия (JSON)**.
2. В новой CRM войдите и нажмите **Загрузить копию** → выберите скачанный файл.

## 4. На телефон

- **iPhone (Safari):** Поделиться → «На экран Домой».
- **Android (Chrome):** ⋮ → «Установить приложение».

Если на iPhone из иконки на экране не получается войти через Google, используйте вход по email и паролю.

## Безопасность

- Код сайта открыт, но данных в нём нет. Ключи в `firebase-config.js` не секретные — так устроен Firebase.
- Данные защищают правила `firestore.rules`: читать и писать может только вошедший аккаунт с вашим email и только в свою папку `users/<uid>`.
- Регулярно делайте резервную копию (JSON) из меню CRM.

## Обновление CRM

Замените нужные файлы в репозитории (Add file → Upload files). Через минуту обновится на всех устройствах.
