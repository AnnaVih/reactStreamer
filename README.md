# Streamer 

Simple React/Redux app for creating/updating/showing/deleting streams. User can login via Google auth and use the basic CRUD operations to navigate across the application.

### Install locally

There are two ways for having the app on a local server

## Zip archive

You can dowload the latest version directly on [GitHub](https://github.com/AnnaVih/reactStreamer/archive/master.zip).

## Easy updates with git

If you plan on updating regularly, you can use git :
```bash
git clone https://github.com/AnnaVih/reactStreamer.git
```
Then to update :
```bash
cd reactStreamer-master
git pull
```

### Install the dependencies

```sh
$ npm install
```
Install dependency

### Serve
You need to run locally both client and server projects.

```bash
cd client
$ npm start
```
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```bash
cd api
$ npm start
```
Runs the app in the development mode.<br>
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### Build

```sh
$ npm run build
```
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Contributors

Anna Vihrogonova annavihrogonova@yahoo.com

### License

MIT