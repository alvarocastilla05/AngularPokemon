export interface GameListResponse {
    count: number
    next: string
    previous: any
    results: Game[]
  }
  
  export interface Game {
    name: string
    url: string
  }
  