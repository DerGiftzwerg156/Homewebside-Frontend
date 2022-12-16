import {Component, OnInit} from '@angular/core';
import {LoggerService} from "../../../services/logger.service";
import {AssignmentReplyData} from "../../../entitys/AssignmentReplyData";
import {AssignmentService} from "../../../services/assignment.service";
import {PlaColor} from "../../../entitys/PlaColor";
import {NewAssignmentRequest} from "../../../requestTypes/NewAssignmentRequest";
import {MessageService} from "primeng/api";
import {PrimeNGConfig} from 'primeng/api';
import {StandardRequest} from "../../../requestTypes/StandardRequest";
import {DeliveryOption} from "../../../entitys/DeliveryOption";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MessageService]
})
export class MainComponent implements OnInit {


  // @ts-ignore
  plaColors: PlaColor[] = [];

  // @ts-ignore
  deliveryOptions: DeliveryOption[];

  selectedDeliveryOption: DeliveryOption[] = []

  // @ts-ignore
  newAssignment: NewAssignmentRequest;

  // @ts-ignore
  assignments: AssignmentReplyData[];

  // @ts-ignore
  sortOrder: number;

  // @ts-ignore
  sortField: string;
  displayCreateNewAssignment: boolean = false;


  constructor(private logger: LoggerService, private assignmentService: AssignmentService) {
  }

  ngOnInit(): void {
    this.newAssignment = new NewAssignmentRequest(null, null, null, null, 50, null);
    this.getColorsAndDeliveryOptions()
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

  getColorsAndDeliveryOptions() {
    this.assignmentService.getColorsAndDeliveryOptions().subscribe(res => {
      if (res.reply.status) {
        for (let i = 0; i < res.plaColors.length; i++) {
          if (res.plaColors[i].availability) {
            this.plaColors.push(res.plaColors[i])
          }
        }
        this.deliveryOptions = res.deliveryOptions;
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
    this.newAssignment.deliveryOption = this.selectedDeliveryOption[0];
    this.assignmentService.saveNewAssignment(this.newAssignment).subscribe(res => {
      if (res.status) {
        this.displayCreateNewAssignment = false;
        this.logger.log("saveNewAssignment", res);
        this.logger.showSuccess("Erfolg", res.message)
        this.ngOnInit();
      } else {
        this.logger.log("saveNewAssignment", res);
      }
    });
  }

  unselectAll(deliveryOption: DeliveryOption) {
    this.selectedDeliveryOption = [deliveryOption]
  }
}
