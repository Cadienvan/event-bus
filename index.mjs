export default {
  on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  emit(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  off(event, callback) {
    document.removeEventListener(event, callback);
  },
};
