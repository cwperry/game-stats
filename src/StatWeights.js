class StatWeights {
  constructor() {
    this.shotsOnGoal = 1;
    this.missedShots = .5;
    this.goalsFor = 1;
    this.goalsAgainst = -1;
    this.hustles = .5;
    this.hesitations = -.5;
    this.takeaways = 1;
    this.giveaways = -1;
  }
}

export default StatWeights;