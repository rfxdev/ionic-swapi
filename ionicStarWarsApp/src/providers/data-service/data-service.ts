import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataServiceProvider {
  starWarsBase = "https://swapi.co/api/";
  endPoints = {
    films: `${this.starWarsBase}films`,
    people: `${this.starWarsBase}people`,
    planets: `${this.starWarsBase}planets`
  };

  constructor(public http: HttpClient) {
    console.log("Hello DataServiceProvider Provider");
  }

  getFilms() {
    return this.http.get(this.endPoints.films);
  }

  getPeople() {
    return this.http.get(this.endPoints.people);
  }

  getPlanets() {
    return this.http.get(this.endPoints.planets);
  }
}
