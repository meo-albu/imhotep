const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  const token = req.header('auth-token')

  if(!token) return res.status(401).json({msg: 'Unauthorized!'})

  try {
    const decoded = jwt.decode(token, 'secret')

    req.user = decoded
    next()
  } catch {
    res.status(400).json({msg: 'Invalid token'})
  }
}

module.exports = auth