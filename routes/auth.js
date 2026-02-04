const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');


//Create a User using: POST "/api/auth" does't require auth

router.post('/', [
  body('email', 'Enter A valid Email').isEmail(),
  body('name', 'Enter A valid Name').isLength({ min: 3 }),
  body('password', 'Password must Be Atleast 6 Character').isLength({ min: 6 }),
  body('mobileNo', 'Enter A valid MobileNo').isLength({ min: 10 })
], async (req, res) => {
  const { name, email, password, mobileNo } = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }else{
      const user = await User.create({ name, email, password, mobileNo})
    res.status(200).json({ success: true, user: user })
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Internal Server Error",error: 'Please Enter Unique Value For Email & mobileNo' });
  }

});

module.exports = router;
