var express = require("express");
var router = express.Router();
var docentesModel = require("../../../models/docentesModel");

router.get("/", async function (req, res, next) {
  var docentes = await docentesModel.getDocentes();
  res.render("admin/components/docentes", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    docentes,
  });
});

router.get("/agregar", (req, res, next) => {
  var docente = true;
  res.render("admin/components/agregar", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    docente,
  });
});

router.get("/modificar/:id_docente", async (req, res, next) => {
  let id = req.params.id_docente;
  let docenteData = await docentesModel.getDocenteById(id);
  let docente = true;
  res.render("admin/components/modificar", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    docente,
    docenteData,
  });
});

router.get("/perfilPersonal/:id_docente", async (req, res, next) => {
  let id = req.params.id_docente;
  let docenteData = await docentesModel.getDocenteById(id);
  let docente = true;
  console.log(docenteData);
  res.render("admin/components/perfilPersonal", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    docenteData,
    docente,
  });
});

router.get("/eliminar/:id_docente", async (req, res, next) => {
  var id = req.params.id_docente;
  await docentesModel.deleteDocenteById(id);
  res.redirect("/admin/docentes");
});

router.post("/agregar", async (req, res, next) => {
  var docente = true;
  try {
    if (req.body.nombre != "" && req.body.dni != "") {
      await docentesModel.insertDocente(req.body);
      console.log(req.body);
      res.redirect("/admin/docentes");
    } else {
      res.render("admin/components/agregar", {
        layout: "admin/layout",
        usuario: req.session.nombre,
        docente,
        error: true,
        message: "Completa todos los campos obligatorios",
      });
    }
  } catch (error) {
    console.log(error);
    res.render("admin/components/agregar", {
      layout: "admin/layout",
      usuario: req.session.nombre,
      docente,
      error: true,
      message: "No se pudo cargar el registro",
    });
  }
});

router.post("/modificar", async (req, res, next) => {
  let docente = true;
  try {
    let obj = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      dni: req.body.dni,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      email: req.body.email,
      instagramAdd: req.body.instagramAdd,
      facebookAdd: req.body.facebookAdd,

      horario: req.body.horario,

      modificado_por: req.body.modificado_por,
    };

    await docentesModel.modificarDocenteById(obj, req.body.id_docente);
    res.redirect("/admin/docentes");
  } catch (error) {
    console.log(error);

    res.render("admin/components/modificar", {
      layout: "admin/layout",
      usuario: req.session.nombre,
      docenteData,
      docente,
      error: true,
      message: "No se pudo modificar el registro",
    });
  }
});

module.exports = router;
