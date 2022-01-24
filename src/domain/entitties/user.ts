import { Unifier } from "../helpers";

export class User extends Unifier {
  constructor(private readonly name: string) {
    super();
  }

  getName() {
    return this.name;
  }
}
