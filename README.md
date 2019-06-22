# graphql-nexus-prisma-starter-kit

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

#### 1. Install Prisma

You must have [prisma](https://github.com/prisma/prisma) installed on your machine

```
npm install -g prisma
```

#### 2. Install docker

To setup Prisma, you need to have [Docker](https://www.docker.com) installed!

#### 3. Starting services

```
cd ./prisma
docker-compose up -d
```

This will start a prisma and a mysql container.
The database type can be set at the `prisma/docker-compose.yml`

#### 4. Edit your datamodel

You can add additional types and fields to the `prisma/datamodel.prisma`

https://www.prisma.io/docs/1.34/datamodel-and-migrations/datamodel-MYSQL-knul/

#### 5. Create a .env file

Create a new `.env` file based on the `.env.development`

```
cp .env.development .env
```

#### 6. Deploy your datamodel to the database

```
prisma deploy -e .env
```

Deploying will generate js client and `prisma.graphql` files into the `generated` folder.
They will be used by our app.

### Running server

```
npm start
```

## Built With

* [prisma](https://github.com/prisma/prisma) - database wrapper service
* [nexus-prisma](https://github.com/prisma/nexus-prisma) - tool forwarding prisma resolvers
* [graphql-yoga](https://github.com/prisma/graphql-yoga) - graphql sever
* [graphql-shield](https://github.com/maticzav/graphql-shield) - permission layer for your application


## Authors

* **Benjámin Hajnal** - *Initial work* - [hajnalben](https://github.com/hajnalben)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
