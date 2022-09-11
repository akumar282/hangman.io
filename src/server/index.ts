import { createServer } from 'http'
import { Server } from 'socket.io'

const httpServer = createServer()
const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
})

io.on('connection', (socket) => {
  console.log('user connected')

  socket.on('message', (message) => {
    console.log(message)
    io.emit('message', `${socket.id.substring(0, 2)} said ${message}`)
  })
})

httpServer.listen(3000, () => console.log('listening on http://localhost:3000'))
