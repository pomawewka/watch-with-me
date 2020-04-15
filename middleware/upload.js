const path = require('path')
const sharp = require('sharp')
const multer = require('multer')
const uniqid  = require('uniqid')

const storage = multer.memoryStorage()

const limits = {
  files: 1,
  fileSize: 10 * 1024 * 1024
}

const imageFilter = (req, file, callback) => {
  if (file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    return callback(null, true)
  }
  callback(null, false)
}

const imageUpload = multer({
  storage: storage,
  limits: limits,
  fileFilter: imageFilter
}
).single('picture')

const mustUploadImage = (req, res, next) => {
  imageUpload(req, res, async err => {
    if (!req.file) return res.status(400).send('Please upload image')
    
    const file = req.file
    const filename = uniqid() + '.jpg'
    const imagePath = path.join(__dirname, '../uploads/pictures', filename)

    await sharp(file.buffer)
      .resize(200, 200)
      .jpeg({ progressive: true })
      .toFile(imagePath)
    
    delete req.file.buffer
    req.file.filename = filename
    next()
  })
}

module.exports = mustUploadImage