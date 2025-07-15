const calculateBraSize = require('../helpers/calculateBraSize');

const sizeController = {

  async getBraSize (req, res) {
    try {
      const { bustInput, underInput } = req.body;
      
      const bustNum = Number(bustInput);
      const underbustNum = Number(underInput);

      const inputsAreValid = !Number.isNaN(bustNum) || !Number.isNaN(underbustNum);
      if ( !inputsAreValid ) {
        res.status(400).json({ error: 'The values must be numbers'});
      };

      const size = calculateBraSize(bustNum, underbustNum);
      if ( !size ) {
        res.status(404).json({ error: 'No se encontró talla para esas medidas'});
      }
      res.json(size);

    } catch (error) {
      res.
      status(500)
      send({message: 'There was a problem getting de bra size'})
    }
  }
}

module.exports = sizeController;