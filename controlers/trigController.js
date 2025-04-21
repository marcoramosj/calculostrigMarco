function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }
  
  function calcularSeno(valor) {
    return Math.sin(toRadians(valor));
  }
  
  function calcularCoseno(valor) {
    return Math.cos(toRadians(valor));
  }
  
  function calcularTangente(valor) {
    return Math.tan(toRadians(valor));
  }
  
  module.exports = {
    calcularSeno,
    calcularCoseno,
    calcularTangente
  };
  