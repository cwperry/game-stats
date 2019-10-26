import Player from './Player';

describe('Player', () => {
  const player = new Player('name', 'number', 'position', 1);

  test('handleShotsChanged', () => {
    expect(player.stats.shotsOnGoal).toBe(0);

    player.handleShotsChanged(1);

    expect(player.stats.shotsOnGoal).toBe(1);
  });

  test('handleMissedShotsChanged', () => {
    expect(player.stats.missedShots).toBe(0);

    player.handleMissedShotsChanged(1);

    expect(player.stats.missedShots).toBe(1);
  });

  test('handleGoalsForChanged', () => {
    expect(player.stats.goalsFor).toBe(0);

    player.handleGoalsForChanged(1);

    expect(player.stats.goalsFor).toBe(1);
  });

  test('handleAgainstAgainstChanged', () => {
    expect(player.stats.goalsAgainst).toBe(0);

    player.handleGoalsAgainstChanged(1);

    expect(player.stats.goalsAgainst).toBe(1);
  });

  test('handleHustlesChanged', () => {
    expect(player.stats.hustles).toBe(0);

    player.handleHustlesChanged(1);

    expect(player.stats.hustles).toBe(1);
  });

  test('handleHesitationsChanged', () => {
    expect(player.stats.hesitations).toBe(0);

    player.handleHesitationsChanged(1);

    expect(player.stats.hesitations).toBe(1);
  });

  test('handleTakeawaysChanged', () => {
    expect(player.stats.takeaways).toBe(0);

    player.handleTakeawaysChanged(1);

    expect(player.stats.takeaways).toBe(1);
  });

  test('handleGiveawaysChanged', () => {
    expect(player.stats.giveaways).toBe(0);

    player.handleGiveawaysChanged(1);

    expect(player.stats.giveaways).toBe(1);
  });
});
