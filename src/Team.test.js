import Team from './Team';
import Player from './Player';

describe('team', () => {
  const janmark = new Player('Janmark', '13', 'offense', 1);
  const seguin = new Player('Seguin', '91', 'offense', 1);
  const radulov = new Player('Radulov', '47', 'offense', 1);
  const klinberg = new Player('Klinberg', '3', 'defense', 1);
  const heiskanen = new Player('Heiskanen', '4', 'defense', 1);

  const players = [
    janmark,
    seguin,
    radulov,
    klinberg,
    heiskanen,
  ];
  const team = new Team('Dallas Stars', players);

  test('offenseRows returns players with offense as position', () => {
    const offense = team.offenseRows();

    expect(offense).toHaveLength(1);

    const offenseRow = offense[0];

    expect(offenseRow).toHaveLength(3);
    expect(offenseRow).toContainEqual(janmark);
    expect(offenseRow).toContainEqual(seguin);
    expect(offenseRow).toContainEqual(radulov);

    expect(offenseRow).not.toContainEqual(klinberg);
    expect(offenseRow).not.toContainEqual(heiskanen);
  });

  test('defenseRows returns players with defense as position', () => {
    const defense = team.defenseRows();

    expect(defense).toHaveLength(1);

    const defenseRow = defense[0];

    expect(defenseRow).toHaveLength(2);

    expect(defenseRow).toContainEqual(klinberg);
    expect(defenseRow).toContainEqual(heiskanen);

    expect(defenseRow).not.toContainEqual(janmark);
    expect(defenseRow).not.toContainEqual(seguin);
    expect(defenseRow).not.toContainEqual(radulov);
  });
});
