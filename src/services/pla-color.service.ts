import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AssignmentsReply} from "../replyes/AssignmentsReply";
import {StandardRequest} from "../requestTypes/StandardRequest";
import {ColorReply} from "../replyes/ColorReply";
import {Reply} from "../replyes/Reply";
import {ChangeColorAvailability} from "../requestTypes/ChangeColorAvailability";
import {NewPlaColorRequest} from "../requestTypes/NewPlaColorRequest";

@Injectable({
  providedIn: 'root'
})
export class PlaColorService {

  standardUrl: string = window.location.origin + "/api/plaColors"
  // standardUrl: string = "http://localhost:8080/api/plaColors"

  constructor(private http: HttpClient) {
  }

  getColors() {
    return this.http.get<ColorReply>(this.standardUrl + "/getAllPlaColors")
  }

  changeAvailability(color: any) {
    return this.http.post<Reply>(this.standardUrl + "/editPlaColorAvailability", new ChangeColorAvailability(color, new StandardRequest(sessionStorage.getItem("token")!)))
  }

  addNewPlaColor(newPlaColorName: string) {
    return this.http.post<Reply>(this.standardUrl + "/newPlaColor", new NewPlaColorRequest(newPlaColorName, new StandardRequest(sessionStorage.getItem("token")!)))

  }
}
