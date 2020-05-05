# Watch with me
Service that allows you to watch movies, series and just videos together and online

## Stack
MERN stack & styled components

## Features
- [x] OAuth authentication with Google, Facebook, Discord ([passport](https://github.com/jaredhanson/passport))
- [x] Themes
- [x] Profile settings
- [ ] File manager
- [ ] Upload files through torrent ([webtorrent](https://github.com/webtorrent/webtorrent))
- [ ] Public and private rooms
- [ ] Synchronizing media player (websockets)

## Getting started
Install dependencies for root and client folder
```
npm install
npm run client:install
```

Rename `.env.sample` to `.env` and fill with your credentials

To run app in development mode
```
npm run dev
```

To run in production mode
```
npm run client:build
npm run start
```

## Contributing
As I use this for my own projects, I know this might not be the perfect approach for all the projects out there. If you have any ideas, just [open an issue](https://github.com/pomawewka/watch-with-me/issues/new) and tell me what you think.

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.
