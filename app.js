const Express = require("express");
const MhsRoute = require("./routes/mahasiswa.js");
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use("/mhs", MhsRoute);

module.exports = app;