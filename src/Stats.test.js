import Stats from './Stats';
import StatWeights from './StatWeights';

const stats = new Stats();
const statWeights = new StatWeights();

test('performance should be zero with new Stats', () => {
  expect(stats.performance(statWeights)).toBe(0);
});
