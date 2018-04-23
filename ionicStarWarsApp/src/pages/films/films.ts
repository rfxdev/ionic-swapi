import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import { DataServiceProvider } from "../../providers/data-service/data-service";

@IonicPage()
@Component({
  selector: "page-films",
  templateUrl: "films.html"
})
export class FilmsPage {
  films: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public dataService: DataServiceProvider
  ) {
    this.films = this.dataService.getFilms();
    this.films.subscribe(data => {
      console.log("Stars Wars API Films data: ", data);
    });
  }

  openDetails(film) {
    this.navCtrl.push("FilmDetailsPage", { film: film });
  }

  goToPlanets() {
    this.navCtrl.parent.select(2);
  }
}
