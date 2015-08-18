import React from 'react/addons';
let PureRenderMixin = React.addons.PureRenderMixin;

var Container = React.createClass({
	mixins: [PureRenderMixin],

	render() {
		return (
			<div className="ui segment">
				{this.props.children}
			</div>
		);
	}
});

module.exports = Container;
