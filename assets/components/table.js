import React from 'react/addons';
let PureRenderMixin = React.addons.PureRenderMixin;

var Table = React.createClass({
	mixins: [PureRenderMixin],

	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	getDefaultProps() {
		return {
			title: '表格'
		};
	},

	render() {
		var {className, title, header, colums, rows, data, ...other} = this.props;
		return (
			<table className="ui celled structured table">
				<thead>
				<tr><th colSpan="11">{title}</th></tr>
				<tr>
					<th rowSpan="2">学校</th>
					<th rowSpan="2">平均分</th>
					<th rowSpan="2">最高分</th>
					<th rowSpan="2">最低分</th>
					<th rowSpan="2">优秀率</th>
					<th rowSpan="2">及格率</th>
					<th colSpan="5">档次</th>
				</tr>
				<tr>
					<th>A 90-100分</th>
					<th>B 80-89分</th>
					<th>C 70-19分</th>
					<th>D 60-69分</th>
					<th>E 59分以下</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>第一小学</td>
					<td>83</td>
					<td>100</td>
					<td>53</td>
					<td>87%</td>
					<td>95%</td>
					<td>569</td><td>597</td><td>377</td><td>270</td><td>54</td>
				</tr>
				</tbody>
			</table>
		);
	}
});

module.exports = Table;
