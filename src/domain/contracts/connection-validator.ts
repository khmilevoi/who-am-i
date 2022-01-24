import { Connection } from "../entitties";

export interface ConnectionValidator {
  validate(connections: Connection[], targetConnection: Connection): boolean;
}
