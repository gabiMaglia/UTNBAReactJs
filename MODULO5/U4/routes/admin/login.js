var express = require("express");
var userModel = require("../../models/usserModel");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("admin/login", {
    layout: "admin/layout",
  });
});

router.post("/", async (req, res, next) => {
  try {
    var user = req.body.usuario;
    var password = req.body.password;

    var data = await userModel.getUserByUsernameAndPassword(user, password);

    if (data != undefined) {
      req.session.id.usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect("/admin/panelPrincipal");
    } else {
      res.render("admin/login", {
        layout: "admin/layout",
        error: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get ('/logout' , function (req, res, next) {
  req.session.destroy();
  res.render ("admin/login", {
    layout: "admin/layout"
  });
});


module.exports = router;