import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions={
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Average Student Admission 2022',
          align: 'left'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      credits:{
        enabled:false
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Course',
          colorByPoint: true,
          data: [{
              name: 'Mearn',
              y: 70.67,
              sliced: true,
              selected: true
          }, {
              name: 'Python',
              y: 14.77
          },  {
              name: 'Big-data',
              y: 4.86
          }, {
              name: 'Testing',
              y: 2.63
          }, {
              name: 'Flutter',
              y: 1.53
          },  {
              name: 'Ai',
              y: 1.40
          }, {
              name: 'Php',
              y: 0.84
          }, {
              name: 'Java Springboot',
              y: 0.51
          }, {
              name: 'Cyber-Security',
              y: 2.6
          }]
      }]
  }





  }


}
