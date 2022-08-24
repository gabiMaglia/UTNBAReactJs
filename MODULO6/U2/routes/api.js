const expreess = require("express");
const router = expreess.Router();
const docentesModel = require("./../models/docentesModel");
const cloudinary = require("cloudinary").v2;



router.get("/docentes", async function (req, res, next) {
  
    let docentes = await docentesModel.getDocentes();

    docentes = docentes.map((docentes) => {
        if (docentes.foto) {
        const foto = cloudinary.url(docentes.foto, {
            width: 280,
            height: 600,
            crop: "fill",
        });
        return {
            ...docentes,
            foto,
        };
        } else {
        return {
            ...docentes,
            foto: "",
        };
        }
    });

  res.json(docentes);
});

module.exports = router;
