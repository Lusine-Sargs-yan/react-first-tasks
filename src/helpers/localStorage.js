export const saveState = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    alert("Please, activate local storage!");
  }
};

export const loadState = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    alert("Please, activate local storage!");
  }
};