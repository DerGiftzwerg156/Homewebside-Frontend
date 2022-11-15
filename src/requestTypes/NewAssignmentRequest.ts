import {PlaColor} from "../entitys/PlaColor";
import {StandardRequest} from "./StandardRequest";

export class NewAssignmentRequest {

  title: string | null;
  description: string | null;
  plaColor: PlaColor | null;
  versand: boolean | null;
  infill: number | null;
  standardRequest: StandardRequest | null;


  constructor(title: string | null, description: string | null, plaColor: PlaColor | null, versand: boolean | null, infill: number | null, standardRequest: StandardRequest | null) {
    this.title = title;
    this.description = description;
    this.plaColor = plaColor;
    this.versand = versand;
    this.infill = infill;
    this.standardRequest = standardRequest;
  }
}
