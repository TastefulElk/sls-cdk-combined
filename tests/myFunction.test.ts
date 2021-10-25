import { handler } from '../src/myFunction';

describe('[myFunction]', () => {
  it('should not crash', async () => {
    await handler({}, {});
  });
});
