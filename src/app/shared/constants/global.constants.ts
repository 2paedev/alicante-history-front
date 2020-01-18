export const GLOBAL = {
  TEST: 0,
};

export const READ_MODE = {
  DAY: 'day',
  NIGHT: 'night',
  BIG: 'big',
  NORMAL: 'normal',
};

export const STORAGE_KEY = {
  READ_MODE: {
    COLOR: 'read-mode-color',
    SIZE: 'read-mode-size',
  },
  MAIL: {
    IS_SENDED: 'is-mail-sended',
  },
  MY_LIST: 'my-list',
  MY_LIKED_LIST: 'my-liked-list',
};

export const ADD_MOBS = {
  BANNER: {
    id: 'ca-app-pub-3822477186581976/3726960974',
    isTesting: false,
    autoShow: true,
  },
  BANNER_TEST: {
    id: 'ca-app-pub-3940256099942544/6300978111',
    isTesting: true,
    autoShow: true,
  },
  INTERSTITIAL: {
    id: 'ca-app-pub-3822477186581976/5277762086',
    isTesting: false,
    autoShow: true,
  },
  INTERSTITIAL_TEST: {
    id: 'ca-app-pub-3940256099942544/1033173712',
    isTesting: true,
    autoShow: true,
  },
};

export const ERRORS = {
  MESSAGES: {
    ALL_ARTICLES: 'ERROR al obtener los artículos',
    ONE_ARTICLE: 'ERROR al obtener el artículo',
    IMAGE: 'ERROR al obtener la imagen',
    UPDATE: 'ERROR al actualizar',
    AD_MOBS: 'ERROR en AdMobs',
  },
};

export const INFO_POPOVER = {
  CONTACT:
    'Todos los artículos tienen su parte de ficción, aunque hay un estudio detrás de cada uno de ellos e intentamos acercarnos a los hechos reales lo máximo posible. Envía un correo a la dirección mostrada con sugerencias sobre la aplicación o sobre los artículos. Gracias por leernos.',
  EMAIL:
    'Introduce la dirección de un correo electrónico donde quiere que le enviemos información sobre nuevos artículos, actualizaciones y mucho más.',
  READ_MODE:
    'Puedes elegir entre un fondo más oscuro o más claro, así como el tamaño de letra.',
  PRIVACY_POLICY:
    'Tiene a su disposición la politica de privacidad de la aplicación, pero cabe recordar que Historia de Alicante no hace uso de ningún tipo de dato referente al usuario final de la aplicación.',
};
