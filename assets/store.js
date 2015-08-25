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

  schReport: {
    scoreTable: [],
    stuNumChart: [],
    avgScoreChart: [],
    schScoreChart: {
      categories: [],
      data: []
    }
  },

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

function getIntWithDefault(v){
  return isNaN(parseInt(v)) ? 0 : parseInt(v);
}

msg.on(GET_SCH_REPORT, (value) => {
  webApi
      .getSchReport()
      .done((result) => {
        let data = Immutable.fromJS(result.data);

        let aToE = [0, 0, 0, 0, 0];
        let schScore = [[], [], [], [], []];
        let schScoreCategries = [];
        let avgScoreChart = data.map(function (v, i) {
          if(i < data.size - 1) {
            let
                a = getIntWithDefault(v.get('alv')),
                b = getIntWithDefault(v.get('blv')),
                c = getIntWithDefault(v.get('clv')),
                d = getIntWithDefault(v.get('dlv')),
                e = getIntWithDefault(v.get('elv'));
            aToE[0] = aToE[0] + a;
            aToE[1] = aToE[1] + b;
            aToE[2] = aToE[2] + c;
            aToE[3] = aToE[3] + d;
            aToE[4] = aToE[4] + e;

            schScoreCategries.push(v.get('schname'));
            schScore[0].push(a);
            schScore[1].push(b);
            schScore[2].push(c);
            schScore[3].push(d);
            schScore[4].push(e);
          }

          return {
            name: v.get('schname'),
            y: parseFloat(v.get('ave_score'))
          }
        });

        let stuNumChart = Immutable.fromJS([{
                name: "A 90-100分",
                y: aToE[0]
              }, {
                name: "B 80-89分",
                y: aToE[1]
              }, {
                name: "C 70-79分",
                y: aToE[2]
              }, {
                name: "D 60-69分",
                y: aToE[3]
              }, {
                name: "E 59分以下",
                y: aToE[4]
              }]);

        let schScoreChart = Immutable.fromJS([{
                name: "A 90-100分",
                data: schScore[0]
              }, {
                name: "B 80-89分",
                data: schScore[1]
              }, {
                name: "C 70-79分",
                data: schScore[2]
              }, {
                name: "D 60-69分",
                data: schScore[3]
              }, {
                name: "E 59分以下",
                data: schScore[4]
              }]);

        let schReport = Immutable.fromJS({
          scoreTable: data,
          stuNumChart: stuNumChart,
          avgScoreChart: avgScoreChart,
          schScoreChart: {
            categories: Immutable.fromJS(schScoreCategries),
            data: schScoreChart
          }
        })

        appStore.cursor().set('schReport', schReport);
      });
});

msg.on(GET_CLASS_REPORT, (value) => {
  webApi
      .getSchReport()
      .done((result) => {
        console.log(result)
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
