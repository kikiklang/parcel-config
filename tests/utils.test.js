import multiply from '../src/js/utils';

describe('testing utils functions', () => {
  test('multiply', () => {
    expect(multiply(5, 5)).toBe(25);
  });
});
