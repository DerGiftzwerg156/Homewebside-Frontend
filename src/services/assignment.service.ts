import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {AssignmentsReply} from "../replyes/AssignmentsReply";
import {StandardRequest} from "../requestTypes/StandardRequest";
import {ColorAndDeliveryOptionsReply} from "../replyes/ColorAndDeliveryOptionsReply";
import {NewAssignmentRequest} from "../requestTypes/NewAssignmentRequest";
import {Reply} from "../replyes/Reply";
import {LoggerService} from "./logger.service";
import {StatusesReply} from "../replyes/StatusesReply";
import {AssignmentReplyData} from "../entitys/AssignmentReplyData";
import {EditAssignmentRequest} from "../requestTypes/EditAssignmentRequest";

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  // standardUrl: string = window.location.origin + "/api/assignments"
  standardUrl: string = "http://localhost:8080/api/assignments"

  constructor(private http: HttpClient, private logger: LoggerService) {
  }

  getAssignments() {
    return this.http.post<AssignmentsReply>(this.standardUrl + "/getAllUserAssignments", new StandardRequest(sessionStorage.getItem("token")!))
  }

  getAllAssignments() {
    return this.http.post<AssignmentsReply>(this.standardUrl + "/getAllAssignments", new StandardRequest(sessionStorage.getItem("token")!))
  }

  getColorsAndDeliveryOptions() {
    return this.http.get<ColorAndDeliveryOptionsReply>(this.standardUrl + "/getColorsAndDeliveryOptions")
  }

  getStatusAndPaymentStatusList() {
    return this.http.get<StatusesReply>(this.standardUrl + "/getStatuses")
  }

  saveNewAssignment(newAssignment: NewAssignmentRequest) {
    return this.http.post<Reply>(this.standardUrl + "/createNewAssignment", newAssignment)
  }

  editAssignment(editAssignmentRequest: EditAssignmentRequest) {
    return this.http.post<Reply>(this.standardUrl + "/editAssignment", editAssignmentRequest)
  }
}
