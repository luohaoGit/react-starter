var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link, DefaultRoute } = Router;

var Area = require('./area');
var School = require('./school');
var Stu = require('./stu');
var TArea = require('./tArea');
var TAreaSchool = require('./tAreaSchool');
var TSchoolClazz = require('./tSchoolClazz');
var TClazzStu = require('./tClazzStu');
var TStu = require('./tStu');

var App = React.createClass({

	contextTypes: {
		router: React.PropTypes.func
	},

/*	render: function () {
		var name = this.context.router.getCurrentPath();
		return (
			<div>
				<ul>
					<li>
						<Link to="area">区域     </Link>
						<Link to="tArea">t区域     </Link>
					</li>
				</ul>
				<RouteHandler key={name}/>
			</div>
		);
	}*/

	render: function () {
		var name = this.context.router.getCurrentPath();
		return (
			<div>
				<RouteHandler key={name}/>
			</div>
		);
	}
});


var routes = (
	<Route handler={App}>
		<Route name="area" handler={Area} />

		<Route name="school/:id" handler={School} />

		<Route name="stu/:id" handler={Stu} />

		<Route name="tArea" handler={TArea} />
		<Route name="tAreaSchool" handler={TAreaSchool} />
		<Route name="tSchoolClazz" handler={TSchoolClazz} />
		<Route name="tClazzStu" handler={TClazzStu} />
		<Route name="tStu" handler={TStu} />
	</Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.body);
});