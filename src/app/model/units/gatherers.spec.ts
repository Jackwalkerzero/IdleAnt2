import { EventEmitter } from "@angular/core";
import { Game } from "../game";
import { Gatherers } from "./gatherers";

describe("Workers", () => {
  it("should create an instance", () => {
    const game = new Game(
      new EventEmitter<number>(),
      new EventEmitter<string>()
    );
    expect(new Gatherers(game)).toBeTruthy();
  });
});
