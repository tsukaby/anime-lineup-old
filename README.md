anime-lineup
============

日本のアニメのラインナップを紹介するWebアプリケーション

## Environment

see [generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)

* MongoDB
* Express
* AngularJS
* Node.js
* Twitter Bootstrap
* Passport (Currently, not used.)

## Development settings

1. Install and setup.(MongoDB, Node.js + NPM, Grunt, Bower)
2. `git clone https://github.com/tsukaby/anime-lineup.git`
3. `cd anime-lineup`
4. `npm install`
5. `bower install`
6. Optional (if running test) `grunt`

## Deployment

Create production code.

```bash
grunt build
```

Create production code and deploy to AWS Server.

```bash
grunt deploy
```

## Run
### Development mode

```bash
grunt serve
```

### Production mode in development environment

```bash
grunt serve:dist
```

### Production mode

In production server (e.g. AWS).

```bash
cd /var/www/apps/anime-lineup
npm install
NODE_ENV=production node server.js
```
