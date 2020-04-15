const dotenv = require('dotenv')
const {Router} = require('express')
const router = Router()
const passport = require('passport')

dotenv.config()
const baseUrl = process.env.BASE_URL

// Authentication routes
// Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect(baseUrl)
  }
)

// Facebook
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }))

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    // Facebook hash fix
    res.redirect(baseUrl + '/facebook')
  }
)

// Discord
router.get('/discord', passport.authenticate('discord', { scope: ['identify', 'email'] }))

router.get('/discord/callback',
  passport.authenticate('discord', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect(baseUrl)
  }
)

// Get authenticated user
router.get('/user', (req, res) => {
  res.json({
    loggedIn: req.isAuthenticated(),
    user: req.user
  })
})

// Terminate login session
router.get('/logout', (req, res) => {
  req.logout()
  res.json({ message: "User has been logged out." })
})

module.exports = router