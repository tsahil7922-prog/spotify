const IMAGE_KIT = require("@imagekit/nodejs");
const imageKit = new IMAGE_KIT({
privateKey: "private_PSzWZdPMQ+nprQ1SCKj4sd3nZwg="
})

async function uploadFile(buffer, fileName) {
const response = await imageKit.client.upload({buffer, fileName:"image.jpg"})
}

module.exports = {uploadFile}