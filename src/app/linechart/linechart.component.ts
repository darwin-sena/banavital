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
          data: ['0', '57', '59', '54'],
          fill: false,
          borderColor: '#A8699F',
          tension: 0.1,
        },
        {
          label: 'PERDIDAS',
          data: ['25', '35', '67', '45'],
          fill: false,
          borderColor: '#8D6EB1',
          tension: 0.1,
        },
        {
          label: 'BODEGA',
          data: ['30', '75', '80', '50'],
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

  public barConfig: any = {
    type: 'bar',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
      datasets: [
        {
          label: 'VENTAS',
          data: [30, 50, 40, 70],
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
    const semaforoMessage = document.getElementById('semaforo-message') as HTMLElement;
  
    if (redLight && yellowLight && greenLight && semaforoMessage) {
      
      redLight.style.backgroundColor = 'grey';
      yellowLight.style.backgroundColor = 'grey';
      greenLight.style.backgroundColor = 'grey';
  
      semaforoMessage.textContent = "Estado del valor";
  
      if (value >= 60) {
        redLight.style.backgroundColor = 'red';
        semaforoMessage.textContent = "Valor negativo";
      } else if (value >= 40) {
        yellowLight.style.backgroundColor = 'yellow';
        semaforoMessage.textContent = "Valor regular";
      } else if (value >= 20) {
        greenLight.style.backgroundColor = 'green';
        semaforoMessage.textContent = "Valor positivo";
      }
    } else {
      console.error('No se pudieron encontrar los elementos del semáforo');
    }
  }
  
  }

