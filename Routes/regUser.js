const express = require('express')
const UserModel = require('../Models/User')
const bcrypt = require('bcryptjs');

const router = express.Router()

router.post('/', (req, res) => {

  UserModel.findOne({name: req.body.name}).then(data => {
    if(data) return res.status(400).json({msg: 'Username already exists.'})

    UserModel.findOne({email: req.body.email}).then(data => {
      if(data) return res.status(400).json({msg: 'Email already exists.'})

      const registerUser = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })

      bcrypt.genSalt(5, (err, salt) => {
        bcrypt.hash(registerUser.password, salt, (err, hash) => {
          if(err) throw err
          registerUser.password = hash
          registerUser.save()
          .then(data => {
            ({_id, name, email} = data)
            res.json({_id, name, email})
          })
        })
      })
    
    })
  })
})

module.exports = router