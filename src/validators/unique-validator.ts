import { ConnectionValidator } from "../domain/contracts";
import { Connection } from "../domain/entitties";

export class UniqueValidator implements ConnectionValidator {
  validate(connections: Connection[], targetConnection: Connection): boolean {
    return connections.every((item) => {
      if (item.getFrom().is(targetConnection.getFrom())) {
        return false;
      }

      if (item.getTo().is(targetConnection.getTo())) {
        return false;
      }

      if (item.getWord().is(targetConnection.getWord())) {
        return false;
      }

      return true;
    });
  }
}
