import React from 'react/addons';
import Radio from './radio';
let PureRenderMixin = React.addons.PureRenderMixin;

var RadioGourp = React.createClass({
	mixins: [PureRenderMixin],

	getDefaultProps() {
		return {
			keyStr: 'key',
			val: 'val',
			init: true
		};
	},

	render() {
		var {className, name, data, init, val, keyStr, ...other} = this.props;

		return (
			<div>
				{data && data.map(function (v, k) {
					return (
						<Radio init={init} name={name} id={v.get(keyStr)} val={v.get(val)}></Radio>
					)
				}).toArray()}
			</div>
		);
	}
});

module.exports = RadioGourp;
