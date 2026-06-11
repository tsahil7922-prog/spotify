const IMAGE_KIT = require("@imagekit/nodejs");
const imageKit = new IMAGE_KIT({
  privateKey: process.env.IMAGE_PRIVATE_KEY,
});

async function uploadFile(buffer, fileName) {
  const response = await imageKit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg",
  });
  return response;
}

module.exports = uploadFile;
