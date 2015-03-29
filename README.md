# Name generator as a service

A little endpoint which returns strings such as `nostalgic_torvalds` for those throwaway (or maybe permanent) resources you need to name.

Strings derived from the [Docker](https://github.com/docker/docker) project.

Hosted version: [https://ngaas.api.jacobclark.xyz](https://ngaas.api.jacobclark.xyz).

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
