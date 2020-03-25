const express = require('express')
const UserModel = require('../Models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/', (req, res) => {
  const {email, password} = req.body

  UserModel.findOne({ email })
  .then(user => {
    if(!user) return res.status(400).json({msg: 'Incorrect email or password'})

    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if(!isMatch) return res.status(400).json({msg: 'Incorrect email or password'})

        
        jwt.sign(
          {id: user._id},
          'secret',
          (err, token) => {
            if(err) throw err
            
            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email
              }
            })
          }
        )


      })
  })

})


module.exports = router