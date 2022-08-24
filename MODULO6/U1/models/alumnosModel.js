var pool = require("./db");

async function getAlumnos() {
  var query = "select * from alumnos_db order by id_alumno ASC limit 10 ";
  var rows = await pool.query(query);
  return rows;
}

async function getAlumnosById(id) {
  var query = "select * from alumnos_db where id_alumno = ?";
  var rows = await pool.query(query, [id]);
  return rows[0];
}

async function insertAlumno(obj) {
  try {
    var query = "insert into alumnos_db set ?";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function modificarAlumnoById(obj, id) {
  try {
    var query = "update alumnos_db set ? where id_alumno = ?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function deleteAlumnoById(id) {
  var query = "delete from alumnos_db where id_alumno = ?";
  var rows = await pool.query(query, [id]);
  return rows;
}

module.exports = {
  getAlumnos,
  getAlumnosById,
  insertAlumno,
  deleteAlumnoById,
  modificarAlumnoById,
};
