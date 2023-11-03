const notFound = (req, res) =>
  res.status(404).send({ message: "API tidak ditemukan." });

module.exports = notFound;
