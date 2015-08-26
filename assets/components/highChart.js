import React from 'react/addons';
let PureRenderMixin = React.addons.PureRenderMixin;

var HighChart = React.createClass({
	mixins: [PureRenderMixin],

	propTypes: {
		type: React.PropTypes.string.isRequired,
		title: React.PropTypes.string.isRequired,
		yTitle: React.PropTypes.string.isRequired
	},

	getDefaultProps() {
		return {
			clickEvent: false,
			stackColumn: false,
			xType: "category"
		};
	},

	render() {
		console.log("highchart render..." + this.props.title);
		return (
			<div style={this.props.style}></div>
		);
	},

	componentDidMount() {
		this.renderChart();
	},
	componentDidUpdate() {
		this.renderChart();
	},

	renderChart() {
		var {className, type, title, subTitle, xType, yTitle, legend, seriesName, dataLabels,
			stackColumn, clickEvent, xCategories, colorByPoint, unit, data,
			link, ...other} = this.props;

		var series = [{
			name: seriesName,
			colorByPoint: colorByPoint,
			data: data
		}];

		if(xCategories && xCategories.length > 0){
			series = data;
		}

		var events = {}
		if(clickEvent){
			events.click = function(e) {
				//alert(e.point.category);
				var a = document.createElement('a');
				a.href = link;
				a.click();
			}
		}

		var chartConfig = {
			chart: {
				type: type
			},
			title: {
				text: title
			},
			subtitle: {
				text: subTitle
			},
			xAxis: {
				type: xType,
				categories: xCategories
			},
			yAxis: {
				min: 0,
				title: {
					text: yTitle
				}
			},
			legend: {
				enabled: legend
			},
			plotOptions: {
				series: {
					borderWidth: 0,
					dataLabels: {
						enabled: dataLabels
					},
					cursor: 'pointer',
					events: events
				}
			},

			tooltip: {
				headerFormat: "<span style='font-size:11px'>{series.name}</span><br>",
				pointFormat: "<span style='color:{point.color}'>{point.name}</span>: <b>{point.y}</b>" + unit + "<br/>"
			},

			series: series,

			credits: {
				enabled:false
			}
		}

		if(stackColumn){
			chartConfig.plotOptions.column = {
				stacking: 'normal',
				dataLabels: {
					enabled: true,
					color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
					style: {
						textShadow: '0 0 3px black'
					}
				}
			};
			chartConfig.tooltip.formatter = function () {
				return '<b>' + this.x + '</b><br/>' +
					this.series.name + ': ' + this.y + '<br/>' +
					'总数: ' + this.point.stackTotal;
			}
		}

		$(React.findDOMNode(this)).highcharts(chartConfig);
	}
});

module.exports = HighChart;
