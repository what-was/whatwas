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

// Formatting updated date function
export const formatDate = (dateInput) => {
  // Getting date from fetched db.
  const date = new Date(dateInput);

  // Difference between now and note date
  const diff = (new Date() - date) / 1000;

  if (diff < 60) {
    // Seconds
    const v = Math.round(diff);
    return v + ' second' + (v === 1 ? '' : 's') + ' ago';
  } else if (diff < 60 * 60) {
    // Minutes
    const v = Math.round(diff / 60);
    return v + ' minute' + (v === 1 ? '' : 's') + ' ago';
  } else if (diff < 60 * 60 * 24) {
    // Hours
    const v = Math.round(diff / (60 * 60));
    return v + ' hour' + (v === 1 ? '' : 's') + ' ago';
  } else if (diff < 60 * 60 * 24 * 30.436875) {
    // Days
    const v = Math.round(diff / (60 * 60 * 24));
    return v + ' day' + (v === 1 ? '' : 's') + ' ago';
  }

  // Day
  let dd = date.getDate();

  // Month
  let mm = date.getMonth() + 1;

  // Year
  const yyyy = date.getFullYear();

  // Visualisation matters
  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }

  return `${mm}/${dd}/${yyyy}`;
};

export const formatDateDay = (dateInput) => {
  // Getting date from fetched db.
  const date = new Date(dateInput);

  // Difference between now and note date
  const diff = (new Date() - date) / 1000;
  // Day
  let dd = date.getDate();

  // Month
  let mm = date.getMonth() + 1;

  // Year
  const yyyy = date.getFullYear();

  // Visualisation matters
  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }

  return `${mm}/${dd}/${yyyy}`;
};
