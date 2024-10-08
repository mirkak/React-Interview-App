export type MoveResponseDataObject = {
  name: string;
  url: string;
  power: number;
};

export class Move {
  name: string;
  url: string;
  power: number;

  constructor(data: MoveResponseDataObject) {
      this.name = data.name;
      this.url = data.url;
      this.power = data.power;
  }
}
