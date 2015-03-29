# Name generator as a service

Node.js JSON service which returns a random name! 

Strings derived from the [Docker](https://github.com/docker/docker) project.

### Deploying via Docker

```shell
$ docker build -t ngaas .
$ docker run -d -p 3000:3000 --name ngaas ngaas
```

### Just Node

```shell
$ npm install
$ npm test
$ npm start
```

ngaas will now be accessible via `localhost:3000`
