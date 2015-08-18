var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

var Page1 = require('./app_1');
var Page2 = require('./app_2');

var App = React.createClass({

	contextTypes: {
		router: React.PropTypes.func
	},

	render: function () {
		var name = this.context.router.getCurrentPath();
		return (
			<div>
				<ul>
					<li><Link to="page1">Page 1</Link><Link to="page2">Page 2</Link></li>
				</ul>
				<RouteHandler key={name}/>
			</div>
		);
	}
});


var routes = (
	<Route handler={App}>
		<Route name="page1" handler={Page1} />
		<Route name="page2" handler={Page2}>

		</Route>
	</Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.body);
});