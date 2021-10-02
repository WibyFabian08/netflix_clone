const User = require("../models/User");
const CryptoJS = require("crypto-js");
const fs = require("fs");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select(
      "_id username email profilePict isAdmin"
    );

    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id }).select(
      "_id username email profilePict isAdmin"
    );

    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.params.id });

    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin || user.isAdmin;

    if (req.file) {
      if (user.profilePict !== "") {
        const path = `public/${user.profilePict}`;
        fs.unlink(path, (err) => console.log(err));
      }
      user.profilePict = `/images/${req.file.filename}`;
    }

    if (req.body.password) {
      user.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.CRYPTO_SECRET
      ).toString();
    }

    await user.save();

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });

    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    const path = `public/${user.profilePict}`;
    fs.unlink(path, (err) => console.log(err));

    await User.deleteOne({ _id: user._id });

    return res.status(200).json({
      message: "Delete Success",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};
