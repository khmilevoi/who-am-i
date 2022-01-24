import { User } from "./user";
import { Word } from "./word";

export class Connection {
  constructor(
    private readonly from: User,
    private readonly to: User,
    private readonly word: Word
  ) {}

  getFrom() {
    return this.from;
  }

  getTo() {
    return this.to;
  }

  getWord() {
    return this.word;
  }

  getId() {
    return `${this.from.getId()}|${this.to.getId()}|${this.word.getContent()}`;
  }
}
