import {PlaColor} from "../entitys/PlaColor";
import {StandardRequest} from "./StandardRequest";

export class ChangeColorAvailability {
  plaColor: PlaColor;
  standardRequest: StandardRequest;


  constructor(plaColor: PlaColor, standardRequest: StandardRequest) {
    this.plaColor = plaColor;
    this.standardRequest = standardRequest;
  }
}
