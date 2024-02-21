# Platformatic Composer - Fastify Static Issue

## Running the example

First build the frontend app of the `service`
```
$ cd service
$ npm install
$ npm run build
```

Ensure that the app works as expected running `npm start` and then visiting `http://0.0.0.0:3042`

You should see a `Hello Foobar` text with a random image (Styled with bulma)

Then run the composer in another terminal window

```
$ cd composer
$ npm install
$ npm start
```

Then visit `http://0.0.0.0.3043/app` that should forward the request to the underlying `service` app.

You should see a blank page. In the Dev Console also you see that `http://0.0.0.0.3043/assets/index-xyz.js` returns a 404.