const storage = window.localStorage;

const STORAGE_KEY = "course";

const loadStore = () => JSON.parse(storage.getItem(STORAGE_KEY) || "{}");
const saveStore = store => storage.setItem(STORAGE_KEY, JSON.stringify(store));

export { loadStore, saveStore };
