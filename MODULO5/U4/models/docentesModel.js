var pool = require('./db')

async function getDocentes() {
    var query = 'select * from docentes_db order by id_docente ASC limit 3 ';
    var rows = await pool.query(query)
    return rows
}

async function getDocenteById(id){
    var query = 'select * from docentes_db where id_docente = ?';
    var rows = await pool.query(query, [id]);
    return rows[0]
}

async function insertDocente (obj) {
    try{
    var query = 'insert into docentes_db set ?'
    var rows = await pool.query(query, [obj])
    return rows

    } catch (error) {
        console.log(error)
        throw error
    }

}

async function modificarDocenteById (obj, id) {
    try{
        var query = 'update docentes_db set ? where id_docente = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows
    }catch (error){
        throw error
    }
}

async function deleteDocenteById (id) {
    var query = "delete from docentes_db where id_docente = ?"
    var rows = await pool.query (query, [id]);
    return rows
}


module.exports = {getDocentes, insertDocente, deleteDocenteById, modificarDocenteById, getDocenteById}