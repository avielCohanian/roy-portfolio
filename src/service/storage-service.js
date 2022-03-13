'use strict';

function loadFromStorage(key) {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function clearFromStorage(key) {
  localStorage.removeItem(key);
}
