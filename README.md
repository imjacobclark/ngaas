# Name generator as a service

A little endpoint which returns strings such as `nostalgic-torvalds` for those throwaway (or maybe permanent) resources you need to name.

Strings derived from the [Docker](https://github.com/docker/docker) project.

Hosted version: [http://ngaas.api.jacobclark.xyz](https://ngaas.api.jacobclark.xyz) (Heroku free-tier - may take a few moments to respond).

### Just Node

```shell
$ git clone git@github.com:imjacobclark/ngaas.git && cd ngaas
$ npm install
$ npm test
$ npm start
```

### Docker

```shell
$ git clone git@github.com:imjacobclark/ngaas.git && cd ngaas
$ docker build -t ngaas .
$ docker run -d -p 3000:3000 --name ngaas ngaas
```

### Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### AWS SAM

Ensure you have `aws-cli` installed and configured.

```shell
$ git clone git@github.com:imjacobclark/ngaas.git && cd ngaas
$ cd sam
$ ./deploy
```