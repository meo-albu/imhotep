const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const UserModel = require('../Models/User')

router.get('/', auth, (req, res) => {
  UserModel.findOne(req.headers.token).then(user => {
    res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    })
  })
})


module.exports = router