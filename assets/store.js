import {Store, msg} from 'iflux';
import Immutable from 'immutable';
import {
    GET_SCH_REPORT,
    GET_CLASS_REPORT,
    GET_STU_REPORT,
    GET_QUERY_ITEM,

    FORM_VALUE_CHANGED,

    GET_T_SCH_REPORT,
    GET_T_SCH_KP_REPORT
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

  classReport: {
    scoreTable: [],
    avgScoreChart: [],
    classScoreChart: {
      categories: [],
      data: []
    }
  },

  stuReport: {
    scoreTable: [],
    stuScoreChart: {
      categories: [],
      data: []
    }
  },

  tSchReport: {
    scoreTable: [],
    kpData1: [],
    kpChart1: [],
    kpData2: [],
    kpChart2: []
  },

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

function check(names, o){
  for(var i=0; i<names.length; i++){
    if(!o[names[i]]){
      return false;
    }
  }
  return true;
}

msg.on(GET_SCH_REPORT, (value) => {
  webApi
      .getData(0)
      .done((result) => {
        let data = Immutable.fromJS(result.data);

        let aToE = [0, 0, 0, 0, 0];
        let score = [[], [], [], [], []];
        let categries = [];
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

            categries.push(v.get('schname'));
            score[0].push(a);
            score[1].push(b);
            score[2].push(c);
            score[3].push(d);
            score[4].push(e);
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
                data: score[0]
              }, {
                name: "B 80-89分",
                data: score[1]
              }, {
                name: "C 70-79分",
                data: score[2]
              }, {
                name: "D 60-69分",
                data: score[3]
              }, {
                name: "E 59分以下",
                data: score[4]
              }]);

        let schReport = Immutable.fromJS({
          scoreTable: data,
          stuNumChart: stuNumChart,
          avgScoreChart: avgScoreChart,
          schScoreChart: {
            categories: Immutable.fromJS(categries),
            data: schScoreChart
          }
        })

        appStore.cursor().set('schReport', schReport);
      });
});

msg.on(GET_CLASS_REPORT, (value) => {
  webApi
      .getData(1)
      .done((result) => {
        let data = Immutable.fromJS(result.data);

        let score = [[], [], [], [], []];
        let categries = [];
        let avgScoreChart = data.map(function (v, i) {
          categries.push(v.get('classname'));
          score[0].push(getIntWithDefault(v.get('a_level')));
          score[1].push(getIntWithDefault(v.get('b_level')));
          score[2].push(getIntWithDefault(v.get('c_level')));
          score[3].push(getIntWithDefault(v.get('d_level')));
          score[4].push(getIntWithDefault(v.get('e_level')));

          return {
            name: v.get('classname'),
            y: parseFloat(v.get('avg_score'))
          }
        });

        let classScoreChart = Immutable.fromJS([{
          name: "A 90-100分",
          data: score[0]
        }, {
          name: "B 80-89分",
          data: score[1]
        }, {
          name: "C 70-79分",
          data: score[2]
        }, {
          name: "D 60-69分",
          data: score[3]
        }, {
          name: "E 59分以下",
          data: score[4]
        }]);

        let classReport = Immutable.fromJS({
          scoreTable: data,
          avgScoreChart: avgScoreChart,
          classScoreChart: {
            categories: Immutable.fromJS(categries),
            data: classScoreChart
          }
        })

        appStore.cursor().set('classReport', classReport);
      });
});

msg.on(GET_STU_REPORT, (value) => {
  webApi
      .getData(2)
      .done((result) => {
        let data = Immutable.fromJS(result.data);

        data = data.map(function (v, i) {
          let score = getIntWithDefault(v.get('score'));
          let level = 'A';
          if(score >= 90){
            level = 'A';
          }else if(score >= 80 && score < 90){
            level = 'B';
          }else if(score >= 70 && score < 80){
            level = 'C';
          }else if(score >= 60 && score < 70){
            level = 'D';
          }else{
            level = 'E';
          }
          v = v.set('level', level);
          return v;
        });

        let stuReport = Immutable.fromJS({
          scoreTable: data,
          stuScoreChart: {
            categories: [],
            data: []
          }
        })

        appStore.cursor().set('stuReport', stuReport);
      });
});

msg.on(GET_T_SCH_REPORT, (value) => {
  webApi
      .getData(5)
      .done((result) => {
        let data = Immutable.fromJS(result.data);

        let tSchReport = Immutable.fromJS({
          scoreTable: data
        })

        appStore.cursor().set('tSchReport', tSchReport);
      });
});

msg.on(GET_T_SCH_KP_REPORT, (value) => {
  webApi
      .getData(6)
      .done((result) => {
        let data = Immutable.fromJS(result.data);

        appStore.cursor().setIn(['tSchReport', 'kpData1'], data);
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
