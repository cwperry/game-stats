class Stats {
  constructor() {
    this.shotsOnGoal = 0;
    this.missedShots = 0;
    this.goalsFor = 0;
    this.goalsAgainst = 0;
    this.hustles = 0;
    this.hesitations = 0;
    this.takeaways = 0;
    this.giveaways = 0;
  }

  shotsOnGoalChanged = (value) => {
    this.shotsOnGoal = this.statChanged(this.shotsOnGoal, value);
  }

  missedShotsChanged = (value) => {
    this.missedShots = this.statChanged(this.missedShots, value);
  }

  goalsForChanged = (value) => {
    this.goalsFor = this.statChanged(this.goalsFor, value);
  }

  goalsAgainstChanged = (value) => {
    this.goalsAgainst = this.statChanged(this.goalsAgainst, value);
  }

  hustlesChanged = (value) => {
    this.hustles = this.statChanged(this.hustles, value);
  }

  hesitationsChanged = (value) => {
    this.hesitations = this.statChanged(this.hesitations, value);
  }

  takeawaysChanged = (value) => {
    this.takeaways = this.statChanged(this.takeaways, value);
  }

  giveawaysChanged = (value) => {
    this.giveaways = this.statChanged(this.giveaways, value);
  }

  statChanged = (stat, value) => {
    const tempStat = stat;
    return (tempStat + value >= 0) ? tempStat + value : tempStat;
  }

  performance = (statWeights) => this.shotsOnGoal * statWeights.shotsOnGoal
      + this.missedShots * statWeights.missedShots
      + this.goalsFor * statWeights.goalsFor
      + this.goalsAgainst * statWeights.goalsAgainst
      + this.hustles * statWeights.hustles
      + this.hesitations * statWeights.hesitations
      + this.takeaways * statWeights.takeaways
      + this.giveaways * statWeights.giveaways
}

export default Stats;
