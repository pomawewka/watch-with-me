const path = require('path'),
      fs = require('fs'),
      dotenv = require('dotenv'),
      express = require('express'),
      passport = require('passport'),
      mongoose = require('mongoose'),
      session = require('cookie-session'),
      authRoutes = require('./routes/auth.routes'),
      userRoutes = require('./routes/user.routes')

dotenv.config()

const app = express()

// Passport middleware
app.use(session({
  name: 'session',
  keys: [process.env.SESSION_SECRET],
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000
  }
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(express.json({ extended: true }))

require('./config/passport')(passport)

// Routes
app.use('/auth', authRoutes)
app.use('/user', userRoutes)

// Initial upload folders
!fs.existsSync('./uploads/pictures') && fs.mkdirSync('./uploads/pictures', {recursive: true})
app.use('/pictures', express.static(path.join(__dirname, 'uploads', 'pictures')))


if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGO_URI,
    {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(error => console.log(error))

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))