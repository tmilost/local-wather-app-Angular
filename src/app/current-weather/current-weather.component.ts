import { Component, OnInit } from "@angular/core";
import { ICurrentWeather } from "../interfaces";
import { asapScheduler } from 'rxjs';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: "app-current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.css"]
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService
      .getCurrentWeather('Belgrade', 'rs')
      .subscribe(data => (this.current = data))
  }
}
