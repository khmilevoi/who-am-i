import { Unifier } from "../helpers";

export class Word extends Unifier {
  constructor(private readonly content: string) {
    super();
  }

  getContent() {
    return this.content;
  }
}
