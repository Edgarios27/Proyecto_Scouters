// import express from 'express';
// import { registerUser, loginUser,UpdateRegister} from '../controllers/UsersController.js';
// import { authenticateUser } from '../authMiddelware/authMiddelware.js';



// const router = express.Router();

// // Ruta para registrar un nuevo usuario (solo accesible para administradores)
// router.post('/register', registerUser, authenticateUser);

// // Ruta para iniciar sesión
// router.post('/login', loginUser);
// router.get('/admin', authenticateUser);
// router.put('/:id', UpdateRegister)

// export default router;



import express from 'express';
import { registerUser, loginUser,  } from '../controllers/UsersController.js';
import { authenticateUser } from '../authMiddelware/authMiddelware.js';
import User from '../models/UsersModel.js';
const router = express.Router();

// Ruta para registrar un nuevo usuario (solo accesible para administradores)
router.post('/register', registerUser, authenticateUser);

// Ruta para iniciar sesión
router.post('/login', loginUser);

// Ruta para confirmar correo electrónico
router.get('/confirm/:token', async (req, res) => {
    try {
      const token = req.params.token;
      const user = await User.findOne({ confirmationToken: token });
  
      if (!user) {
        return res.status(400).json({ message: 'Token de confirmación inválido' });
      }
  
      user.active = 1;
      user.confirmationToken = '';
      await user.save();
  
      return res.status(200).json({ message: 'Correo electrónico confirmado con éxito' });
    } catch (error) {
      console.error('Error al confirmar correo electrónico:', error);
      res.status(500).json({ message: 'Error al confirmar correo electrónico' });
    }
  });

router.get('/admin', authenticateUser);


export default router;