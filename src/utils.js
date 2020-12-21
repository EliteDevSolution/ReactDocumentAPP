import history from "history.js";

export const scrollToPageTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const getRatingText = (rating) => {
  if (rating < 2) return "Disappointing";
  else if (rating < 3) return "Room for Improvement";
  else if (rating < 4) return "Good";
  else if (rating < 4.7) return "Excellent";
  else if (rating < 5.01) return "Above and Beyond";
  return "";
};

export const scrollToElement = async (id) => {
  scrollTo(window, id);
};

export const redirectTo = (pathname = "/") => {
  history.push(pathname);
};

export const ecryptString = (id) => {
  let idChars = id
    .split("")
    .map((a) => String.fromCharCode(a * 1 + 69))
    .join("");

  return btoa(btoa(idChars));
};

export const decryptString = (encodedId) => {
  return new Promise((resolve, reject) => {
    try {
      let decode1 = atob(encodedId);
      let decode2 = atob(decode1);
      let adviserId = decode2
        .split("")
        .map((c) => c.codePointAt(0) - 69)
        .join("");

      resolve(adviserId);
    } catch (error) {
      reject(error);
    }
  });
};

export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

function currentYPosition() {
  if (!window) {
    return;
  }
  // Firefox, Chrome, Opera, Safari
  if (window.pageYOffset) return window.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

function elmYPosition(elm) {
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent !== document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}

export function scrollTo(scrollableElement, elmID) {
  var elm = document.getElementById(elmID);
  if (!elmID || !elm) {
    return;
  }
  var startY = currentYPosition();
  var stopY = elmYPosition(elm);
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    scrollTo(0, stopY);
    return;
  }
  var speed = Math.round(distance / 50);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
    for (var i = startY; i < stopY; i += step) {
      setTimeout(
        (function (leapY) {
          return () => {
            scrollableElement.scrollTo(0, leapY);
          };
        })(leapY),
        timer * speed
      );
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    return;
  }
  for (let i = startY; i > stopY; i -= step) {
    setTimeout(
      (function (leapY) {
        return () => {
          scrollableElement.scrollTo(0, leapY);
        };
      })(leapY),
      timer * speed
    );
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
  return false;
}
