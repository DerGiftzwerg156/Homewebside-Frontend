import {Component, OnInit, ViewChild} from '@angular/core';
import {AssignmentReplyData} from "../../../entitys/AssignmentReplyData";
import {LoggerService} from "../../../services/logger.service";
import {AssignmentService} from "../../../services/assignment.service";
import {Table} from "primeng/table";
import {AssignmentStatus} from "../../../entitys/AssignmentStatus";
import {PaymentStatus} from "../../../entitys/PaymentStatus";
import {EditAssignmentRequest} from "../../../requestTypes/EditAssignmentRequest";
import {StandardRequest} from "../../../requestTypes/StandardRequest";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-assignments-overview',
  templateUrl: './assignments-overview.component.html',
  styleUrls: ['./assignments-overview.component.scss'],
  providers: [ConfirmationService]
})
export class AssignmentsOverviewComponent implements OnInit {
  // @ts-ignore
  newAssignments!: AssignmentReplyData[] =[];
  // @ts-ignore
  waitingForPaymentAssignments!: AssignmentReplyData[]=[];
  // @ts-ignore
  assignmentsInProgress!: AssignmentReplyData[]=[];
  // @ts-ignore
  sentAssignments!: AssignmentReplyData[]=[];
  // @ts-ignore
  canceledAssignments!: AssignmentReplyData[]=[];
  // @ts-ignore
  selectedAssignment!: AssignmentReplyData[]=[];

  statusList!: AssignmentStatus[];
  paymentStatusList!: PaymentStatus[];

  loading: boolean = false;

  @ViewChild('dt') table!: Table;
  showDialog: boolean = false;
  confirmDialog: boolean = false;

  constructor(private logger: LoggerService, private assignmentService: AssignmentService, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getAllAssignments()
    this.assignmentService.getStatusAndPaymentStatusList().subscribe(res => {
      if (res.reply.status) {
        this.statusList = res.assignmentStatus;
        this.paymentStatusList = res.paymentStatus;
        console.log(this.paymentStatusList)
      } else {
        this.logger.log("getStatusAndPaymentStatusList", res.reply)
        this.logger.showError("Fehler", "Cant find Statuses")
      }
    })
  }

  openAssignmentDetailed(assignment: any) {
    this.selectedAssignment = [assignment];
    this.showDialog = true;
  }

  getAllAssignments() {
    this.newAssignments = []
    this.waitingForPaymentAssignments=[]
    this.assignmentsInProgress=[]
    this.sentAssignments=[]
    this.canceledAssignments=[]
    this.assignmentService.getAllAssignments().subscribe(res => {
      if (res.reply.status) {
        console.log(res.assignments)
        for (let i = 0; i < res.assignments.length; i++) {
          let actualAssignment = res.assignments[i];
          console.log(actualAssignment)
          console.log(actualAssignment.status.assignmentStatusCode)
          if (actualAssignment.status.assignmentStatusCode == 101 || actualAssignment.status.assignmentStatusCode == 301) {
            this.newAssignments.push(actualAssignment);
          }
          if (actualAssignment.status.assignmentStatusCode == 102) {
            this.waitingForPaymentAssignments.push(actualAssignment);
          }
          if (actualAssignment.status.assignmentStatusCode == 104 || actualAssignment.status.assignmentStatusCode == 103) {
            this.assignmentsInProgress.push(actualAssignment);
          }
          if (actualAssignment.status.assignmentStatusCode == 105) {
            this.sentAssignments.push(actualAssignment);
          }
          if (actualAssignment.status.assignmentStatusCode == 302) {
            this.canceledAssignments.push(actualAssignment);
          }
        }
        this.loading = false;
      } else {
        this.logger.log("getAllAssignments", res.reply);
        this.logger.showError("Fehler", res.reply.message);
      }
    })
  }

  saveChanges() {
    let editAssignmentRequest = new EditAssignmentRequest(this.selectedAssignment[0].assignmentId, this.selectedAssignment[0].wattHours, this.selectedAssignment[0].filamentLength, this.selectedAssignment[0].status.assignmentStatusCode, new StandardRequest(sessionStorage.getItem("token")!))
    this.confirmDialog = false;
    this.assignmentService.editAssignment(editAssignmentRequest).subscribe(res => {
      if (res.status) {
        this.logger.showSuccess("Erfolgreich gespeichert", "Die änderung wurde erfolgreich, bei einer änderung wird der Besteller benachrichtigt!")
        this.showDialog = false;
        // @ts-ignore
        this.selectedAssignment = [new AssignmentReplyData()];
      } else {
        this.logger.log("editAssignment", res)
        this.logger.showError("Fehler beim Speichern", res.message)
        //@ts-ignore
        this.selectedAssignment = [new AssignmentReplyData()];
        this.ngOnInit()
      }
    })
  }

  confirm() {
    if (this.selectedAssignment[0].status.assignmentStatusId <= this.statusList.length) {
      this.selectedAssignment[0].status = this.statusList[this.selectedAssignment[0].status.assignmentStatusId]
    }
    this.showDialog = false;
    this.confirmDialog = true;
  }
}
