const MOVIES_URL = "https://api.nomoreparties.co";

const MAIN_URL = "https://movies-explorer.api.nomoreparties.sbs";

const HEADERS = {
  "Content-Type": "application/json",
};

const SHORTS_DURATION = 40;

const DEVICE_PARAMS = {
  desktop: {
    width: 1280,
    cards: {
      init: 12,
      more: 3,
    },
  },
  tablet: {
    width: 1024,
    cards: {
      init: 8,
      more: 2,
    },
  },
  mobile: {
    width: 768,
    cards: {
      init: 5,
      more: 2,
    },
  },
};

export { MOVIES_URL, MAIN_URL, HEADERS, SHORTS_DURATION, DEVICE_PARAMS };
