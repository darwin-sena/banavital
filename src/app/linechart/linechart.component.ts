import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Chart, registerables } from 'chart.js/auto';
Chart.register(...registerables);

@Component({
  selector: 'app-linechart',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css'],
})
export class LinechartComponent implements OnInit {

  public lineConfig: any = {
    type: 'line',
    data: {
      labels: ['PH', 'TEMPERATURA', 'OXIGENO', 'AGUA'],
      datasets: [
        {
          label: 'COMPRAS',
          data: ['467', '576', '598', '544'],
          fill: false,
          borderColor: '#A8699F',
          tension: 0.1,
        },
        {
          label: 'PERDIDAS',
          data: ['250', '350', '670', '450'],
          fill: false,
          borderColor: '#8D6EB1',
          tension: 0.1,
        },
        {
          label: 'BODEGA',
          data: ['300', '750', '800', '500'],
          fill: false,
          borderColor: '#FF336B',
          tension: 0.1,
        },
      ],
    },
    options: {
      aspectRatio: 4,
      onClick: (event: any, elements: any) => {
        if (elements.length > 0) {
          const datasetIndex = elements[0].datasetIndex;
          const dataIndex = elements[0].index;
          
          const value = this.lineConfig.data.datasets[datasetIndex].data[dataIndex];
          
          this.updateSemaforo(value);
        }
      },
    },
  };

  // Configuración del gráfico de barras
  public barConfig: any = {
    type: 'bar',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
      datasets: [
        {
          label: 'VENTAS',
          data: [300, 500, 400, 700],
          backgroundColor: '#3498DB',
        },
        {
          label: 'DEVOLUCIONES',
          data: [50, 200, 150, 250],
          backgroundColor: '#E74C3C',
        },
      ],
    },
    options: {
      aspectRatio: 2,
    },
  };

  ngOnInit(): void {
    const lineCanvas = document.getElementById('MyLineChart') as HTMLCanvasElement;
    if (lineCanvas) {
      new Chart(lineCanvas, this.lineConfig);
    }

    const barCanvas = document.getElementById('MyBarChart') as HTMLCanvasElement;
    if (barCanvas) {
      new Chart(barCanvas, this.barConfig);
    }
  }

  updateSemaforo(value: number): void {
    const redLight = document.getElementById('red-light') as HTMLElement;
    const yellowLight = document.getElementById('yellow-light') as HTMLElement;
    const greenLight = document.getElementById('green-light') as HTMLElement;
  
    if (redLight && yellowLight && greenLight) {
      redLight.style.backgroundColor = 'grey';
      yellowLight.style.backgroundColor = 'grey';
      greenLight.style.backgroundColor = 'grey';
  
      if (value >= 600) {
        redLight.style.backgroundColor = 'red';
      } else if (value >= 400) {
        yellowLight.style.backgroundColor = 'yellow';
      } else if (value >= 200) {
        greenLight.style.backgroundColor = 'green';
      }
    } else {
      console.error('No se pudieron encontrar los elementos del semáforo');
    }
  }
  
  }

