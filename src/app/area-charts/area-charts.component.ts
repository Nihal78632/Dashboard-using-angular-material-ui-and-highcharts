import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-charts',
  templateUrl: './area-charts.component.html',
  styleUrls: ['./area-charts.component.css']
})
export class AreaChartsComponent {

  Highcharts = Highcharts;
  chartOptions = {
    }

    constructor(){
      //
      HC_exporting(Highcharts);

      //for showing chart
      this.chartOptions=  {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Yearly Placements',
            align: 'center'
        },
        subtitle: {
            text: 'Luminar-technolab',
            align: 'Center'
        },
        xAxis:{
          categories:['jan','feb','march','apr','may','june','july','aug','sept','oct','nov','dec'],
          accessability:{

          }
        },
        yAxis: {
            title: {
                useHTML: true,
                text: 'Number of Placements'
            }
        },
        credits:{
          enabled:false
        },
        tooltip: {
            shared: true,
            headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
        },
        plotOptions: {
           
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Mearn',
            data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 17214,18356,19570,20410]
        }, {
            name: 'Python',
            data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039,4500,4700,5210]
    
        }, {
            name: 'Big-data',
            data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913,5023,5214,5355]
        }, {
            name: 'AI',
            data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550,1750,1814,1920]
    
        }, {
            name: 'Testing',
            data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186,2200,2410,2320]
        }]
    }






      
    }
}
