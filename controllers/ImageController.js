const fs = require("fs");
const path = require("path");
const formidable = require("formidable");
const ImageModule = require("../models/ImageModule");
const ObjectId = require("mongoose").Types.ObjectId;

let directory = path.join(__dirname, "../public/images");

module.exports = {
  uploadImage: (req, res) => {
    let form = new formidable.IncomingForm();

    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }

    form.uploadDir = directory;

    form.parse(req, (err, fields, files) => {
      if (err) throw err;

      let ImageObject = new ImageModule({
        title: fields.title,
        filename: fields.image.name
      });

      fs.rename(
        files.image.path,
        path.join(directory, files.image.name),
        err => {
          if (err) throw err;

          ImageObject.save((err, image) => {
            if (err) throw err;

            console.log(image);
            res.setHeader("Content-Type", "application/json");
            res.status(200).send(image);
          });
        }
      );
    });
  }
};
