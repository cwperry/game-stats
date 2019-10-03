import StatWeights from './StatWeights';

class Team {
  constructor(name, players) {
    this.name = name;
    this.players = players;
    this.statWeights = new StatWeights();
  }

  groupBy = (arr, property) => arr.reduce((memo, x) => {
    // eslint-disable-next-line no-param-reassign
    if (!memo[x[property]]) { memo[x[property]] = []; }
    memo[x[property]].push(x);
    return memo;
  }, {});

  retrieveByPosition = (position) => Object.values(this.groupBy(this.players.filter((p) => (p.position === position)), 'lineNumber'));

  offenseRows = () => this.retrieveByPosition('offense');

  defenseRows = () => this.retrieveByPosition('defense');
}

export default Team;
