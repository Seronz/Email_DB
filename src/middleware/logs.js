const logs = (req, res, next) => {
  console.log("Terjadi request ke api saat ini");
  next();
};

module.exports = { logs };
