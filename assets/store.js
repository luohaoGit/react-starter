import {Store, msg} from 'iflux';
import Immutable from 'immutable';
import {
    GET_SCH_REPORT,
    GET_CLASS_REPORT,
    GET_STU_REPORT
} from './const';

import webApi from './webapi';

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
let appStore = Store({

  schReport: [],

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
  }],

  chart9: [{
    name: '第一小学',
    data: [82.73]
  }, {
    name: '第二小学',
    data: [80.92]
  }],

  chart10: [{
    name: '四1班',
    data: [49, 71, 52]
  }, {
    name: '四2班',
    data: [83, 78, 98]
  }, {
    name: '校平均',
    data: [48, 38, 39]
  }],

  chart11: [{
    name: '张三',
    data: [7.0, 6.9, 9.5, 14.5]
  }],

  chart12: [{
    name: '个人得分率',
    data: [49, 71, 106, 129]
  }, {
    name: '班级得分率',
    data: [83, 78, 98, 93]
  }, {
    name: '学校得分率',
    data: [48, 38, 39, 41]
  }]
});


export default appStore;


msg.on(GET_SCH_REPORT, (value) => {
  webApi
      .getSchReport()
      .done((result) => {
        appStore
            .cursor()
            .set('schReport', Immutable.fromJS(result.data));
      });
});



/*
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
