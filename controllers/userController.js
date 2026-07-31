const User = require("../models/User");
const bcrypt = require("bcryptjs");


const getProfile = async (req, res) => {
  res.status(200).json(req.user)
}

const updateProfile = async (req, res) => {
  try {
    const { name, email, password, dateOfBirth, cnic } = req.body

    const user = await User.findById(req.user._id)

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      })
    }

    if (email && email !== user.email) {
      const emailExists = await User.findOne({ email })

      if (emailExists) {
        return res.status(400).json({
          message: "Email already exists",
        })
      }
    }

    if (cnic && cnic !== user.cnic) {
      const cnicExists = await User.findOne({ cnic })

      if (cnicExists) {
        return res.status(400).json({
          message: "CNIC already exists",
        })
      }
    }

    user.name = name || user.name
    user.email = email || user.email
    user.dateOfBirth = dateOfBirth || user.dateOfBirth
    user.cnic = cnic || user.cnic

    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt)
    }

    const updatedUser = await user.save()

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      dateOfBirth: updatedUser.dateOfBirth,
      cnic: updatedUser.cnic,
      createdAt: updatedUser.createdAt,
      updatedAt: updatedUser.updatedAt,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

const deleteProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      })
    }

    await User.findByIdAndDelete(req.user._id);

    res.status(200).json({
      message: "User deleted successfully",
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

module.exports = {
  getProfile,
  updateProfile,
  deleteProfile,
}