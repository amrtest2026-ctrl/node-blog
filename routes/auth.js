const express = require("express");
const router = express.Router();
const validate = require("../middlewares/vaidate");
const { signupSchema, loginSchema } = require("../utilts/validarion/auth");
const { signup,login } = require("../controllers/auth");


router.post('/signup',validate(signupSchema),signup)
router.post('/login',validate(loginSchema),login)


module.exports=router