import { IdToNombrePipe } from './id-to-nombre.pipe';

describe('IdToNombrePipe', () => {
  it('create an instance', () => {
    const pipe = new IdToNombrePipe();
    expect(pipe).toBeTruthy();
  });
});
