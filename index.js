const express = require('express');
const { getSeno, getCoseno, getTangente } = require('./handlers/trigHandler');

const app = express();
const PORT = 3000;

app.get('/seno/:id', getSeno);
app.get('/coseno/:id', getCoseno);
app.get('/tangente/:id', getTangente);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
