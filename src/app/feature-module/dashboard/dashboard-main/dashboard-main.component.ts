/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexTooltip,
  ApexFill,
  ApexResponsive,
} from 'ng-apexcharts';
import { OwlOptions } from 'ngx-owl-carousel-o';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  dataLabels: ApexDataLabels | any;
  grid: ApexGrid | any;
  stroke: ApexStroke | any;
  title: ApexTitleSubtitle | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | ApexYAxis[] | any;
  legend: ApexLegend | any;
  tooltip: ApexTooltip | any;
  responsive: ApexResponsive[] | any;
  fill: ApexFill | any;
  labels: string[] | any;
};

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss'],
})
export class DashboardMainComponent {
  @ViewChild('chart') chart!: ChartComponent;

  public chartOptionsOne: Partial<ChartOptions>;

  colors = ['#1D4BA3', '#FF624D', '#42B4E3', '#FFAA31', '#1DA39B'];
  public chartOptionsTwo: Partial<ChartOptions>;
  public chartOptionsTotalBranches: Partial<ChartOptions>;
  public chartOptionsTotalBranchesCompleted: Partial<ChartOptions>;
  public chartOptionsTotalBranchesUncompleted: Partial<ChartOptions>;

  public chartOptionsTotalBranchesEmpty: Partial<ChartOptions>;

  public chartOptionsMultiRadial: Partial<ChartOptions>;

