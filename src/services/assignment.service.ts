import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Assignment} from "../entitys/Assignment";
import {AssignmentsReply} from "../replyes/AssignmentsReply";
import {StandardRequest} from "../requestTypes/StandardRequest";

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  // standardUrl: string = window.location.origin+"/api/auth"
  standardUrl: string = "http://localhost:8080/api/assignments"

  status: string[] = ['Ordered', 'Payed', 'InProgress', 'InDelivery', 'Delivered', 'Canceled']

  constructor(private http: HttpClient) {
  }

  getAssignments() {
    return this.http.post<AssignmentsReply>(this.standardUrl + "/getAllUserAssignments", new StandardRequest(sessionStorage.getItem("token")!))
  }
}
