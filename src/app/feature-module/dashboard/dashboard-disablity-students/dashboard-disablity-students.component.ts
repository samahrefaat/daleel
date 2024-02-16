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
  colors: string[];
};

@Component({
  selector: 'app-dashboard-disablity-students',
  templateUrl: './dashboard-disablity-students.component.html',
  styleUrls: ['./dashboard-disablity-students.component.scss'],
})
export class DashboardDisablityStudentComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptionsFive: Partial<ChartOptions>;
  public genderChart: Partial<ChartOptions>;

  public nationalityChart: Partial<ChartOptions>;

  colors = ['#1D4BA3', '#42B4E3'];
  public chartOptionsThree: Partial<ChartOptions>;
  public chartOptionsEight: Partial<ChartOptions>;

  public chartOptionsnine: Partial<ChartOptions>;
  public chartOptionsten: Partial<ChartOptions>;

  public chartOptionssix: Partial<ChartOptions>;
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
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };
  constructor() {
    this.genderChart = {
      series: [44, 55],
      chart: {
        type: 'donut',
        lineCap: 'round',
        width: 320,

        stroke: {
          lineCap: 'round',
        },
      },

      labels: ['  ذكر ', 'انثى '],
      dataLabels: {
        style: {
          borderRadius: '10px', // Adjust the border radius as needed
          borderWidth: 1, // Add a border width for the labels
          lineCap: 'round',

          stroke: {
            lineCap: 'round',
          },
        },
      },
      stroke: {
        lineCap: 'round',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
              height: 350,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
    this.nationalityChart = {
      series: [44, 55],
      chart: {
        type: 'donut',
        lineCap: 'round',
        width: 350,

        stroke: {
          lineCap: 'round',
        },
      },

      labels: ['إماراتي', 'غير إماراتي'],
      dataLabels: {
        style: {
          borderRadius: '10px', // Adjust the border radius as needed
          borderWidth: 1, // Add a border width for the labels
          lineCap: 'round',

          stroke: {
            lineCap: 'round',
          },
        },
      },
      stroke: {
        lineCap: 'round',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
              height: 350,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
    this.chartOptionsThree = {
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58],
        },
      ],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.5,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: [
            { offset: 0, color: '#1AA8DF' },
            { offset: 100, color: '#1D4BA3' },
          ],
        },
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
            colors: [
              '#1AA8DF',
              '#1AA8DF',
              '#1AA8DF',
              '#1AA8DF',
              '#1AA8DF',
              '#1AA8DF',
              '#1AA8DF',
            ],
            fontSize: '12px',
          },
        },
        categories: ['إماراتي', 'مصري', 'قطرى', 'كويتى', 'سعودى', 'مغربى'],
      },
      yaxis: {
        labels: {
          style: {
            colors: [
              '#1AA8DF',
              '#1AA8DF',
              '#1AA8DF',
              '#1AA8DF',
              '#1AA8DF',
              '#1AA8DF',
              '#1AA8DF',
            ],
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
    };
    this.chartOptionsFive = {
      series: [
        {
          name: 'basic',
          data: [400, 430, 548],
        },
      ],
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
      chart: {
        type: 'bar',
        // height: 350,
        width: 500,
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
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          borderRadius: 30,
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

      // legend: {
      //   position: 'top',
      //   horizontalAlign: 'left',
      //   offsetX: 20,
      // },
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
          'الغياب بدون عذر',
          'الغياب مع عذر',
          'الطلاب المتغيبين لـ 3 أيام متتاليه أوأكثر لتاريخ اليوم',
        ],
      },
    };

    this.chartOptionssix = {
      series: [44, 55, 13, 43, 22, 42, 42, 30],
      chart: {
        type: 'donut',
        lineCap: 'round',
        width: 250,

        stroke: {
          lineCap: 'round',
        },
      },
      labels: [
        'المنهج الفرنسي',
        'المنهج الفلبيني',
        'منهاج سابس',
        'المنهج الأمريكي',
        'المنهج الهندي',
        'المنهج الإسترالي ',
        'المنهج الألماني ',
        'المنهج البريطاني',
      ],
      dataLabels: {
        style: {
          borderRadius: '10px', // Adjust the border radius as needed
          borderWidth: 1, // Add a border width for the labels
          lineCap: 'round',

          stroke: {
            lineCap: 'round',
          },
        },
      },
      stroke: {
        lineCap: 'round',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
              height: 350,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
    this.chartOptionsEight = {
      series: [44],
      chart: {
        height: 250,
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
              label: 'Total',
              formatter: function () {
                return '249';
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
    this.chartOptionsnine = {
      series: [44],
      chart: {
        height: 250,
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
            { offset: 0, color: '#42B4E3' },

            { offset: 100, color: '#42B4E3' },
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
              label: 'Total',
              formatter: function () {
                return '249';
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
    this.chartOptionsten = {
      series: [44],
      chart: {
        height: 250,
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
            { offset: 0, color: '#92BE33' },

            { offset: 100, color: '#92BE33' },
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
              label: 'Total',
              formatter: function () {
                return '249';
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
        colors: ['#1D4BA3', '#42B4E3'],
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
              label: 'Total',
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
