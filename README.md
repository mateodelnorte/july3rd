# July3rd - Getting Rolling w/ Node
=======
Purpose of this talk: Show how easy it is to create a stable deployed environment for development w/ Node. 

What we'll go over: 

 - Part 1: Learning to Walk: Create express app and deploy on heroku. Super simple. Takes 3 mins, tops. 
 - Part 2: Growing up: Provision (or use already provisioned) EC2 instance. Introduce 'deploy' and 'forever'. Use both to deploy our app to EC2 and guarantee it stays live. 
 - Part 3: Scaling out: Using child_process to do long running worker tasks
 - Part 4: Scaling far-out, man: Using RabbitMQ (but could be any other messaging medium) and multiple processes to make an event-based system

# Learning to Walk / Bootstrapping w/ Heroku

Create express app and deploy on heroku. Super simple. Takes 3 mins, tops.

Pre-reqs - Install this: https://devcenter.heroku.com/articles/heroku-command

- Create a new folder for your app, run express (first run npm install express -g, if you don't already have it)
- Add a Procfile ('web: node app.js')
- Update the node version to something *reasonable* https://devcenter.heroku.com/articles/nodejs-versions
- You've got a web app!

# Growing up 

Provision (or use already provisioned) EC2 instance. Introduce 'deploy' and 'forever'. Use both to deploy our app to EC2 and guarantee it stays live.

- Provision an ec2 instance using Amazon Linux via the AWS mgmt interface
- Install node and npm (https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
- Install git ('sudo yum install git')
- Install forever ('sudo npm install -g forever')
- Deploy with 'deploy'. :D (https://github.com/visionmedia/deploy/)
- sudo visudo & comment out Default TTY requirement

# Scaling out 

Using child_process to do long running worker tasks

# Scaling far-out, man

* Requires RabbitMQ installed and running on your machine (mac: 'brew install rabbitmq')

Using RabbitMQ (but could be any other messaging medium) and multiple processes to make an event-based system
