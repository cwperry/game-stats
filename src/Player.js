import Stats from './Stats';

class Player {
  constructor(name, number) {
    this.name = name;
    this.number = number;
    this.stats = new Stats();
  } 

  handleShotsChanged = (value) => {
    this.stats.shotsOnGoalChanged(value);
  }

  handleMissedShotsChanged = (value) => {
    this.stats.missedShotsChanged(value);
  }

  handleGoalsForChanged = (value) => {
    this.stats.goalsForChanged(value);
  }

  handleGoalsAgainstChanged = (value) => {
    this.stats.goalsAgainstChanged(value);
  }

  handleHustlesChanged = (value) => {
    this.stats.hustlesChanged(value);
  }

  handleHesitationsChanged = (value) => {
    this.stats.hesitationsChanged(value);
  }

  handleTakeawaysChanged = (value) => {
    this.stats.takeawaysChanged(value);
  }

  handleGiveawaysChanged = (value) => {
    this.stats.giveawaysChanged(value);
  }
}

export default Player;