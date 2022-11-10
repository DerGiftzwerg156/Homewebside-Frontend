import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(action: string , data: any){
    console.log("Log." + action + ": Status: " + data.status + " | Message: " + data.message);
  }
}
