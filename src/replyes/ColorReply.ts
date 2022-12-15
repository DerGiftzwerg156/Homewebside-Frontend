import {PlaColor} from "../entitys/PlaColor";
import {Reply} from "./Reply";

export class ColorReply {
  plaColors: PlaColor[];
  reply: Reply;


  constructor(plaColors: PlaColor[], reply: Reply) {
    this.plaColors = plaColors;
    this.reply = reply;
  }
}
