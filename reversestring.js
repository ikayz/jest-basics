const revereString = str =>
  str
    .wsplit("")
    .reverse()
    .join("");
module.exports = revereString;
