import {Component, OnInit, ViewChild} from '@angular/core';
import {AssignmentReplyData} from "../../../entitys/AssignmentReplyData";
import {LoggerService} from "../../../services/logger.service";
import {AssignmentService} from "../../../services/assignment.service";
import {Table} from "primeng/table";
import {AssignmentStatus} from "../../../entitys/AssignmentStatus";
import {PaymentStatus} from "../../../entitys/PaymentStatus";

@Component({
  selector: 'app-assignments-overview',
  templateUrl: './assignments-overview.component.html',
  styleUrls: ['./assignments-overview.component.scss']
})
export class AssignmentsOverviewComponent implements OnInit {

  assignments!: AssignmentReplyData[];

  // @ts-ignore
  selectedAssignment!: AssignmentReplyData = new AssignmentReplyData(null, null, null, null, null, null, null, null);

  statusList: string[] = [];
  paymentStatusList: string[] = [];

  loading: boolean = true;

  @ViewChild('dt') table!: Table;
  showDialog: boolean = false;

  constructor(private logger: LoggerService, private assignmentService: AssignmentService) {
  }

  ngOnInit(): void {
    this.assignmentService.getAllAssignments().subscribe(res => {
      if (res.reply.status) {
        this.assignments = res.assignments;
        this.loading = false;
      } else {
        this.logger.log("getAllAssignments", res.reply);
        this.logger.showError("Fehler", res.reply.message);
      }
    })
    this.assignmentService.getStatusAndPaymentStatusList().subscribe(res => {
      if (res.reply.status) {
        for (let i = 0; i < res.assignmentStatus.length; i++) {
          console.log(i)
          console.log(res.assignmentStatus[i].assignmentStatus)
          this.statusList.push(res.assignmentStatus[i].assignmentStatus)
        }
        console.log(this.statusList)
        for (let i = 0; i < res.paymentStatus.length; i++) {
          this.paymentStatusList.push(res.paymentStatus[i].paymentStatus)
        }
        this.statusList = res.assignmentStatus;
        this.paymentStatusList = res.paymentStatus;
      } else {
        this.logger.log("getStatusAndPaymentStatusList", res.reply)
        this.logger.showError("Fehler", "Cant find Statuses")
      }
    })
  }

  openAssignmentDetailed(assignment: any) {
    this.selectedAssignment = assignment;
    this.showDialog = true;
  }
}
