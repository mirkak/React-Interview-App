type SelectedMoveDTO = {
  name: string;
  url: string;
  power: number;
};

export class SelectedMove {
  name: string;
  url: string;
  power: number;

  constructor(data: SelectedMoveDTO) {
      this.name = data.name;
      this.url = data.url;
      this.power = data.power;
  }
}
