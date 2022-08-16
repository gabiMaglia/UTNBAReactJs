var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var session = require("express-session");
require("dotenv").config();
// var pool = require ('./models/db')

var secured = async (req, res, next) => {
  try {
    if (req.session.id_usuario) {
      next();
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/admin/login");
var panelPrincipalRouter = require("./routes/admin/panelPrincipal");
var panelAlumnosRouter = require("./routes/admin/components/panelAlumnos");
var panelDocentesRouter = require("./routes/admin/components/panelDocentes");
var panelHorariosRouter = require("./routes/admin/components/panelHorarios");
var panelRutinasRouter = require("./routes/admin/components/panelRutinas");
var perfilPersonalRouter = require("./routes/admin/components/perfilPersonal");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//el use de session siempre antes de las rutas
app.use(
  session({
    secret: "dadjalkklsd",
    cookie: { maxAge: null },
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin/login", loginRouter);
app.use("/admin/panelPrincipal", secured, panelPrincipalRouter);
app.use("/admin/alumnos", secured, panelAlumnosRouter);
app.use("/admin/docentes", secured, panelDocentesRouter);
app.use("/admin/horarios", secured, panelHorariosRouter);
app.use("/admin/rutinas", secured, panelRutinasRouter);
app.use("/admin/alumnos/perfilPersonal", secured, perfilPersonalRouter);

// pool.query('SELECT * FROM CRANEO_DB.db_usuarios;').then(function (resultados) {
//   var res = resultados //la query devuelve un array
//   console.log(res)
// })

app.get("/admin/login", function (req, res) {
  var conocido = Boolean(req.session.nombre);

  res.render("admin/login", {
    layout: "admin/layout",
    title: "Panel de administracion",
    conocido: conocido,
    nombre: req.session.nombre,
  });
});
app.post("/ingresar", function (req, res) {
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre;
  }
  res.redirect("/admin/login");
});

app.get("/salir", function (req, res) {
  req.session.destroy();
  res.redirect("/admin/login");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
