export function debounce(callback, limit = 300) {
  let timeout;
  return (...args) => {
    // console.log(args);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}
