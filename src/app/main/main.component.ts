import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Assignment} from "../../entitys/Assignment";
import {PrimeNGConfig} from "primeng/api";
import {AssignmentService} from "../../services/assignment.service";
import {LoggerService} from "../../services/logger.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // @ts-ignore
  assignments: Assignment[];

  constructor(private assignmentService: AssignmentService, private logger: LoggerService) {
  }

  ngOnInit(): void {
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
}
