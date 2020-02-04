import GameElement from "./GameElement";

export default interface GameObject {
  name: string,
  gameElements: GameElement[],
  multipliedElements?: number[]
}