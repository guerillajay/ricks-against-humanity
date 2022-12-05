const
  dotenv = require('dot-env'),
  express = require('express'),
  { createServer } = require('http'),
  { Server } = require('socket.io'),
  logger = require('morgan'),
  bodyParser = require('body-parser')
;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const  PORT = process.env.PORT || 3001

app.use(logger('dev'));
app.use(bodyParser.json());

io.on('connection', (socket) => {
  console.log('Connected to socket');
})

httpServer.listen(PORT, (error) => {
  console.log(error || `Server running on ${PORT}`)
})