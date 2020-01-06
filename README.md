# Family Context API

The Family Context API is documented using [Open](https://swagger.io/docs/specification/about/) API 
with a reference implementation generated using [Swagger Codegen](https://github.com/swagger-api/swagger-codegen).

A React-based sample UI for reference is also provided.


## Build 

The simplest way to build and run the whole sample is using Docker. Simply run

```
$ docker build . -t family-context-api 

$ docker run -it -p8080:8080 family-context-api 
```

You can then access the API specification on

http://localhost:8080/ui/

and the reference UI on

http://localhost:8080


## Update stubs

If you make changes to the schema file, you can regenerate the stubs by running

```
make
```

This also requires Docker.

## Deploy on Heroku

```
heroku apps:create <appname>
heroku git:remote --app <appname>
heroku stack:set container
git push heroku master
```