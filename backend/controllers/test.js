const CryptoJS = require("crypto-js");
const slug = require('../utilities/slug');

exports.test = (req, res) => {
  const text = slug(req.body.text);

  // const files = req.files;

  // enkripsi
  const password = CryptoJS.AES.encrypt(text, 'secret').toString();

  // dekripsi
  const bytes = CryptoJS.AES.decrypt(password, 'secret');
  const decrypt = bytes.toString(CryptoJS.enc.Utf8);

  const isTrue = req.body.password === decrypt

  res.status(200).json({
    text,
    password,
    decrypt,
    isTrue,
    // files
  });
};
