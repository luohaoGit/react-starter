import React from 'react/addons';
let PureRenderMixin = React.addons.PureRenderMixin;

var Table = React.createClass({
	mixins: [PureRenderMixin],

	_getHead(type){
		switch(type)
		{
			case 0:
				break;
			case 1:

				break;
			case 2:

				break;
			case 3:

				break;
			case 4:

				break;
		}
	},

	propTypes: {
		title: React.PropTypes.string,
		page: React.PropTypes.Boolean,
		pageBarSize: React.PropTypes.number,
		type: React.PropTypes.number
	},

	getDefaultProps() {
		return {
			title: '表格',
			page: true,
			pageBarSize: 5,
			type: 0
		};
	},

	render() {
		var {className, title, type,
			footSpan, page, pageBarSize, data, ...other} = this.props;

		let head = this._getHead(type);

		let pageBar = [];
		for (let i = 0; i < pageBarSize; i++) {
			pageBar.push(
				<a className="item">{i}</a>
			);
		}

		return (
			<div>
				<h1 className="ui header">title</h1>
				<table className="ui celled structured table">
					<thead>
					{head}
					</thead>

					<tbody>

					</tbody>

					{page && (
						<tfoot>
						<tr>
							<th colSpan={footSpan}>
								<div className="ui right floated pagination menu">
									<a className="icon item">上一页</a>
									{pageBar}
									<a className="icon item">写一页</a>
								</div>
							</th>
						</tr>
						</tfoot>
					)}
				</table>
			</div>
		);
	}
});

module.exports = Table;
