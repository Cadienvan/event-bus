export default {
  on(event, callback) {
    this.addEventListener(event, (e) => callback(e.detail));
  },
  emit(event, data) {
    this.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  off(event, callback) {
    this.removeEventListener(event, callback);
  },
};
