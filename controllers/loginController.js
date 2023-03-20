const asyncHandler = require("express-async-handler");
const userDetails = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  userLogin: asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("All fields required ..!!");
    }
    const user = await userDetails.findOne({ email });
    //@comparing entered password with hashedPassword
    //@Generate a JWT accessToken
    //@after accessToken is expired, user will not be able to call the API for login
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user:{
            username: user.username,
            email: user.email,
            id: user.id
          }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );
      res.status(200).json({ accessToken });
    } else {
      res.status(401);
      throw new Error("Email or Password not Valid");
    }
  }),

  userSignup: asyncHandler(async (req, res) => {
    //const details = await userDetails.find();
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("All fields are required..!!");
    }

    const userAvailable = await userDetails.findOne({ email });
    if (userAvailable) {
      res.status(400);
      throw new Error("User already Registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userDetails.create({
      username,
      email,
      password: hashedPassword,
    });

    //after successfull user creation i want to pass the details back to the user
    if (user) {
      res.status(201).json({ _id: user.id, email: user.email });
    } else {
      res.status(400);
      throw new Error("Details Not Valid");
    }

    res.status(200).json(user);
  }),

  userfInfo: asyncHandler(async (req, res) => {
    res.status(200).send("current user info..");
  }),
};
