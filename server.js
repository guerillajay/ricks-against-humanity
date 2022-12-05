const
  dotenv = require('dot-env'),
  express = require('express'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  app = express(),
  PORT = process.env.PORT || 3001
;

app.use(logger('dev'));
app.use(bodyParser.json());

app.listen(PORT, (error) => {
  console.log(error || `Server running on ${PORT}`)
})