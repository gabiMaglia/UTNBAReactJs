var express = require("express");
var router = express.Router();
var alumnosModel = require("../../../models/alumnosModel");
var horariosModel = require("../../../models/horariosModel");

router.get("/", async (req, res, next) => {
  var alumnos = await alumnosModel.getAlumnos();
  res.render("admin/components/alumnos", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    alumnos,
  });
});

router.get("/agregar", async (req, res, next) => {
  var horarios = await horariosModel.getHorarios();
  var arrayHorarios = [];
  var alumno = true;
  for (const horario in horarios) {
    arrayHorarios.push(
      horarios[horario].dias_dbcol + horarios[horario].horarios_dbcol
    );
  }

  res.render("admin/components/agregar", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    alumno,
    arrayHorarios,
  });
});

router.get("/modificar/:id_alumno", async (req, res, next) => {
  let id = req.params.id_alumno;
  let alumnoData = await alumnosModel.getAlumnosById(id);
  let alumno = true;

  var horarios = await horariosModel.getHorarios();
  var arrayHorarios = [];

  for (const horario in horarios) {
    arrayHorarios.push(
      horarios[horario].dias_dbcol + "/" + horarios[horario].horarios_dbcol
    );
  }

  res.render("admin/components/modificar", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    alumno,
    alumnoData,
    arrayHorarios,
  });
});

router.get("/eliminar/:id_alumno", async (req, res, next) => {
  var id = req.params.id_alumno;
  await alumnosModel.deleteAlumnoById(id);
  res.redirect("/admin/alumnos");
});

router.get("/perfilPersonal/:id_alumno", async (req, res, next) => {
  let id = req.params.id_alumno;
  let alumnoData = await alumnosModel.getAlumnosById(id);
  let alumno = true;

  res.render("admin/components/perfilPersonal", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    alumnoData,
    alumno,
  });
});

router.post("/agregar", async (req, res, next) => {
  let alumno = true;
  try {
    if (
      req.body.nombre != "" &&
      req.body.fecha_inscripcion != "" &&
      req.body.dni != ""
    ) {
      await alumnosModel.insertAlumno(req.body);
      res.redirect("/admin/alumnos");
    } else {
      res.render("admin/components/agregar", {
        layout: "admin/layout",
        usuario: req.session.nombre,
        alumno,
        error: true,
        message: "Completa todos los campos obligatorios",
      });
    }
  } catch (error) {
    console.log(error);
    res.render("admin/components/agregar", {
      layout: "admin/layout",
      usuario: req.session.nombre,
      alumno,
      error: true,
      message: "No se pudo cargar el registro",
    });
  }
});

router.post("/modificar", async (req, res, next) => {
  let alumno = true;

  try {
    let obj = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      dni: req.body.dni,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      email: req.body.email,
      fecha_inscripcion: req.body.fecha_inscripcion,
      horario: req.body.horario,
      observaciones: req.body.observaciones,
      modificado_por: req.body.modificado_por,
    };
    console.log(obj);
    await alumnosModel.modificarAlumnoById(obj, req.body.alumno_id);
    res.redirect("/admin/alumnos");
  } catch (error) {
    console.log(error);

    res.render("admin/components/modificar", {
      layout: "admin/layout",
      usuario: req.session.nombre,
      alumno,
      error: true,
      message: "No se pudo modificar el registro",
    });
  }
});

module.exports = router;
