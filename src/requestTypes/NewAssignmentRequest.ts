import {PlaColor} from "../entitys/PlaColor";
import {StandardRequest} from "./StandardRequest";
import {DeliveryOption} from "../entitys/DeliveryOption";

export class NewAssignmentRequest {

  title: string | null;
  description: string | null;
  plaColor: PlaColor | null;
  deliveryOption: DeliveryOption | null;
  infill: number | null;
  standardRequest: StandardRequest | null;


  constructor(title: string | null, description: string | null, plaColor: PlaColor | null, deliveryOption: DeliveryOption | null, infill: number | null, standardRequest: StandardRequest | null) {
    this.title = title;
    this.description = description;
    this.plaColor = plaColor;
    this.deliveryOption = deliveryOption;
    this.infill = infill;
    this.standardRequest = standardRequest;
  }
}
