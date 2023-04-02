export interface player {
  display_name: string,
  id: number,
  points: number,
}

export interface message {
  sender: player,
  text: string,
  timestamp: Date
}