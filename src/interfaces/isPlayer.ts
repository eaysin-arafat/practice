export interface IsPlayer {
  name: string;
  readonly country: string;

  play(): void;
  getProparty(): number;
}
