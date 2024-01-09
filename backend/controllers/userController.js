import asyncHandler from '../middlerware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

//@desc Auth User & get token
//@route POST /api/users/login
//@access public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPasword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    //cookie set kiya h
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

//@desc Register user
//@route POST /api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});

//@desc Logout user /clear cookie
//@route POST /api/users/logout
//@access Private

const logoutUser = asyncHandler(async (req, res) => {
  res.send('logout users');
});

//@desc Get user profile
//@route GET /api/users/profile
//@access private

const getUserProfile = asyncHandler(async (req, res) => {
  res.send('users profile');
});

//@desc update user profile
//@route PUT /api/users/profile
//@access private

const updatedUserProfile = asyncHandler(async (req, res) => {
  res.send('update user profile');
});

//@desc Get users
//@route GET /api/users
//@access private Admin

const getUsers = asyncHandler(async (req, res) => {
  res.send('get Users');
});

//@desc Get user by ID
//@route GET /api/users/:id
//@access private Admin

const getUserById = asyncHandler(async (req, res) => {
  res.send('get User by id');
});

//@desc DELETE user
//@route  DELETE /api/users/:id
//@access private/admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete profile');
});

//@desc UPDATE user
//@route  PUT /api/users/:id
//@access private/admin
const updateUser = asyncHandler(async (req, res) => {
  res.send('Update user');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updatedUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
