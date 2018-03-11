export class Joke {
  id: number;
  setup: string;
  punchline: string;

  constructor(id, setup, punchline) {
    this.id = id;
    this.setup = setup;
    this.punchline = punchline;
  }
}
