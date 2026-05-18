import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import { SpaceRoom } from './rooms/SpaceRoom.js'

const app    = express()
const http   = createServer(app)
const io     = new Server(http, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
})

app.use(cors())
app.get('/health', (_, res) => res.json({ status: 'ok' }))

const room = new SpaceRoom()

io.on('connection', socket => {
  console.log(`[+] ${socket.id} connected`)

  socket.on('join', ({ username }) => {
    room.join(socket, username)

    // Send current room state to the new player
    socket.emit('room:state', { players: room.getPlayers() })

    // Tell everyone else a new player joined
    socket.broadcast.emit('player:joined', {
      id: socket.id,
      username,
      position: room.getPlayer(socket.id).position,
    })
  })

  socket.on('player:move', ({ position, rotation }) => {
    room.updatePlayer(socket.id, position, rotation)
    socket.broadcast.emit('player:moved', {
      id: socket.id,
      position,
      rotation,
    })
  })

  socket.on('disconnect', () => {
    console.log(`[-] ${socket.id} disconnected`)
    room.leave(socket.id)
    io.emit('player:left', { id: socket.id })
  })
})

const PORT = process.env.PORT || 3001
http.listen(PORT, () => console.log(`SpaceWork server running on :${PORT}`))
