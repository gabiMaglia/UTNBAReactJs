const expreess = require("express");
const router = expreess.Router();
const docentesModel = require("./../models/docentesModel");
const cloudinary = require("cloudinary").v2;
const nodemailer = require('nodemailer');

router.get("/docentes", async function (req, res, next) {
  let docentes = await docentesModel.getDocentes();

  docentes = docentes.map((docentes) => {
    if (docentes.foto) {
      const foto = cloudinary.url(docentes.foto, {
        width: 220,
        height: 320,
        crop: "fill",
      });
      return {
        ...docentes,
        foto,
      };
    } else {
      return {
        ...docentes,
           foto: "https://res.cloudinary.com/atlasair/image/upload/v1661037957/craneo_black_igfvsz.png",
      };
    }
  });
  
  res.json(docentes);
});



module.exports = router;
