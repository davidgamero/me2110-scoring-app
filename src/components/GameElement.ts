interface Option {
  key: number,
  value: string,
  label: string
}

export default interface GameElement {
  key: number,
  type: 'multiplier' | 'points',
  options: Option[]
}