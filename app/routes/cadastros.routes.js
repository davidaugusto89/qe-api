module.exports = app => {
  const cadastros = require("../controllers/cadastros.controller.js");

  var router = require("express").Router();

  router.post("/", cadastros.create);
  router.get("/", cadastros.findAll);
  router.get("/:id", cadastros.findOne);
  router.put("/:id", cadastros.update);
  router.delete("/:id", cadastros.delete);

  app.use('/api/cadastros', router);
};