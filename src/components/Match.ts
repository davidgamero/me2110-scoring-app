export interface Team {
  number: number,
  seed: number,
  name: string
}

export default interface Match {
  start: Date,
  teams: Team[],
  results?: any
}