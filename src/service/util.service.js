export const utilService = {
  makeId,
  getRandomInt,
  debounce,
  saveToStorage,
};

function makeId(length = 5) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function debounce(func, wait = 500) {
  let timeout;

  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value) || null);
}

export const timeToShow = (time) => {
  let min = Math.round(Math.floor(time / 60));
  if (min.toString().length < 2) min = `0${min}`;
  let sec = Math.round(time - Math.floor(time / 60) * 60);
  if (sec.toString().length < 2) sec = `0${sec}`;
  return isNaN(min) || isNaN(sec) ? '00:00' : `${min}:${sec}`;
};
