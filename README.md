## Jabama-assignment
This project implemented for answering [Jabama challenge](./Jabama_Challenge.pdf)
This is deployed on my VPS and you can see the swagger here http://94.101.187.225:3000/docs

### Used_Technologies
* Nodejs v16
* Typescript v4.5.2
* DB: Mongo v5, Redis v5 
* DB ORM: Mongoose
* API protocol : REST
* Web application: Express v4.17.3
* Deployment: 
* API Documentation: Swagger


### Installation and Run
* `git clone git@github.com:FatemeGhasemi/jabama-assignment.git`
* `cd jabama-assignment`
* `npm ci`
* `Bringing up database, you can install that in other way, but I suggest using docker docker-compose -f docker-compose-db.ym up -d`
* Creat a file named `development.env` based on [Env example](./.env.example)
* `npm run start:local`
* Now you can browse [Swagger](http://localhost:3000/docs)

### Production
In Production server,  I run application with docker-compose, and for mongo I used https://cloud.mongodb.com, and
for redis I used https://app.redislabs.com
After every push I should do this steps for deploying
* ssh to production server
* `cd /opt/jabama-assignment`
* `git pull origin master`
* `docker-compose -f docker-compose-production.yml down && docker-compose -f docker-compose-production.yml  up -d --build && docker image prune -a --force`
*  http://94.101.187.225:3000/docs

### Should implement in the future
* Should add filter, pagination and authentication for /logs
* Validation for input data in all web services
* Build docker images and push them in a registry ( for instance github packages)
* Setup CI/CD
* Generate html template for emails
* Add unit test and integrations tests
