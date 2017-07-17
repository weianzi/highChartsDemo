$(function() {
    $('#container').highcharts({
        credits: {
            enabled: false, //不显示LOGO

        },
        chart: {
            marginLeft: 100,
        },
        title: {
            text: 'xxxx航空客座位信息表'
        },
        subtitle: {
            text: '数据来源: xxx.com'
        },
        xAxis: {
            labels: {
                enabled: false
            },
            categories: [
                '20170701',
                '20170702',
                '20170703',
                '20170704',
                '20170705',
                '20170706',
                '20170707',
                '20170708',
                '20170709',
                '20170710',
                '20170711',
                '20170712'
            ],
            crosshair: true,
            lineWidth: 0
        },
        yAxis: {
            max: 100, //纵轴的最大值
            min: 0,
            title: {
                text: '百分比'
            },
            labels: {
                formatter: function() { //设置纵坐标值的样式  
                    return this.value + '%';
                },
                y: -4,
            },
            lineWidth: 1,
        },
        legend: { //图例  
            align: 'right', //水平方向位置
            verticalAlign: 'top', //垂直方向位置
            x: 0, //距离x轴的距离
            y: 40 //距离Y轴的距离
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            type: 'spline',
            name: 'CZ本客座',
            data: [88.6, 78.8, 88.5, 83.4, 86.0, 84.5, 85.0, 84.3, 88.2, 85.5, 88.6, 81.3],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[1],
                fillColor: 'white'
            }
        }, {
            type: 'spline',
            name: 'CZ网客座',
            data: [69.9, 81.5, 46.4, 69.2, 74.0, 86.0, 65.6, 48.5, 76.4, 84.1, 65.6, 74.4],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[2],
                fillColor: 'white'
            }
        }, {
            type: 'spline',
            name: 'CZ终客座',
            data: [62.4, 73.2, 84.5, 89.7, 82.6, 85.5, 87.4, 80.4, 67.6, 89.1, 86.8, 31.1],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'column',
            name: '3V',
            data: [49.9, 71.5, 86.4, 89.2, 64.0, 16.0, 15.6, 48.5, 46.4, 84.1, 85.6, 54.4]
        }, {
            type: 'column',
            name: 'CA',
            data: [33.6, 48.8, 68.5, 33.4, 16.0, 24.5, 35.0, 44.3, 21.2, 53.5, 76.6, 72.3]
        }, {
            type: 'column',
            name: '3V',
            data: [49.9, 71.5, 86.4, 89.2, 64.0, 16.0, 15.6, 48.5, 46.4, 84.1, 85.6, 54.4]
        }]
    });
});