const axios = require('axios');

export const Async = {
  /* GET */
  get(url, arg, callback) {
    let res;
    axios
      .get(url, {
        params: arg
      })
      .then(response => {
        les = response.data;
      })
      .catch(error => {
        les = error;
      });
    callback(res);
  },
  create() {
    /* POST */
  },
  update() {
    /* PATCH */
  },
  delete() {
    /* DELETE */
  }
};
