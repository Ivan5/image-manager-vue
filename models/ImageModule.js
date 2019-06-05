const moongose = require("mongoose");

const ImageSchema = new moongose.Schema({
  title: String,
  filename: { unique: true, type: String }
});

const ImageModel = new moongose.model("image", ImageSchema);

module.exports = ImageModel;
