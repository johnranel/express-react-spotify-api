const express = require('express')
const router = express.Router()

const { getLogin, getCallback, getRefreshToken } = require("../controllers/indexController")

router.get('/login', getLogin)
router.get('/callback', getCallback)
router.get('/refresh_token', getRefreshToken)

module.exports = router;