# AWS Lambda template

Starting point of your AWS Lambda microservice.

## Installation

### Node and NPM

First of all let's install [Node Version Manager](https://github.com/creationix/nvm)

    # curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash

And then Node.js v4.3.2

    # nvm install v4.3.2

>**Motivation:**
> There are more recent versions of Node.js, but v4.3.2 is a recommended one to use with Lambda at the moment. And NVM will help us keep our environment clean and not mess with system permissions. 

Two packages that we will be using globally are [gulp](https://github.com/gulpjs/gulp) and [node-lambda](https://github.com/motdotla/node-lambda):

    # npm install --global gulp-cli node-lambda

Finally let's install dependencies and run tests:

    # cd /path/to/project
    # npm install
    # gulp

### node-lambda

We will use *node-lambda* to run our project locally and deploy it to AWS.

    # cd /path/to/project
    # node-lambda setup
    Setup done. Edit the .env, deploy.env, context.json and event.json files as needed.

In .env there is full configuration that you need for deployment. In deploy.env you want to keep any environment variables which your lambda will use when deployed and which you don't want to check in to repository. Finally context.json and event.json are mockups for environment variables and _event_ object to run and test your lambda locally.

For now let's check how the code handles incoming message from *event.json*:

    # node-lambda run
    Success:
    "ok"

## Deployment

Fill out *.env* file according to your AWS settings and run:

    node-lambda deploy
