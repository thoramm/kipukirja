const KEY = "painEntries";

export const getEntries = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveEntries = (entries) => {
  localStorage.setItem(KEY, JSON.stringify(entries));
};