import { v4 as uuidv4 } from 'uuid'
import express, { response } from 'express'


const app = express()

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/create-game-room', (req, res) => {
  const roomId = uuidv4()
  console.log(roomId)
  res.redirect(`/game/room/${roomId}`)
})

app.get('/game/room/:roomId', (req, res) => {
  res.send('hello here')
})

app.listen(3000)