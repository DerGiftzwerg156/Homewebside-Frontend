import {Reply} from "./Reply";

export class ColorAndDeliveryOptionsReply {

  plaColors: any;
  deliveryOptions: any;
  reply: Reply;


  constructor(plaColors: any, deliveryOptions: any, reply: Reply) {
    this.plaColors = plaColors;
    this.deliveryOptions = deliveryOptions;
    this.reply = reply;
  }
}
