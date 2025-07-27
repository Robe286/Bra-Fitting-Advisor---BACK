
// Se implementará a futuro

const User = require('../models/User');

const productControllers = {
  
  async getFavorites (req, res) {
    try {
      const user = await User.findById(req.user.id).populate('favorites');
      res.json(user.favorites);

    } catch (error) {
      res
      .status(500)
      .json({message: 'Error al obtener favoritos'})
    }
  },

  async addFavorite (req, res) {
    try {
      const user = await User.findById(req.user._id);
      const { productId } = req.params;
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      
      if (!user.favorites.includes(productId)) {
        user.favorites.push(productId);
        await user.save();
      }
      const favoritesPopulated = await user.populate('favorites');
      res.json(favoritesPopulated.favorites);
      
    } catch (error) {
      res
      .status(500)
      .json({message: 'Error al guardar favorito'});
    }
  }
}

module.exports = productControllers;