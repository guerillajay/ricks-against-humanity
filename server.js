const
  dotenv = require('dot-env'),
  app = require('express')(),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  server = require('http').createServer(app),
  io = require('socket.io')(server),
  PORT = process.env.PORT || 3001
;

app.use(logger('dev'));
app.use(bodyParser.json());

io.on('connection', (socket) => {
  console.log('Connected to socket');
})

server.listen(PORT, (error) => {
  console.log(error || `Server running on ${PORT}`)
})