  gradientColors = [
    {
      colorStops: [
        { offset: 0, color: '#DAF7A6' },
        { offset: 100, color: '#C70039' },
      ],
    },
    // Add more gradient color stops as needed
  ];
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    rtl: true,
    navSpeed: 700,
    navText: [
      `<i
  class="fa fa-chevron-right"
  data-bs-toggle="tooltip"
  title="fa fa-chevron-right"
></i>`,
      `<i
class="fa fa-chevron-left"
data-bs-toggle="tooltip"
title="fa fa-chevron-left"
></i>`,
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  constructor() {
    this.chartOptionsOne = {
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58],
        },
      ],
      fill: {
        type: 'solid',
        colors: [
          '#1AA8DF',
          '#FFB54B',
          '#0E8A74',
          '#FF624D',
          '#3E4954',
          '#92BE33',
          '#42B4E3',
        ],
      },
      chart: {
        type: 'bar',
        width: 500,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          distributed: true,
          borderRadius: 20,
          dataLabels: {
            show: false,
            position: 'top',
          },
        },
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        labels: {
          style: {
            colors: ['#000', '#000', '#000', '#000', '#000', '#000', '#000'],
            fontSize: '12px',
          },
        },
        categories: ['إماراتي', 'مصري', 'قطرى', 'كويتى', 'سعودى', 'مغربى'],
      },
      yaxis: {
        labels: {
          style: {
            colors: ['#000', '#000', '#000', '#000', '#000', '#000', '#000'],
            fontSize: '12px',
          },
        },
      },
      // fill: {
      //   opacity: 1,
      // },
      grid: {
        show: true, // you can either change hear to disable all grids
        xaxis: {
          lines: {
            show: false, //or just here to disable only x axis grids
          },
        },
        yaxis: {
          lines: {
            show: true, //or just here to disable only y axis
          },
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return '$ ' + val + ' thousands';
          },
        },
      },
      responsive: [
        {
          breakpoint: 1100,
          options: {
            chart: {
              width: 450,
              // height: 350,
            },
          },
        },
        {
          breakpoint: 500,
          options: {
            chart: {
              width: 380,
              // height: 350,
            },
          },
        },
        {
          breakpoint: 400,
          options: {
            chart: {
              width: 280,
              // height: 350,
            },
            plotOptions: {
              bar: {
                horizontal: false,
                distributed: true,
                borderRadius: 10,
                dataLabels: {
                  show: false,
                  position: 'top',
                },
              },
            },
          },
        },
      ],
    };

    this.chartOptionsTwo = {
      series: [
        {
          name: 'basic',
          data: [400, 430, 448, 470, 540, 580],
        },
      ],
      fill: {
        type: 'solid',
        colors: [
          '#1AA8DF',
          '#FFB54B',
          '#0E8A74',
          '#FF624D',
          '#3E4954',
          '#92BE33',
          '#42B4E3',
        ],
      },
      chart: {
        type: 'bar',
        // height: 350,
        width: 430,
      },
      grid: {
        show: false, // you can either change hear to disable all grids
        xaxis: {
          lines: {
            show: false, //or just here to disable only x axis grids
          },
        },
        yaxis: {
          lines: {
            show: false, //or just here to disable only y axis
          },
        },
      },
      responsive: [
        {
          breakpoint: 1360,
          options: {
            chart: {
              width: 350,
              // height: 350,
            },
          },
        },
        {
          breakpoint: 1100,
          options: {
            chart: {
              width: 450,
              // height: 350,
            },
          },
        },
        {
          breakpoint: 500,
          options: {
            chart: {
              width: 350,
              // height: 350,
            },
          },
        },
        {
          breakpoint: 400,
          options: {
            chart: {
              width: 280,
              // height: 350,
            },
            plotOptions: {
              bar: {
                horizontal: false,
                distributed: true,
                borderRadius: 10,
                dataLabels: {
                  show: false,
                  position: 'top',
                },
              },
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          borderRadius: 10,
          dataLabels: {
            position: 'top',
          },
        },
        dataLabels: {
          enabled: false,
          style: {
            colors: ['#333'],
          },
          offsetX: 20,
        },
      },

      legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
        floating: true,
        offsetY: -10,
        offsetX: -5,
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'center',
        style: {
          colors: ['#fff'],
        },

        formatter: function (val: any, opt: any) {
          return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
        },
        offsetX: 0,
      },
      yaxis: {
        show: false,
        reversed: true,
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
        y: {
          show: false,
        },
      },
      xaxis: {
        show: false,

        labels: {
          show: false,
        },
        categories: [
          'مدينة الشارقة',
          'المنطقة الوسطى ',
          'المنطقة الشرقية ',
          'المجاز ',
          'المنخول ',
          'النهضة ',
        ],
      },
    };
    this.chartOptionsTotalBranches = {
      series: [44],
      chart: {
        height: 150,
        type: 'radialBar',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: [
            { offset: 0, color: '#1D4BA3' },

            { offset: 100, color: '#1AA8DF' },
          ],
        },
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: '',
              formatter: function () {
                return '';
              },
            },
          },
          dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 1,
          },
        },
      },
      stroke: {
        lineCap: 'round',
      },
      responsive: [
        {
          breakpoint: 1100,
          options: {
            chart: {
              width: 450,
              // height: 350,
            },
          },
        },
        {
          breakpoint: 500,
          options: {
            chart: {
              width: 380,
              // height: 350,
            },
          },
        },
        {
          breakpoint: 400,
          options: {
            chart: {
              width: 280,
              // height: 350,
            },
            plotOptions: {
              bar: {
                horizontal: false,
                distributed: true,
                borderRadius: 10,
                dataLabels: {
                  show: false,
                  position: 'top',
                },
              },
            },
          },
        },
      ],
      labels: ['الشعب المكتملة'],
    };
    this.chartOptionsTotalBranchesCompleted = {
      series: [44],
      chart: {
        height: 150,
        type: 'radialBar',
      },
      fill: {
        type: 'solid',
        colors: ['#92BE33'],
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: '',
              formatter: function () {
                return '';
              },
            },
          },
          dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 1,
          },
        },
      },
      stroke: {
        lineCap: 'round',
      },

      labels: ['الشعب المكتملة'],
    };

    this.chartOptionsTotalBranchesUncompleted = {
      series: [44],
      chart: {
        height: 150,
        type: 'radialBar',
      },
      fill: {
        type: 'solid',
        colors: ['#FBB34D'],
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: '',
              formatter: function () {
                return '';
              },
            },
          },
          dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 1,
          },
        },
      },
      stroke: {
        lineCap: 'round',
      },

      labels: ['الشعب المكتملة'],
    };
    this.chartOptionsTotalBranchesEmpty = {
      series: [44],
      chart: {
        height: 150,
        type: 'radialBar',
      },
      fill: {
        type: 'solid',
        colors: ['#FF624D'],
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: '',
              formatter: function () {
                return '';
              },
            },
          },
          dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 1,
          },
        },
      },
      stroke: {
        lineCap: 'round',
      },

      labels: ['الشعب المكتملة'],
    };

    this.chartOptionsMultiRadial = {
      series: [44, 55],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      fill: {
        type: 'solid',
        colors: ['#0E8A74', '#FBB34D'],
      },

      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'إجمالي عدد المدارس',
              formatter: function () {
                return '249';
              },
            },
          },
        },
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['Apples', 'Oranges'],
    };
  }
  ngAfterViewInit(): void {
    // Wait for ng-apexcharts to initialize
    setTimeout(() => {
      const apexChart: any = this.chart.chart;

      if (apexChart && apexChart.w) {
        const segments = apexChart.w.globals.dom.baseEl.querySelectorAll(
          '.apexcharts-donut-series path'
        );

        segments.forEach((segment: any) => {
          segment.setAttribute('rx', '10'); // Set border radius for x-axis
          segment.setAttribute('ry', '10'); // Set border radius for y-axis
        });
      }
    });
  }
}

// res = {
//   complete: {
//     values: [0, 2, 132],
//     lables: ['dfzg'],
//   },
//   not_complete: {
//     values: [0, 2, 132],
//     lables: ['dfzg'],
//   },
// };
