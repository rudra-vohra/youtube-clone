export const timeSince = (date) => {
  const second = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);

  let interval = second / 31536000;

  if (interval > 1) {
    return Math.floor(interval) === 1
      ? Math.floor(interval) + ' year'
      : Math.floor(interval) + ' years';
  }

  interval = second / 2592000;

  if (interval > 1) {
    return Math.floor(interval) === 1
      ? Math.floor(interval) + ' month'
      : Math.floor(interval) + ' months';
  }

  interval = second / 86400;

  if (interval > 1) {
    return Math.floor(interval) === 1
      ? Math.floor(interval) + ' day'
      : Math.floor(interval) + ' days';
  }

  interval = second / 3600;

  if (interval > 1) {
    return Math.floor(interval) === 1
      ? Math.floor(interval) + ' hour'
      : Math.floor(interval) + ' hours';
  }

  interval = second / 60;

  if (interval > 1) {
    return Math.floor(interval) === 1
      ? Math.floor(interval) + ' minute'
      : Math.floor(interval) + ' minutes';
  }

  return Math.floor(second) + ' seconds';
};
