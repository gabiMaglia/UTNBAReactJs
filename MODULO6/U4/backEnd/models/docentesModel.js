var pool = require("./db");

async function getDocentes() {
  const query = "select * from docentes_db order by id_docente ASC";
  const rows = await pool.query(query);
  return rows;
}

async function getDocenteById(id) {
  const query = "select * from docentes_db where id_docente = ?";
  const rows = await pool.query(query, [id]);
  return rows[0];
}

async function insertDocente(obj) {
  try {
    const query = "insert into docentes_db set ?";
    const rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function modificarDocenteById(obj, id) {
  try {
    const query = "update docentes_db set ? where id_docente = ?";
    const rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function deleteDocenteById(id) {
  const query = "delete from docentes_db where id_docente = ?";
  const rows = await pool.query(query, [id]);
  return rows;
}

module.exports = {
  getDocentes,
  insertDocente,
  deleteDocenteById,
  modificarDocenteById,
  getDocenteById,
};
