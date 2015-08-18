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
			xType: 'category'
		};
	},

	render() {
		return (
			<div style={this.props.style}></div>
		);
	},

	componentDidMount() {
		var {className, type, title, subTitle, xType, yTitle, legend, seriesName, dataLabels,
			headerFormat, pointFormat, colorByPoint, unit, data, ...other} = this.props;

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
				type: xType
			},
			yAxis: {
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
					}
				}
			},

			tooltip: {
				headerFormat: "<span style='font-size:11px'>{series.name}</span><br>",
				pointFormat: "<span style='color:{point.color}'>{point.name}</span>: <b>{point.y}</b>" + unit + "<br/>"
			},

			series: [{
				name: seriesName,
				colorByPoint: colorByPoint,
				data: data.toJS()
			}],

			credits: {
				enabled:false
			}
		});
	}
});

module.exports = HighChart;
