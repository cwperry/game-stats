import StatWeights from './StatWeights';

class Team {
  constructor(name, players) {
    this.name = name;
    this.players = players;
    this.statWeights = new StatWeights();
  }
}

export default Team;
