const { Router } = require("express");
const route = Router();
const {
    getData,
    postData,
    getDataByNim,
    putData,
    deletByNim
} = require("../controllers/mahasiswa.js");

route.get("/get", getData);

route.get("/:nim", getDataByNim);

route.post("/add", postData);

route.put("/update/:nim", putData);

route.delete("/delete/:nim", deletByNim);

module.exports = route;
