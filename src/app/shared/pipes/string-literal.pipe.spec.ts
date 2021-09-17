import { StringLiteralPipe } from './string-literal.pipe';

describe('StringLiteralPipe', () => {
  it('create an instance', () => {
    const pipe = new StringLiteralPipe();
    expect(pipe).toBeTruthy();
  });
});
