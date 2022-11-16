export class DeliveryOption {
  deliveryOptionId: number | null;
  deliveryName: string;
  deliveryDescription: string | null;
  deliveryPrice: number | null;


  constructor(deliveryOptionId: number | null, deliveryName: string, deliveryDescription: string | null, deliveryPrice: number | null) {
    this.deliveryOptionId = deliveryOptionId;
    this.deliveryName = deliveryName;
    this.deliveryDescription = deliveryDescription;
    this.deliveryPrice = deliveryPrice;
  }
}
