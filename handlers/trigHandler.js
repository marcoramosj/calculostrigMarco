const db = require('../db');
const {
  calcularSeno,
  calcularCoseno,
  calcularTangente
} = require('../controllers/trigController');

function getSeno(req, res) {
  const id = parseInt(req.params.id);
  const dato = db.find(d => d.id === id);
  if (!dato) return res.status(404).json({ error: 'Dato no encontrado' });

  const resultado = calcularSeno(dato.valor);
  res.json({ id: dato.id, valor: dato.valor, seno: resultado });
}

function getCoseno(req, res) {
  const id = parseInt(req.params.id);
  const dato = db.find(d => d.id === id);
  if (!dato) return res.status(404).json({ error: 'Dato no encontrado' });

  const resultado = calcularCoseno(dato.valor);
  res.json({ id: dato.id, valor: dato.valor, coseno: resultado });
}

function getTangente(req, res) {
  const id = parseInt(req.params.id);
  const dato = db.find(d => d.id === id);
  if (!dato) return res.status(404).json({ error: 'Dato no encontrado' });

  const resultado = calcularTangente(dato.valor);
  res.json({ id: dato.id, valor: dato.valor, tangente: resultado });
}

module.exports = {
  getSeno,
  getCoseno,
  getTangente
};
