export class SpaceRoom {
  constructor() {
    this.players = {}
  }

  join(socket, username) {
    this.players[socket.id] = {
      id:       socket.id,
      username,
      position: { x: 0, y: 1.7, z: 10 },  // spawn on the Bridge
      rotation: { y: 0 },
    }
  }

  leave(id) {
    delete this.players[id]
  }

  updatePlayer(id, position, rotation) {
    if (!this.players[id]) return
    this.players[id].position = position
    this.players[id].rotation = rotation
  }

  getPlayer(id)  { return this.players[id] }
  getPlayers()   { return Object.values(this.players) }
}
