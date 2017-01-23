$(document).ready(function() {
    $("#b1").click(function() {
        $(".botox").show();
        $(".juverdam").hide();
        $(".latisee").hide();
        $(".natrelle").hide();
        $(".vivite").hide();
    });

    $("#b2").click(function() {
        $(".botox").hide();
        $(".juverdam").show();
        $(".natrelle").hide();
        $(".vivite").hide();
        $(".latisee").hide();

    });
    $("#b3").click(function() {
        $(".botox").hide();
        $(".juverdam").hide();
        $(".latisee").show();
        $(".natrelle").hide();
        $(".vivite").hide();

    });
    $("#b4").click(function() {
        $(".natrelle").show();
        $(".botox").hide();
        $(".juverdam").hide();
        $(".latisee").hide();
        $(".vivite").hide();
    });

    $("#b5").click(function() {
        $(".natrelle").hide();
        $(".botox").hide();
        $(".juverdam").hide();
        $(".latisee").hide();
        $(".vivite").show();
    });
});


$(function() {
    Highcharts.chart('description', {
        chart: {
            type: 'column'
        },

        title: {
            text: 'Current Level'
        },

        xAxis: {
            categories: ['Silver', 'Gold', 'Platinum', 'Platinum-plus', 'Diamond']
        },

        yAxis: {
            // min: 0,
            title: {
                text: 'Total Points'
            },

            stackLabels: {
                enabled: false,
                style: {
                    // fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'red'
                }
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [{
            name: 'Required %',
            data: [70, 30, 40, 60, 40]
        },
            {
            name: 'Present %',
            data: [40, 50, 30, 30, 30]
        }, 
            {
            name: 'Average %',
            data: [55, 40, 45, 40, 50]
        }]
    });
});


(function() {

    function createCanvas(divName) {

        var div = document.getElementById(divName);
        var canvas = document.createElement('canvas');
        div.appendChild(canvas);
        if (typeof G_vmlCanvasManager != 'undefined') {
            canvas = G_vmlCanvasManager.initElement(canvas);
        }
        var ctx = canvas.getContext("2d");
        return ctx;
    }

    var ctx = createCanvas("graphDiv1");

    var graph = new BarGraph(ctx);
    graph.maxValue = 30;
    graph.margin = 2;
    graph.colors = ["#917fb5", "#0a77a6", "#0ca678", "#82a60d"];
    graph.xAxisLabelArr = ["Silver", "Gold", "Platinum", "PlatinumPlus"];
    setInterval(function() {
        graph.update([Math.random() * 30, Math.random() * 30, Math.random() * 30, Math.random() * 30]);
    }, 1000);
}());


$(function() {

    Highcharts.chart('container', {
        chart: {
            type: 'pyramid',
            marginRight: 100
        },

        title: {
            text: 'Points in level',
            x: -50
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                }
            }
        },
        legend: {
            enabled: false
        },
        
        series: [{
            name: 'Unique users',
            data: [
                ['Silver', 1200],
                ['Gold', 400],
                ['Platinum', 300],
                ['Platinum plus', 400],
                ['Diamond', 700]
            ]
        }]
    });
});