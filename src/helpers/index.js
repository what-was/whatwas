// Generates Random ID
export const generatePushId = (() => {
  const PUSH_CHARS =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const ID_LENGTH = 12;

  return function () {
    let id = '';
    for (let i = 0; i < ID_LENGTH; i++) {
      id += PUSH_CHARS.charAt(Math.floor(Math.random() * PUSH_CHARS.length));
    }
    return id;
  };
})();
