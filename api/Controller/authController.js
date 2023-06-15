const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");

// const signToken = (id) => {
//     return jwt.sign({id : id}, process.env.JWT_SECRET, {expiresIn : process.env.JWT_EXPIRES_IN})
// }

exports.singUp = async (req, res) => {
  try {
    // const salt = await bcrypt.genSalt(12);
    // const hashedPassword = await bcrypt.hash(req.body.password,salt)
    const newUser = new User({
      username: req.body.username,
      emailid: req.body.emailid,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });
    const user = await newUser.save();
    // const { passwordConfirm, ...userdata} = user._doc

    // console.log(userdata)
    res.status(201).json({
      status: "success",
      data: {
        user: user,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

exports.Login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user &&
      res.status(404).json({ status: "fail", message: "username not found" });
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    !isMatch &&
      res.status(404).json({ status: "fail", message: "password not found" });

    // const token = signToken(user.id)
    // console.log(user,token)
    const { password, ...others } = user._doc;
    res.status(200).json({
      status: "success",

      data: {
        others,
      },
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
