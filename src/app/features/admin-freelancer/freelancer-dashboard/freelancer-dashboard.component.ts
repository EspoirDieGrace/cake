import {Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexGrid,
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexStroke,
    ApexTitleSubtitle,
    ApexXAxis,
    ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    stroke: ApexStroke;
    title: ApexTitleSubtitle;
};
export type radialChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    plotOptions: ApexPlotOptions;
};

@Component({
    templateUrl: 'freelancer-dashboard.component.html',
    styleUrls: ['freelancer-dashboard.component.scss']
})
export class FreelancerDashboardComponent implements OnInit, OnDestroy {
    @ViewChild("chart") chart: ChartComponent | null = null;
    public chartOptions: ChartOptions = {
        series: [
            {
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }
        ],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: "straight"
        },
        title: {
            text: "Product Trends by Month",
            align: "left"
        },
        grid: {
            row: {
                colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5
            }
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep"
            ]
        }
    };

    @ViewChild("radialchart") radialchart: ChartComponent | null = null;
    public radialchartOptions: radialChartOptions = {
        series: [44, 55, 67, 83],
        chart: {
            height: 350,
            type: "radialBar"
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: "22px"
                    },
                    value: {
                        fontSize: "16px"
                    },
                    total: {
                        show: true,
                        label: "Total",
                        formatter: function () {
                            return "249";
                        }
                    }
                }
            }
        },
        labels: ["Apples", "Oranges", "Bananas", "Berries"]
    };

    constructor() {
    }

    ngOnDestroy(): void {
    }

    ngOnInit(): void {
    }

}
