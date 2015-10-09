import React from 'react';
import {msg, mixins} from 'iflux';
import appStore from './store';
import {GET_SCH_REPORT, GET_QUERY_ITEM} from './const';

import Container from './components/container';
import HighChart from './components/highChart';

var Area = React.createClass({
    mixins: [mixins.StoreMixin(appStore)],

    componentDidMount() {
        msg.emit(GET_SCH_REPORT, 1);
    },

    /**
     * virtualdom
     */
    render() {
        console.log("area render...")
        return (
            <div>
                <div className="ui segment">
                    <h1 className="ui header">区考试成绩表</h1>
                    <table className="ui celled structured table">
                        <thead>
                        <tr>
                            <th rowSpan="2">学校</th>
                            <th rowSpan="2">平均分</th>
                            <th rowSpan="2">最高分</th>
                            <th rowSpan="2">最低分</th>
                            <th rowSpan="2">优秀率</th>
                            <th rowSpan="2">及格率</th>
                            <th colSpan="5">档次</th>
                        </tr>
                        <tr>
                            <th>A 90-100分</th>
                            <th>B 80-89分</th>
                            <th>C 70-79分</th>
                            <th>D 60-69分</th>
                            <th>E 59分以下</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.getIn(['schReport', 'scoreTable']).map(function (v, k) {
                            return (
                                <tr key={k} id={v.get('schid')}>
                                    <td>
                                        <a href="#/school/987">{v.get('schname')}</a>
                                    </td>
                                    <td>{v.get('ave_score')}</td>
                                    <td>{v.get('max_score')}</td>
                                    <td>{v.get('min_score')}</td>
                                    <td>{v.get('excellence_rate')}%</td>
                                    <td>{v.get('pass_rate')}%</td>
                                    <td>{v.get('alv')}人</td>
                                    <td>{v.get('blv')}人</td>
                                    <td>{v.get('clv')}人</td>
                                    <td>{v.get('dlv')}人</td>
                                    <td>{v.get('elv')}人</td>
                                </tr>
                            )
                        }).toArray()}
                        </tbody>
                        <tfoot>
                        <tr><th colSpan="11">
                            <div className="ui right floated pagination menu">
                                <a className="icon item">上一页</a>
                                <a className="item">1</a>
                                <a className="item">2</a>
                                <a className="item">3</a>
                                <a className="item">4</a>
                                <a className="icon item">下一页</a>
                            </div>
                        </th>
                        </tr></tfoot>
                    </table>
                    <HighChart style={{height: 400 + 'px'}} type="column" title="区属小学总体考试成绩分布情况" yTitle="人数" seriesName="人数"
                               legend={false} unit="人" colorByPoint={false} dataLabels={true} xType="category"
                               data={this.state.getIn(['schReport', 'stuNumChart']).toJS()}
                        />
                    <HighChart style={{height: 400 + 'px'}} type="column" title="区属各学校平均成绩对比表" yTitle="分数" seriesName="平均分"
                               legend={false} unit="分" colorByPoint={true} dataLabels={true} xType="category"
                               data={this.state.getIn(['schReport', 'avgScoreChart']).toJS()}
                        />
                    <HighChart style={{height: 400 + 'px'}} type="column" title="区属各小学成绩分布情况统计表" yTitle="人数" seriesName="人数"
                               legend={true} unit="人" colorByPoint={false} dataLabels={true}
                               xCategories={this.state.getIn(['schReport', 'schScoreChart', 'categories']).toJS()}
                               data={this.state.getIn(['schReport', 'schScoreChart', 'data']).toJS()}
                        />

                </div>
            </div>
        );
    }
});

module.exports = Area;