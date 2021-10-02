const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const data = req.body;

    const checkUser = await User.findOne({ email: req.body.email });

    if (checkUser) {
      return res.status(500).json({
        message: "Email Already Use",
      });
    }

    data.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTO_SECRET
    ).toString();

    if(req.file) {
      data.profilePict = `/images/${req.file.filename}`;
    }

    const user = await User.create(data);

    return res.status(200).json({
      user,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    const bytes = CryptoJS.AES.decrypt(
      user.password,
      process.env.CRYPTO_SECRET
    );
    const password = bytes.toString(CryptoJS.enc.Utf8);

    if (password !== req.body.password) {
      return res.status(500).json({
        message: "Wrong Password",
      });
    }

    const token = jwt.sign({ userData: user }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      user,
      token,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};
