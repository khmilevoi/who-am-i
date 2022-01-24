import * as uuid from "uuid";

export class Unifier {
  private readonly id: string = uuid.v4();

  getId() {
    return this.id;
  }

  is(entity: Unifier) {
    return this.id === entity.id;
  }
}
