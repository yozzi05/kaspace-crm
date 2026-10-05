// Настройки подключения к Firebase.
// Скопируйте сюда блок firebaseConfig из консоли Firebase:
// Project settings → General → Your apps → Web app → SDK setup and configuration → Config.
// Эти ключи не секретные: данные защищают правила из файла firestore.rules.

export const firebaseConfig = {
  apiKey: "ВСТАВЬТЕ_apiKey",
  authDomain: "ВСТАВЬТЕ.firebaseapp.com",
  projectId: "ВСТАВЬТЕ",
  storageBucket: "ВСТАВЬТЕ.appspot.com",
  messagingSenderId: "ВСТАВЬТЕ",
  appId: "ВСТАВЬТЕ"
};

// Email владельца: только этот аккаунт сможет открыть CRM.
// Такой же email нужно указать в правилах firestore.rules.
export const OWNER_EMAIL = "ВСТАВЬТЕ_ВАШ_EMAIL";
