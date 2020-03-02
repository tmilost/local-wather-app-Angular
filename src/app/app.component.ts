import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center;">

  <mat-toolbar color="primary">
  <span>LocalCast Weather</span>
</mat-toolbar>

  <div>
    Your city, your forecast, right now!
  </div>
  <h2>
    Current Weather
  </h2>
  <mat-card>
  <app-current-weather></app-current-weather>
</mat-card>
  </div>`,
})
export class AppComponent {
  title = 'local-wather-app';
}
