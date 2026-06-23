const IMAGE_KIT = require("@imagekit/nodejs");
const imageKit = new IMAGE_KIT({
  privateKey: process.env.IMAGE_PRIVATE_KEY,
});

async function uploadFile(file) {
  const response = await imageKit.files.upload({
    file,
    fileName:"music_" + Date.now(),
    folder:"my-complete-journey/music"
  });
  return response;
}

module.exports = uploadFile;
