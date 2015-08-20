var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

var Area = require('./area');
var School = require('./school');
var SchoolClass = require('./schoolClass');
var Clazz = require('./clazz');
var ClazzStu = require('./clazzStu');
var TArea = require('./tArea');
var TAreaSchool = require('./tAreaSchool');

var App = React.createClass({

	contextTypes: {
		router: React.PropTypes.func
	},

	render: function () {
		var name = this.context.router.getCurrentPath();
		return (
			<div>
				<ul>
					<li>
						<Link to="area">区域     </Link>
						<Link to="school">学校     </Link>
						<Link to="clazz">班级     </Link>
						<Link to="tArea">t区域     </Link>
					</li>
				</ul>
				<RouteHandler key={name}/>
			</div>
		);
	}
});


var routes = (
	<Route handler={App}>
		<Route name="area" handler={Area} />
		<Route name="school" handler={School}/>
		<Route name="schoolClass/:id" handler={SchoolClass} />
		<Route name="clazz" handler={Clazz} />
		<Route name="clazzStu/:id" handler={ClazzStu} />

		<Route name="tArea" handler={TArea} />
		<Route name="tAreaSchool" handler={TAreaSchool} />
	</Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.body);
});