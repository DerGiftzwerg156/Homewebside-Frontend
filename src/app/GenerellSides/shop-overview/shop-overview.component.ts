import {Component, OnInit} from '@angular/core';
import {Product} from "../../../entitys/Product";
import {ProductService} from "../../../services/product.service";
import {ConfirmationService, SelectItem} from "primeng/api";
import {NewAssignmentRequest} from "../../../requestTypes/NewAssignmentRequest";
import {PlaColor} from "../../../entitys/PlaColor";
import {DeliveryOption} from "../../../entitys/DeliveryOption";
import {StandardRequest} from "../../../requestTypes/StandardRequest";
import {AssignmentService} from "../../../services/assignment.service";
import {LoggerService} from "../../../services/logger.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shop-overview',
  templateUrl: './shop-overview.component.html',
  styleUrls: ['./shop-overview.component.scss'],
  providers: [ConfirmationService]
})
export class ShopOverviewComponent implements OnInit {

  products!: Product[];
  sortOrder!: number;
  sortField!: string;


  displaySelectedProduct: boolean = false;
  selectedProduct: Product = new Product(null, null, null, null, null, null);
  sortOptions!: SelectItem[];

  //Variable for new Assignment
  newAssignment!: NewAssignmentRequest;
  displayCreateNewAssignment: boolean = false;
  plaColors: PlaColor[]=[];
  deliveryOptions!: DeliveryOption[];
  selectedDeliveryOption: DeliveryOption[] = []

  constructor(private productService: ProductService, private assignmentService: AssignmentService, private logger: LoggerService, private router: Router, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.newAssignment = new NewAssignmentRequest(null, null, null, null, 50, null);
    this.getColorsAndDeliveryOptions()
    this.productService.getAllProducts().subscribe(res => {
      if (res.reply.status) {
        this.products = res.products;
      }
    })
    this.sortOptions = [
      {label: 'Preis aufsteigend', value: 'productPrice'},
      {label: 'Preis absteigend', value: '!productPrice'}
    ]
  }

  selectProduct(product: Product) {
    if (this.checkLogin()) {
      this.displaySelectedProduct = true;
      this.selectedProduct = product;
    } else {
      this.logger.showWarn("Du bist nicht angemeldet.", "Bitte melde dich zun??chst an bevor du fortf??hrst.")
    }
  }

  onSortChange(event: any) {
    let value = event.value

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value
    }
  }

//  Functions for new Assignment
  unselectAll(deliveryOption: DeliveryOption) {
    this.selectedDeliveryOption = [deliveryOption]

  }

  saveNewAssignment() {
    this.newAssignment.standardRequest = new StandardRequest(sessionStorage.getItem("token")!);
    this.newAssignment.deliveryOption = this.selectedDeliveryOption[0];
    this.assignmentService.saveNewAssignment(this.newAssignment).subscribe(res => {
      if (res.status) {
        this.displayCreateNewAssignment = false;
        this.logger.log("saveNewAssignment", res);
        this.logger.showSuccess("Ihre Bestellanfrage ist erfolgreich bei uns eingagangen", "Wir bearbeiten ihre Anfrage schnellstm??glich.")
        this.ngOnInit();
      } else {
        this.logger.log("saveNewAssignment", res);
        this.logger.showError("Fehler", "Bei ihrer Bestellung ist ein Fehler aufgetreten, bitte versuchen sie es sp??ter erneut.")
      }
    });
  }

  saveNewOrder() {
    this.newAssignment.standardRequest = new StandardRequest(sessionStorage.getItem("token")!);
    this.newAssignment.title = this.selectedProduct.productName
    this.newAssignment.description = this.selectedProduct.productDescription
    this.newAssignment.deliveryOption = this.selectedDeliveryOption[0];
    this.assignmentService.saveNewAssignment(this.newAssignment).subscribe(res => {
      if (res.status) {
        this.displayCreateNewAssignment = false;
        this.logger.log("saveNewAssignment", res);
        this.logger.showSuccess("Ihre Bestellanfrage ist erfolgreich bei uns eingagangen", "Wir bearbeiten ihre Anfrage schnellstm??glich.")
        this.ngOnInit();
      } else {
        this.logger.log("saveNewAssignment", res);
        this.logger.showError("Fehler", "Bei ihrer Bestellung ist ein Fehler aufgetreten, bitte versuchen sie es sp??ter erneut.")
      }
      this.newAssignment = new NewAssignmentRequest(null, null, null, null, 50, null);
    });
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
      } else {
        this.logger.log("getPlaColors", res.reply)
      }
    })
  }

  openNewAssignmentModal() {
    if (this.checkLogin()) {
      this.displayCreateNewAssignment = true;
    } else {
      this.logger.showWarn("Du bist nicht angemeldet.", "Bitte melde dich zun??chst an bevor du fortf??hrst.")
    }

  }


  checkLogin() {
    return sessionStorage.getItem("token") != null;
  }

  //Normale Funktionen
  confirmOrder(selectedProduct: Product) {
    this.confirmationService.confirm({
      message: 'Bitte best??tigen sie erneut ihre Bestellung.' +
        '\n\nBitte denken sie daran, das dies nur eine Bestellanfrage ist, die erst noch von uns best??tigt werden muss.' +
        '\n\nSobald wir ihre Bestellung best??tigt haben, bekommen sie eine Best??tigungsmail mit einer Zahlungsaufforderung.' +
        '\nSobald die Bezahlung bei uns eingegangen ist, beginnen wir sofort mit der Fertigung ihrer Bestellung.',
      header: 'Bestellbest??tigung',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.saveNewOrder();
        this.displaySelectedProduct = false;
        //  Logik f??r neue Bestellung einf??gen
      }
    })
  }

  confirmAssignment() {
    if ((this.newAssignment.title != null && this.newAssignment.title != "") && (this.newAssignment.description != null && this.newAssignment.description != "") && this.selectedDeliveryOption.length != 0) {
      this.confirmationService.confirm({
        message: 'Bitte best??tigen sie erneut ihre Bestellung.' +
          '\n\nBitte denken sie daran, das dies nur eine Bestellanfrage ist, die erst noch von uns best??tigt werden muss.' +
          '\n\nSobald wir ihre Bestellung best??tigt haben, bekommen sie eine Best??tigungsmail mit einer Zahlungsaufforderung.' +
          '\nSobald die Bezahlung bei uns eingegangen ist, beginnen wir sofort mit der Fertigung ihrer Bestellung.',
        header: 'Bestellbest??tigung',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.saveNewAssignment()
          // this.
        }
      })
    } else {
      this.logger.showWarn("Fehler", "Bitte f??llen sie alle Felder aus und versuchen sie es dann erneut.")
    }
  }


}
