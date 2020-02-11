import { Component, OnInit } from "@angular/core";
import { IcurrentWeather } from "../interfaces";

@Component({
  selector: "app-current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.css"]
})
export class CurrentWeatherComponent implements OnInit {
  current: IcurrentWeather;
  constructor() {}

  ngOnInit(): void {}
}
