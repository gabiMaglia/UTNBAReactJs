var pool = require("./db");

async function getHorarios() {
  var query = "select * from horarios_db order by horarios_dbcol ASC";
  var rows = await pool.query(query);
  return rows;
}
async function getHorarioById(id) {
  var query = "select * from horarios_db where id_horario = ?";
  var rows = await pool.query(query, [id]);
  return rows[0];
}
async function insertHorario(obj) {
  try {
    var query = "insert into horarios_db set ?";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function modificarHorarioById(obj, id) {
  try {
    var query = "update horarios_db set ? where id_horario = ?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}
async function deleteHorarioById(id) {
  var query = "delete from horarios_db where id_horario = ?";
  var rows = await pool.query(query, [id]);
  return rows;
}

module.exports = {
  getHorarios,
  getHorarioById,
  insertHorario,
  deleteHorarioById,
  modificarHorarioById,
};
