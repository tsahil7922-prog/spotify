const IMAGE_KIT = require("@imagekit/nodejs");
const imageKit = new IMAGE_KIT({
  privateKey: "private_PSzWZdPMQ+nprQ1SCKj4sd3nZwg=",
});

async function uploadFile(buffer, fileName) {
  const response = await imageKit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg",
  });
  return response;
}

module.exports = uploadFile;
