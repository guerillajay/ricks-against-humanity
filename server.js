const
  dotenv = require('dot-env'),
  express = require('express'),
  { createServer } = require('http'),
  { Server } = require('socket.io'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  cors = require('cors');
;

const app = express();
app.use(cors);
app.use(logger('dev'));
app.use(bodyParser.json());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ['GET', 'POST']
  }
});

const  PORT = process.env.PORT || 3001


io.on('connection', (socket) => {
  console.log(`A user connected, ${socket.id}`);
})

httpServer.listen(PORT, (error) => {
  console.log(error || `Server running on ${PORT}`)
})