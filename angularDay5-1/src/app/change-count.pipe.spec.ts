import { ChangeCountPipe } from './change-count.pipe';

describe('ChangeCountPipe', () => {
  it('create an instance', () => {
    const pipe = new ChangeCountPipe();
    expect(pipe).toBeTruthy();
  });
});
