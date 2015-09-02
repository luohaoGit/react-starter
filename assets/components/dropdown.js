import React from 'react/addons';
let PureRenderMixin = React.addons.PureRenderMixin;
import {FORM_VALUE_CHANGED} from '../const';
import {msg} from 'iflux';

var Dropdown = React.createClass({
	mixins: [PureRenderMixin],

	getDefaultProps() {
		return {
			keyStr: 'key',
			val: 'val',
			init: true
		};
	},

	render() {
		var {className, label, name, data, keyStr, val, ...other} = this.props;

		var onClick = function(e){
			msg.emit(FORM_VALUE_CHANGED, {name: name, val: e.target.id});
		}

		return (
			<div className="ui selection dropdown">
				<i className="dropdown icon"></i>
				<div className="default text">{label}</div>
				<div className="menu">
					{data && data.map(function (v, k) {
						return (
							<div key={k} id={v.get(keyStr)} className="item" onClick={onClick}>
								{v.get(val)}
							</div>
						)
					}).toArray()}
				</div>
			</div>
		);
	},

	componentDidMount() {
		if (typeof this.props.init != 'undefined') {
			if (this.props.init === false) {
				return;
			}

			if (this.props.init === true) {
				$(this.getDOMNode()).dropdown();
			} else {
				$(this.getDOMNode()).dropdown(this.props.init);
			}
		}
	}
});

module.exports = Dropdown;
