import { Component, OnInit } from "@angular/core";
import { IcurrentWeather } from "../interfaces";
import { asapScheduler } from 'rxjs';

@Component({
  selector: "app-current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.css"]
})
export class CurrentWeatherComponent implements OnInit {
  current: IcurrentWeather;
  constructor() {
    this.current = {
      city:'Bethesda',
      country:'US',
      date:new Date(),
      image:'assets/img/sunny.svg',
      temperature:29,
      description:'sunny'
    }
  }

  ngOnInit(): void {}
}
