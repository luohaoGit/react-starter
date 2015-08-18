import {Store, msg} from 'iflux';
import {
    INPUT_CHANGE,
    TODO_LIST_TOGGLE,
    TODO_LIST_DESTROY,
    TODO_LIST_TOGGLE_ALL,
    TODO_SAVE
} from './const';

/**
 * generate uuid
 */
var uuid = (function() {
  var i = 0;
  return function() {
    return '' + (++i);
  }
})();


/**
 * 整个应用的数据中心
 *
 */
let appStore =  Store({
  table1: {},

  chart1: [{
    name: "A 90-100分",
    y: 569
  }, {
    name: "B 80-89分",
    y: 597
  }, {
    name: "C 70-79分",
    y: 377
  }, {
    name: "D 60-69分",
    y: 270
  }, {
    name: "E 59分以下",
    y: 54
  }],

  chart2: [{
    name: "区平均",
    y: 83
  }, {
    name: "第一小学",
    y: 82
  }, {
    name: "第二小学",
    y: 86
  }, {
    name: "第三小学",
    y: 81
  }, {
    name: "第四小学",
    y: 83
  }]
});


export default appStore;


/*msg.on(INPUT_CHANGE, (value) => {
  appStore.cursor().set('inputValue', value);
});


msg.on(TODO_LIST_TOGGLE, (id) => {
  appStore.cursor().updateIn(['todo', id, 'done'], function(done) {
    return !done;
  })
});


msg.on(TODO_LIST_DESTROY, (id) => {
  appStore.cursor().deleteIn(['todo', id]);
});

msg.on(TODO_LIST_TOGGLE_ALL, (checked) => {
  appStore.cursor().get('todo').withMutations(function(cursor) {
    cursor.forEach(function(_, k) {
      cursor.setIn([k, 'done'], checked);
    })
  });
});


msg.on(TODO_SAVE, (value) => {
  //batch update
  appStore.cursor().withMutations(function(cursor) {
    //clean input text
    cursor.set('inputValue', '');

    //update todo
    var id = uuid();
    cursor.setIn(['todo', id], new Todo({
      id: id,
      text: value,
      done: false
    }));
  });
})*/
