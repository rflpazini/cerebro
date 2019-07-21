# Cerebro

[![Build Status](https://travis-ci.org/rflpazini/cerebro.svg?branch=master)](https://travis-ci.org/rflpazini/cerebro) [![codecov](https://codecov.io/gh/rflpazini/cerebro/branch/master/graph/badge.svg)](https://codecov.io/gh/rflpazini/cerebro)

Cerebro is an API that's consult taxpayer's central registry a.k.a. [Cadastro Centralizado de Contribuinte (CCC)](https://dfe-portal.svrs.rs.gov.br/Cte/Ccc)

## What are we using?

This project was created with the following tecnologies: 🤓

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)
- [Mongo](https://www.mongodb.com/)
- [Jest](https://jestjs.io/)
- [SQS](https://aws.amazon.com/sqs/)

## Up and running

1. Run the following command line to install all npm modules

```sh
$ npm install
```

2. Now you can run the application on development mode

```sh
$ npm start
```

3. If you want to run the unit tests

```sh
$ npm test
```

To access the api, type `localhost:8080` on your preffered browser 👨🏼‍💻

## Searching a company

You have four filters to use on search:
`cnpj` -> Required field
`ie` -> Required field
`state` -> Required field
`env` -> Optional field (Default is always production environment)

Sample request

```json
curl --request GET \
  --url 'http://localhost:8080/search?cnpj=03007331000141&ie=120079527111&uf=SP'
```

## License

[MIT License](http://rflpazini.mit-license.org) :copyright: Rafael Pazini
