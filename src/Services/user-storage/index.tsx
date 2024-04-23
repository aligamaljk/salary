import { Language } from "../../Types";

const USER_LOCALSTORAGE_KEY = 'user-data';
const TOKEN_LOCALSTORAGE_KEY = 'access-token';
const LANG_LOCALSTORAGE_KEY = 'lang';
const DARKMODE_LOCALSTORAGE_KEY = 'dark-mode';


export function getStoredUser(): string | undefined {
  const storedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  return storedUser ? JSON.parse(storedUser) : undefined;
}

export function setStoredUser(user: string): void {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser(): void {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY);
}

// Helper functions to manage access token in localStorage

export function getStoredToken(): string | undefined {
  const storedToken = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
  return storedToken ? JSON.parse(storedToken) : undefined;
}

export function setStoredToken(token: string): void {
  localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, JSON.stringify(token));
}

export function clearStoredToken(): void {
  localStorage.removeItem(TOKEN_LOCALSTORAGE_KEY);
}

// Helper functions to manage language in localStorage

export function setLang(lang: string): void {
  localStorage.setItem(LANG_LOCALSTORAGE_KEY, JSON.stringify(lang));
}

export function getLang(): Language | undefined {
  const storedLang = localStorage.getItem(LANG_LOCALSTORAGE_KEY);
  return storedLang ? JSON.parse(storedLang) : 'en';
}

// start dark mode

export function getStoredDarkMode(): boolean | undefined {
  const storedDarkMode = localStorage.getItem(DARKMODE_LOCALSTORAGE_KEY);
  return storedDarkMode ? JSON.parse(storedDarkMode) : undefined ;
}

export function setStoredDarkMode(darkMode: boolean): void {
  localStorage.setItem(DARKMODE_LOCALSTORAGE_KEY, JSON.stringify(darkMode));
}

export function clearStoredDarkMode(): void {
  localStorage.removeItem(DARKMODE_LOCALSTORAGE_KEY);
}