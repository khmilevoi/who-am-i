import { ConnectionValidator } from "./connection-validator";
import { Connection } from "../entitties";

export class ConnectionStore {
  private readonly connections: Connection[] = [];

  constructor(private readonly validator: ConnectionValidator) {}

  add(connection: Connection): boolean {
    const isValid = this.validator.validate([...this.connections], connection);

    if (isValid) {
      this.connections.push(connection);
    }

    return isValid;
  }
}
