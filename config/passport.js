const dotenv = require('dotenv')
const path = require('path')
const fs = require('fs')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const DiscordStrategy = require('passport-discord').Strategy
const User = require('../models/User')

dotenv.config()
const ENV = process.env.NODE_ENV

const passportConfig = passport => {

  const getUserPic = profile => {
    switch(profile.provider) {
      case 'google':
        return !profile.photos[0].value.includes('AAAAAAAAAAA') ? profile.photos[0].value : '' // Disable google default avatars
        break
      case 'facebook':
        return profile.photos ? `https://graph.facebook.com/${profile.id}/picture?width=240` : ''
        break
      case 'discord':
        return profile.avatar ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.jpg?size=256` : ''
        break
      default:
        return ''
    }
  }

  const userAuth = async (profile, done) => {
    try {
      const { id, provider } = profile
      const name = typeof profile.name === 'undefined' ?  profile.username : profile.name.givenName
      const email = typeof profile.emails === 'undefined' ? profile.email : profile.emails[0].value
      const picture = getUserPic(profile)

      const user = await User.findOne({ 'email': email })
      if (user) {
        if (typeof user[provider + 'Id'] === 'undefined') {
          user[provider + 'Id'] = id
          await user.save()
        }
        return done(null, user)
      }

      const newUser = await new User({
        [provider + 'Id']: id,
        name: name,
        email: email,
        picture: picture
      }).save()

      // Create own folder for upload videos
      const videosFolderPath = path.join(__dirname, '..' , 'uploads', 'videos', email)
      !fs.existsSync(videosFolderPath) && fs.mkdirSync(videosFolderPath, {recursive: true})

      done(null, newUser)

    } catch(error) {
      done(error, false, error.message)
    }
  }

  // Google strategy
  passport.use(
    new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      userAuth(profile, done)
    }
  ))

  // Facebook strategy
  passport.use(
    new FacebookStrategy({
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['name', 'email', 'photos'],
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      userAuth(profile, done)
    }
  ))

  // Discord strategy
  passport.use(
    new DiscordStrategy({
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: '/auth/discord/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      userAuth(profile, done)
    }
  ))

  passport.serializeUser(function(user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user)
    })
  })
}

module.exports = passportConfig