import { GameStrategy } from "./game.strategy";
import { ConnectionStore } from "../contracts";

export class Game {
  constructor(
    private readonly store: ConnectionStore,
    private readonly strategy: GameStrategy
  ) {}
}
