import {Component, OnInit} from '@angular/core';
import {PlaColor} from "../../../entitys/PlaColor";
import {PlaColorService} from "../../../services/pla-color.service";
import {LoggerService} from "../../../services/logger.service";

@Component({
  selector: 'app-color-settings',
  templateUrl: './color-settings.component.html',
  styleUrls: ['./color-settings.component.scss']
})
export class ColorSettingsComponent implements OnInit {
  plaColors: PlaColor[] = [];
  booleans: string[] = ["Verfügbar", "Nicht Verfügbar"];
  showNewPlaColorDialog: boolean = false;
  newPlaColorName: string = "";

  constructor(private colorService: PlaColorService, private logger: LoggerService) {
  }

  ngOnInit(): void {
    this.plaColors = []
    this.colorService.getColors().subscribe(res => {
      if (res.reply.status) {
        this.plaColors = res.plaColors;
        console.log(this.plaColors)
      } else {
        this.logger.log("getColors", res.reply)
      }
    })
  }

  newPlaColor() {
    this.showNewPlaColorDialog = true;
  }

  changeAvailability(color: any) {
    this.colorService.changeAvailability(color).subscribe(res => {

    })
  }

  saveNewColor() {
    this.colorService.addNewPlaColor(this.newPlaColorName).subscribe(res => {
      if (res.status) {
        this.showNewPlaColorDialog = false;
        this.ngOnInit()
        this.newPlaColorName = ""
      } else {
        this.logger.log("newPlaColor", res)
        this.logger.showError("New PLa Color", res.message)
      }
    })
  }
}
