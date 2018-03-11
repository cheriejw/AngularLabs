import { Joke } from './joke';

describe('Joke', () => {
  it('should create an instance', () => {
    expect(new Joke(0, `Someone said you look like an owl.`, `Who?`)).toBeTruthy();
  });
});