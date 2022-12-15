import {StandardRequest} from "./StandardRequest";

export class NewPlaColorRequest {

  colorName: string;
  standardRequest: StandardRequest;


  constructor(colorName: string, standardRequest: StandardRequest) {
    this.colorName = colorName;
    this.standardRequest = standardRequest;
  }
}
