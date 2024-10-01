import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chart, registerables } from 'chart.js/auto';
import { LinechartComponent } from "./linechart/linechart.component";
Chart.register(...registerables);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LinechartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'graficosprueba';
}
