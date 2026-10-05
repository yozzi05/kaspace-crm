// Настройки подключения к Firebase (проект kaspace-crm).
// Эти ключи не секретные: данные защищают правила из файла firestore.rules.

export const firebaseConfig = {
  apiKey: "AIzaSyBlRMFknYacwkTv25CfIpnxwtsYkliRBGc",
  authDomain: "kaspace-crm.firebaseapp.com",
  projectId: "kaspace-crm",
  storageBucket: "kaspace-crm.firebasestorage.app",
  messagingSenderId: "577985936390",
  appId: "1:577985936390:web:934c79f4005daa34a75787"
};

// Email владельца: только этот аккаунт сможет открыть CRM.
// Такой же email указан в правилах firestore.rules.
export const OWNER_EMAIL = "cyber.yozzi@gmail.com";
