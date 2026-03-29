export default {
  server: {
    proxy: {
      "/": "http://localhost:5000",
    },
  },
};