# Name generator as a service

A little endpoint which returns strings such as `nostalgic-torvalds` for those throwaway (or maybe permanent) resources you need to name.

Strings derived from the [Docker](https://github.com/docker/docker) project.

Hosted version: [http://ngaas.api.jacobclark.xyz](https://ngaas.api.jacobclark.xyz) (Heroku free-tier - may take a few moments to respond).

### Just Node

```shell
$ npm install
$ npm test
$ npm start
```

### Deploying via Docker

```shell
$ docker build -t ngaas .
$ docker run -d -p 3000:3000 --name ngaas ngaas
```
