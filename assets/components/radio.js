import React from 'react/addons';
let PureRenderMixin = React.addons.PureRenderMixin;

var Radio = React.createClass({
	mixins: [PureRenderMixin],

	render() {
		var {className, name, ...other} = this.props;
		return (
			<div className="ui radio checkbox">
				<input type="radio" name="fruit" className="hidden" />
				<label>第一学期</label>
			</div>
		);
	},

	componentDidMount() {
		if (typeof this.props.init != 'undefined') {
			if (this.props.init === false) {
				return;
			}

			if (this.props.init === true) {
				$(this.getDOMNode()).checkbox();
			} else {
				$(this.getDOMNode()).checkbox(this.props.init);
			}
		}
	}
});

module.exports = Radio;
