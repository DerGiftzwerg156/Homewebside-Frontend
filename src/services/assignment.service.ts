import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {AssignmentsReply} from "../replyes/AssignmentsReply";
import {StandardRequest} from "../requestTypes/StandardRequest";
import {ColorAndDeliveryOptionsReply} from "../replyes/ColorAndDeliveryOptionsReply";
import {NewAssignmentRequest} from "../requestTypes/NewAssignmentRequest";
import {Reply} from "../replyes/Reply";

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  standardUrl: string = window.location.origin+"/api/assignments"
  // standardUrl: string = "http://localhost:8080/api/assignments"

  status: string[] = ['Ordered', 'Payed', 'InProgress', 'InDelivery', 'Delivered', 'Canceled']

  constructor(private http: HttpClient) {
  }

  getAssignments() {
    return this.http.post<AssignmentsReply>(this.standardUrl + "/getAllUserAssignments", new StandardRequest(sessionStorage.getItem("token")!))
  }

  getColorsAndDeliveryOptions(){
    return this.http.get<ColorAndDeliveryOptionsReply>(this.standardUrl+"/getColorsAndDeliveryOptions")
  }

  saveNewAssignment(newAssignment: NewAssignmentRequest){
    return this.http.post<Reply>(this.standardUrl+"/createNewAssignment", newAssignment)
  }
}
