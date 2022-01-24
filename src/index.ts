import { Game, GameStrategy } from "./domain/services";
import { ConnectionStore } from "./domain/contracts";
import { UniqueValidator } from "./validators/unique-validator";
import { Connection, User, Word } from "./domain/entitties";

const users = Array.from(Array(10), (_, index) => new User(index.toString()));
const words = users.map(
  (_, index) => new Word(String.fromCharCode(index + 35))
);

const connections = users.map((user, index, list) => {
  return new Connection(user, list[(index + 1) % list.length], words[index]);
});

const store = new ConnectionStore(new UniqueValidator());

connections.forEach((connection) => store.add(connection));

const onlineStrategy = new GameStrategy([]);

const game = new Game(store, onlineStrategy);
