import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {

  lineChart = new Chart({
    chart: {
      type: 'line',
    },
    title: {
      text: 'Users'
    },
    credits: {
      enabled: false,
    },
    series: [{
      name: 'User Analytics',
      data: [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16]
    }] as any
  });

  barChart = new Chart({
    chart: {
      type: 'bar', // Changed to 'bar' for histogram
    },
    title: {
      text: 'Analytics'
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ['Electronics', 'Cars', 'Furniture', 'Home', 'Clothes'],
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    series: [{
      name: 'Categories',
      data: [1, 2, 3, 4, 5],
      colors: ['#eeeeee', '#393e46', '#00adb5', '#eeeeee', '#506ef9']
    }] as any
  });
}
