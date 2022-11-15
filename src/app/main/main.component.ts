import {Component, OnInit} from '@angular/core';
import {LoggerService} from "../../services/logger.service";
import {AssignmentReplyData} from "../../entitys/AssignmentReplyData";
import {AssignmentService} from "../../services/assignment.service";
import {PlaColor} from "../../entitys/PlaColor";
import {NewAssignmentRequest} from "../../requestTypes/NewAssignmentRequest";
import {MessageService} from "primeng/api";
import {PrimeNGConfig} from 'primeng/api';
import {StandardRequest} from "../../requestTypes/StandardRequest";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MessageService]
})
export class MainComponent implements OnInit {


  // @ts-ignore
  plaColors: PlaColor[];

  // @ts-ignore
  newAssignment: NewAssignmentRequest;

  // @ts-ignore
  assignments: AssignmentReplyData[];

  // @ts-ignore
  sortOrder: number;

  // @ts-ignore
  sortField: string;
  displayCreateNewAssignment: boolean = false;


  constructor(private logger: LoggerService, private assignmentService: AssignmentService, private messageService: MessageService, private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.newAssignment = new NewAssignmentRequest(null, null, null, null, 50, null);
    this.getColors()
    this.getAssignments()
  }

  getAssignments() {
    this.assignmentService.getAssignments().subscribe(res => {
      if (res.reply.status) {
        this.assignments = res.assignments;
        this.logger.log("getAssignments", res.reply)
      } else {
        this.logger.log("getAssignments", res.reply)
      }
    })
  }

  getColors() {
    this.assignmentService.getPlaColors().subscribe(res => {
      if (res.reply.status) {
        this.plaColors = res.plaColors;
        this.logger.log("getPlaColors", res.reply)
      } else {
        this.logger.log("getPlaColors", res.reply)
      }
    })
  }

  openNewAssignmentModal() {
    this.displayCreateNewAssignment = true;
  }

  saveNewAssignment() {
    this.newAssignment.standardRequest = new StandardRequest(sessionStorage.getItem("token")!);
    this.assignmentService.saveNewAssignment(this.newAssignment).subscribe(res => {
      if (res.status) {
        this.logger.log("saveNewAssignment", res);
        this.displayCreateNewAssignment = false;
        this.showMessage(res.message)
        this.ngOnInit();
      } else {
        this.logger.log("saveNewAssignment", res);
      }
    });
  }

  showMessage(message:string) {
    this.messageService.add({key: 'messager', severity: 'success', summary: 'Success', detail: message});
  }
}
