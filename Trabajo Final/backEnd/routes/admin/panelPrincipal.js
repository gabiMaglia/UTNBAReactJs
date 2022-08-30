const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("admin/panelPrincipal", {
    layout: "admin/layout",
    usuario: req.session.nombre
  });
});

module.exports = router;
