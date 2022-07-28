var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require ('express-session')
require('dotenv').config();
var pool = require ('./models/db')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//el use de session siempre antes de las rutas
app.use (session ({
  secret: 'dkjklsajhdkjsahd',
  resave: false,
  saveUninitialized: true
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/admin/login', loginRouter);


pool.query('select Usuario from usuarios_db where Id_socio = 1').then(function (resultados) {
  var res = resultados //la query devuelve un array 
  console.log(res)
})


 
  
app.get ('/admin/login', function (req,res) {
  var conocido = Boolean(req.session.nombre);

  res.render('admin/login', {
    layout:'admin/layout',
    title: 'Pueba de variables de session Express.js',
    conocido : conocido,
    nombre: req.session.nombre
  });
});

app.get('/salir', function (req, res) {
  req.session.destroy();
  res.redirect('/admin/login'); 
});

app.post ('/ingresar', function (req, res) {
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre
  }
  res.redirect('/admin/login')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
