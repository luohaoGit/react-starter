import React from 'react/addons';
let PureRenderMixin = React.addons.PureRenderMixin;
import {FORM_VALUE_CHANGED} from '../const';
import {msg} from 'iflux';

var Radio = React.createClass({
	mixins: [PureRenderMixin],

	render() {
		var {className, name, id, val, ...other} = this.props;

		var onClick = function(e){
			msg.emit(FORM_VALUE_CHANGED, {name: name, val: e.target.id});
		}

		return (
			<div className="ui radio checkbox">
				<input type="radio" name={name} className="hidden" />
				<label onClick={onClick} id={id}>{val}</label>
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
