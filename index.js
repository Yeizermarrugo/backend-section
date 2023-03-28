const container = require("./src/starup/container");
const server = container.resolve("app");
const { MONGO_URL } = container.resolve("config");
const mongoose = require("mongoose");

mongoose
  .connect(MONGO_URL, {useNewUrlParser: true})
  .then(() => server.start())
  .catch(console.log);