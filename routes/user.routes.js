const {Router} = require('express')
const router = Router()
const path = require('path')
const fs = require('fs')
const User = require('../models/User')
const requireAuth = require('../middleware/auth')
const mustUploadImage = require('../middleware/upload')

router.post('/update', requireAuth, async (req, res) => {
  try {
    const {email} = req.user
    const {update} = req.body
    await User.findOneAndUpdate({ email: email }, update)
    res.status(201).send('User updated')
  } catch (error) {
    res.status(500).send(error)
  }
})

router.post('/picture', [requireAuth, mustUploadImage], async (req, res) => {
  try {
    const folderPath = '/pictures/'
    const {email} = req.user
    const user = await User.findOne({ 'email': email })

    // Remove old picture
    const oldPicturePath = path.join(__dirname, '..', 'uploads', user.picture)
    fs.existsSync(oldPicturePath) && fs.unlinkSync(oldPicturePath)

    const newPicturePath = folderPath + req.file.filename
    user.picture = newPicturePath
    await user.save()
    res.status(201).send('User picture updated')
  } catch(error) {
    res.status(500).send(error)
  }
})

module.exports = router