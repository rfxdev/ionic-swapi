import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import { DataServiceProvider } from "../../providers/data-service/data-service";

@IonicPage()
@Component({
  selector: "page-people",
  templateUrl: "people.html"
})
export class PeoplePage {
  people: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public dataService: DataServiceProvider
  ) {
    this.people = this.dataService.getPeople();
    this.people.subscribe(data => {
      console.log("Stars Wars API People data: ", data);
    });
  }
}
