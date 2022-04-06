'use strict';
const fs = require('fs');
const stream = require('stream');
const {promisify} = require('util');
const tempWrite = require('temp-write');
const path = require('path');
const pipeline = promisify(stream.pipeline);
const {Transform} = stream;

function hasBOM(text) {
  return (text.toString().charCodeAt(0) === 0xFEFF);
}

function prependBOM(text) {
  return '\uFEFF' + text;
}

function stripBOM(text) {
  return text.toString().slice(1);
}

module.exports = async (filename, data) => {
  let bomFound = false;
  let bomPlaced = false;

  const checkStripBomTransformer = new Transform({
    transform(chunk, _, callback) {
      let fileData = chunk;

      if (!bomFound) {
        bomFound = hasBOM(fileData);
        fileData = hasBOM(fileData) ? stripBOM(fileData) : fileData;
      }

      callback(false, Buffer.from(fileData));
    }
  });

  const checkPrependBomTransformer = new Transform({
    transform(chunk, _, callback) {
      let fileData = chunk.toString();

      if (bomFound && !bomPlaced) {
        fileData = prependBOM(fileData);
        bomPlaced = true;
      }

      callback(false, Buffer.from(fileData));
    }
  });

  filename = path.resolve(filename);
  const temporaryFile = await tempWrite(data);

  try {
    await pipeline(fs.createReadStream(filename), checkStripBomTransformer, fs.createWriteStream(temporaryFile, {flags: 'a'}));
  } catch (error) {
    if (error.code === 'ENOENT' && error.path === filename) {
      await fs.promises.writeFile(filename, data);
      return;
    }

    throw error;
  }

  await pipeline(fs.createReadStream(temporaryFile), checkPrependBomTransformer, fs.createWriteStream(filename));
  await fs.promises.unlink(temporaryFile);
};

module.exports.sync = (filename, data) => {
  let fileData;
  try {
    fileData = fs.readFileSync(filename);
  } catch (error) {
    if (error.code === 'ENOENT') {
      fs.writeFileSync(filename, data);
      return;
    }

    throw error;
  }

  data = hasBOM(fileData) ? prependBOM(data) : data;
  fileData = hasBOM(fileData) ? stripBOM(fileData) : fileData;

  fs.writeFileSync(filename, Buffer.concat([Buffer.from(data), Buffer.from(fileData)]));
};
