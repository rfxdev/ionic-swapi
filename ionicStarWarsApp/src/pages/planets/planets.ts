import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import { DataServiceProvider } from "../../providers/data-service/data-service";

@IonicPage()
@Component({
  selector: "page-planets",
  templateUrl: "planets.html"
})
export class PlanetsPage {
  planets: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public dataService: DataServiceProvider
  ) {
    this.planets = this.dataService.getPlanets();
    this.planets.subscribe(data => {
      console.log("Stars Wars API planets data: ", data);
    });
  }
}
