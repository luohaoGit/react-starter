import React from 'react/addons';
let PureRenderMixin = React.addons.PureRenderMixin;
import Router from 'react-router';

var HighChart = React.createClass({
	mixins: [PureRenderMixin],

	propTypes: {
		type: React.PropTypes.string.isRequired,
		title: React.PropTypes.string.isRequired,
		yTitle: React.PropTypes.string.isRequired
	},

	getDefaultProps() {
		return {
			clickEvent: false
		};
	},

	render() {
		return (
			<div style={this.props.style}></div>
		);
	},

	componentDidMount() {
		var {className, type, title, subTitle, xType, yTitle, legend, seriesName, dataLabels,
			clickEvent, xCategories, colorByPoint, unit, data, ...other} = this.props;

		var series = [{
			name: seriesName,
			colorByPoint: colorByPoint,
			data: data.toJS()
		}];

		if(xCategories && xCategories.length > 0){
			series = data.toJS();
		}

		var events = {}

		if(clickEvent){
			events.click = function(e) {
				//alert(e.point.category);
				var a = document.createElement('a');
				a.href = "#/page1";
				a.click();
			}
		}

		$(React.findDOMNode(this)).highcharts({
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
		});
	}
});

module.exports = HighChart;
