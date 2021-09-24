import React from 'react'
import Chart from 'react-apexcharts'

export default function AdminChart() {
    return (
        <>
            <Chart
                type="area" forecolor="#5A6576"
                series={[
                    {
                        name: "kilogram",
                        data: [50, 180, 90, 400, 120, 250, 300]
                    }
                ]}
                options={{
                    colors: ["#F97916"],
                    chart: {
                        toolbar: {
                            show: false
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    yaxis: {
                        labels: {
                            formatter: (val) => {
                                return `${val} kg`
                            },
                            style: {
                                colors: ['#5A6576']
                            }
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
                        ]
                    },
                    stroke: {
                        curve: 'smooth',
                        width: '2'
                    },
                    grid: {
                        show: true,
                        strokeDashArray: 10
                    },
                    fill: {
                        colors: ["#fcd2b2"]
                    }

                }}
            >

            </Chart>
        </>
    )
}
