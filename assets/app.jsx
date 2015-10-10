var React = require('react');

var Area = require('./area');
var School = require('./school');
var Stu = require('./stu');
var TArea = require('./tArea');
var TAreaSchool = require('./tAreaSchool');
var TSchoolClazz = require('./tSchoolClazz');
var TClazzStu = require('./tClazzStu');
var TStu = require('./tStu');


/**
 * TodoApp
 */
var App = React.createClass({
  mixins: [StoreMixin(appStore)],

  render() {
    return (
      <div>

      </div>
    );
  }
});


//render
React.render(<App />, document.body);
