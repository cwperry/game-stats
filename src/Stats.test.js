import Stats from './Stats';
import StatWeights from './StatWeights';

describe('Stats', () => {
  let stats;
  let statWeights;

  beforeEach(() => {
    stats = new Stats();
    statWeights = new StatWeights();
  });

  test('performance should be zero with new Stats', () => {
    expect(stats.performance(statWeights)).toBe(0);
  });

  test('stat should never go below zero', () => {
    expect(stats.shotsOnGoal).toBe(0);

    stats.shotsOnGoalChanged(-1);

    expect(stats.shotsOnGoal).toBe(0);
  });

  test('shotsOnGoalChanged', () => {
    expect(stats.shotsOnGoal).toBe(0);

    stats.shotsOnGoalChanged(1);

    expect(stats.shotsOnGoal).toBe(1);
  });

  test('missedShotsChanged', () => {
    expect(stats.missedShots).toBe(0);

    stats.missedShotsChanged(1);

    expect(stats.missedShots).toBe(1);
  });

  test('goalsForChanged', () => {
    expect(stats.goalsFor).toBe(0);

    stats.goalsForChanged(1);

    expect(stats.goalsFor).toBe(1);
  });

  test('goalsAgainstChanged', () => {
    expect(stats.goalsAgainst).toBe(0);

    stats.goalsAgainstChanged(1);

    expect(stats.goalsAgainst).toBe(1);
  });

  test('hustlesChanged', () => {
    expect(stats.hustles).toBe(0);

    stats.hustlesChanged(1);

    expect(stats.hustles).toBe(1);
  });

  test('hesitationsChanged', () => {
    expect(stats.hesitations).toBe(0);

    stats.hesitationsChanged(1);

    expect(stats.hesitations).toBe(1);
  });

  test('takeawaysChanged', () => {
    expect(stats.takeaways).toBe(0);

    stats.takeawaysChanged(1);

    expect(stats.takeaways).toBe(1);
  });

  test('giveawaysChanged', () => {
    expect(stats.giveaways).toBe(0);

    stats.giveawaysChanged(1);

    expect(stats.giveaways).toBe(1);
  });
});
