const calculateBraSize = require('../helpers/calculateBraSize');

const sizeController = {

  async getBraSize (req, res) {
    try {
      const { bustInput, underInput } = req.body;
      
      const bustNum = Number(bustInput);
      const underbustNum = Number(underInput);

      const inputsAreValid = !Number.isNaN(bustNum) || !Number.isNaN(underbustNum);
      if ( !inputsAreValid ) {
        res.status(400).json({ error: 'Los valores deben ser números'});
      };

      const size = calculateBraSize(bustNum, underbustNum);
      if ( !size ) {
        res.status(404).json({ error: 'No se encontró talla para esas medidas'});
      }
      res.json({size});

    } catch (error) {
      res.
      status(500)
      send({message: 'Ocurrió un problema obteniendo la talla de sujetador'})
    }
  }
}

module.exports = sizeController;