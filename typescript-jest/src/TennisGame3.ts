import { TennisGame } from "./TennisGame";

export class TennisGame3 implements TennisGame {
  private p2points: number = 0;
  private p1points: number = 0;
  // private p1name: string;
  // private p2name: string;

  constructor(_p1name: string, _p2name: string) {
    // this.p1name = p1name;
    // this.p2name = p2name;
  }

  getScore(): string {
    let s: string;
    if (
      this.p1points < 4 &&
      this.p2points < 4 &&
      !(this.p1points === 3 && this.p2points === 3)
    ) {
      const [player1tranlatedPoints, player2tranlatedPoints] = [
        this.p1points,
        this.p2points,
      ].map((points) => ["Love", "Fifteen", "Thirty", "Forty"][points]);

      if (this.p1points === this.p2points) {
        return player1tranlatedPoints + "-All";
      }
      return player1tranlatedPoints + "-" + player2tranlatedPoints;
    } else {
      if (this.p1points === this.p2points) {
        return "Deuce";
      }

      s = this.p1points > this.p2points ? "player1" : "player2";
      if (Math.abs(this.p1points - this.p2points) === 1) {
        return "Advantage " + s;
      }
      return "Win for " + s;
    }
  }

  wonPoint(playerName: string): void {
    playerName === "player1" ? (this.p1points += 1) : (this.p2points += 1);
  }
}
