import {Reply} from "./Reply";

export class SingleFileReply {
  file: File;
  reply: Reply;


  constructor(file: File, reply: Reply) {
    this.file = file;
    this.reply = reply;
  }
}
