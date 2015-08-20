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
  }],

  chart3: [{
    name: 'A 90-100分',
    data: [49, 71, 106, 129]
  }, {
    name: 'B 80-89分',
    data: [83, 78, 98, 93]
  }, {
    name: 'C 70-79分',
    data: [48, 38, 39, 41]
  }, {
    name: 'D 60-69分',
    data: [42, 33, 34, 39]
  }, {
    name: 'E 59分以下',
    data: [42, 33, 34, 39]
  }],

  chart4: [{
    name: 'A 90-100分',
    data: [49, 71, 106, 129]
  }, {
    name: 'B 80-89分',
    data: [83, 78, 98, 93]
  }, {
    name: 'C 70-79分',
    data: [48, 38, 39, 41]
  }, {
    name: 'D 60-69分',
    data: [42, 33, 34, 39]
  }, {
    name: 'E 59分以下',
    data: [42, 33, 34, 39]
  }],

  chart5: [{
    name: "四一班",
    y: 83
  }, {
    name: "四二班",
    y: 82
  }, {
    name: "四三班",
    y: 86
  }, {
    name: "四四班",
    y: 81
  }],

  chart6: [{
    name: "A 90-100分",
    y: 25
  }, {
    name: "B 80-89分",
    y: 18
  }, {
    name: "C 70-79分",
    y: 5
  }, {
    name: "D 60-69分",
    y: 2
  }, {
    name: "E 59分以下",
    y: 1
  }],
  chart7: [{
    name: "第一小学",
    y: 85.82
  }, {
    name: "第二小学",
    y: 85.91
  }, {
    name: "区平均得分率",
    y: 85.87
  }],

  chart8: [{
    name: '第一小学',
    data: [49, 71, 106, 129]
  }, {
    name: '第二小学',
    data: [83, 78, 98, 93]
  }, {
    name: '区平均',
    data: [48, 38, 39, 41]
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
