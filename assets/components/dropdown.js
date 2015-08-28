import React from 'react/addons';
let PureRenderMixin = React.addons.PureRenderMixin;

var Dropdown = React.createClass({
	mixins: [PureRenderMixin],

	render() {
		var {className, name, data, ...other} = this.props;

		var onClick = function(e){
			console.log(e.target.id)
		}

		return (
			<div className="ui selection dropdown">
				<i className="dropdown icon"></i>
				<div className="default text">{name}</div>
				<div className="menu">
					{data && data.map(function (v, k) {
						return (
							<div key={v.get('schid')} id={v.get('schid')} className="item" onClick={onClick}>
								{v.get('schname')}
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
