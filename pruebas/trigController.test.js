const {
    calcularSeno,
    calcularCoseno,
    calcularTangente
  } = require('../controllers/trigController');
  
  describe('Pruebas trigonométricas', () => {
    test('calcularSeno(30) debe dar aproximadamente 0.5', () => {
      expect(calcularSeno(30)).toBeCloseTo(0.5, 2);
    });
  
    test('calcularCoseno(60) debe dar aproximadamente 0.5', () => {
      expect(calcularCoseno(60)).toBeCloseTo(0.5, 2);
    });
  
    test('calcularTangente(45) debe dar aproximadamente 1', () => {
      expect(calcularTangente(45)).toBeCloseTo(1, 2);
    });
  
    test('calcularSeno(0) debe dar 0', () => {
      expect(calcularSeno(0)).toBeCloseTo(0, 2);
    });
  
    test('calcularCoseno(0) debe dar 1', () => {
      expect(calcularCoseno(0)).toBeCloseTo(1, 2);
    });
  });
  