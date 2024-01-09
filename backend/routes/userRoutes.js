import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updatedUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js';
import { protect, admin } from '../middlerware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);

router.post('/logout', logoutUser);
router.post('/login', authUser);

// userRoutes.js

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updatedUserProfile);

router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
