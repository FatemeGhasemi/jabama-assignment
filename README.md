## Jabama-assignment
This project implemented for answering [Jabama challenge](./Jabama_Challenge.pdf)

### Used_Technologies
Nodejs v16
Typescript v4.5.2
DB: Mongo v5, Redis v5
DB ORM: Mongoose
API protocol : REST
Web application: Express v4.17.3
Deployment: 
API Documentation: Swagger


### Installation and Run
* `git clone git@github.com:FatemeGhasemi/jabama-assignment.git`
* `cd jabama-assignment`
* `npm ci`
* `Bringing up database, you can install that in other way, but I suggest using docker docker-compose -f docker-compose-db.ym up -d`
* Creat a file named `development.env` based on [Env example](./.env.example)
* `npm run start:local`
* Now you can browse [Swagger](http://localhost:3000/docs)


### Should implement in the future
* Validation for input data in all web services
* Setup CI/CD
* Generate html template for emails
* Add unit test and integrations tests