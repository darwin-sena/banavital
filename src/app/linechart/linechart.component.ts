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

  public lineConfig1: any = {
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
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1.5,  
      onClick: (event: any, elements: any) => {
        if (elements.length > 0) {
          const datasetIndex = elements[0].datasetIndex;
          const dataIndex = elements[0].index;

          const value = this.lineConfig1.data.datasets[datasetIndex].data[dataIndex];

          this.updateSemaforo(value, 'semaforo1');
        }
      },
    },
  };

  public lineConfig2: any = {
    type: 'line',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
      datasets: [
        {
          label: 'VENTAS',
          data: [30, 50, 40, 70],
          fill: false,
          borderColor: '#3498DB',
          tension: 0.1,
        },
        {
          label: 'DEVOLUCIONES',
          data: [50, 200, 150, 250],
          fill: false,
          borderColor: '#E74C3C',
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1.5,  
      onClick: (event: any, elements: any) => {
        if (elements.length > 0) {
          const datasetIndex = elements[0].datasetIndex;
          const dataIndex = elements[0].index;

          const value = this.lineConfig2.data.datasets[datasetIndex].data[dataIndex];

          this.updateSemaforo(value, 'semaforo2');
        }
      },
    },
  };

  public lineConfig3: any = {
    type: 'line',
    data: {
      labels: ['A', 'B', 'C', 'D'],
      datasets: [
        {
          label: 'MUESTRAS',
          data: [10, 20, 30, 40],
          fill: false,
          borderColor: '#2ECC71',
          tension: 0.1,
        },
        {
          label: 'RENDIMIENTO',
          data: [15, 25, 35, 45],
          fill: false,
          borderColor: '#F39C12',
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1.5,  
      onClick: (event: any, elements: any) => {
        if (elements.length > 0) {
          const datasetIndex = elements[0].datasetIndex;
          const dataIndex = elements[0].index;

          const value = this.lineConfig3.data.datasets[datasetIndex].data[dataIndex];

          this.updateSemaforo(value, 'semaforo3');
        }
      },
    },
  };

  public lineConfig4: any = {
    type: 'line',
    data: {
      labels: ['X', 'Y', 'Z', 'W'],
      datasets: [
        {
          label: 'ANALISIS',
          data: [5, 15, 25, 35],
          fill: false,
          borderColor: '#9B59B6',
          tension: 0.1,
        },
        {
          label: 'EXPERIMENTOS',
          data: [10, 20, 30, 40],
          fill: false,
          borderColor: '#1ABC9C',
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1.5,  
      onClick: (event: any, elements: any) => {
        if (elements.length > 0) {
          const datasetIndex = elements[0].datasetIndex;
          const dataIndex = elements[0].index;

          const value = this.lineConfig4.data.datasets[datasetIndex].data[dataIndex];

          this.updateSemaforo(value, 'semaforo4');
        }
      },
    },
  };

  ngOnInit(): void {
    const lineCanvas1 = document.getElementById('MyLineChart1') as HTMLCanvasElement;
    if (lineCanvas1) {
      new Chart(lineCanvas1, this.lineConfig1);
    }

    const lineCanvas2 = document.getElementById('MyLineChart2') as HTMLCanvasElement;
    if (lineCanvas2) {
      new Chart(lineCanvas2, this.lineConfig2);
    }

    const lineCanvas3 = document.getElementById('MyLineChart3') as HTMLCanvasElement;
    if (lineCanvas3) {
      new Chart(lineCanvas3, this.lineConfig3);
    }

    const lineCanvas4 = document.getElementById('MyLineChart4') as HTMLCanvasElement;
    if (lineCanvas4) {
      new Chart(lineCanvas4, this.lineConfig4);
    }
  }

  updateSemaforo(value: number, semaforoId: string): void {
    const redLight = document.getElementById(`${semaforoId}-red-light`) as HTMLElement;
    const yellowLight = document.getElementById(`${semaforoId}-yellow-light`) as HTMLElement;
    const greenLight = document.getElementById(`${semaforoId}-green-light`) as HTMLElement;
    const semaforoMessage = document.getElementById(`${semaforoId}-message`) as HTMLElement;

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
