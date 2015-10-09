import React from 'react';
import {msg, mixins} from 'iflux';
import appStore from './store';
import {GET_CLASS_REPORT} from './const';

import Container from './components/container';
import HighChart from './components/highChart';

var School = React.createClass({
    mixins: [mixins.StoreMixin(appStore)],

    componentDidMount() {
        console.log(this.props.params);
        msg.emit(GET_CLASS_REPORT, 1);
    },

    /**
     * virtualdom
     */
    render() {
console.log(this.state.getIn(['classReport', 'classScoreChart', 'data']).toJS())
        return (
            <div>
                <Container>
                    <h1 className="ui header">班级考试成绩表</h1>
                    <table className="ui celled structured table">
                        <thead>
                        <tr>
                            <th rowSpan="2">班级</th>
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
                        {   this.state.getIn(['classReport', 'scoreTable']) &&
                            this.state.getIn(['classReport', 'scoreTable']).map(function (v, k) {
                            return (
                                <tr key={k} id={v.get('classid')}>
                                    <td>
                                        <a href="#/stu/7887">{v.get('classname')}</a>
                                    </td>
                                    <td>{v.get('avg_score')}</td>
                                    <td>{v.get('max_score')}</td>
                                    <td>{v.get('min_score')}</td>
                                    <td>{v.get('excellence_rate')}</td>
                                    <td>{v.get('pass_rate')}</td>
                                    <td>{v.get('a_level')}人</td>
                                    <td>{v.get('b_level')}人</td>
                                    <td>{v.get('c_level')}人</td>
                                    <td>{v.get('d_level')}人</td>
                                    <td>{v.get('e_level')}人</td>
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
                    <HighChart style={{height: 400 + 'px'}} type="column" title="第一小学四年级考试成绩分布情况表" yTitle="人数" seriesName="人数"
                               legend={true} unit="人" colorByPoint={false} dataLabels={true} stackColumn={true}
                               xCategories={this.state.getIn(['classReport', 'classScoreChart', 'categories']).toJS()}
                               data={this.state.getIn(['classReport', 'classScoreChart', 'data']).toJS()}
                        />
                    <HighChart style={{height: 400 + 'px'}} type="column" title="学校各班级平均成绩对比表" yTitle="分数" seriesName="平均分"
                               legend={false} unit="分" colorByPoint={false} dataLabels={true} xType="category"
                               data={this.state.getIn(['classReport', 'avgScoreChart']).toJS()}
                        />
                </Container>
            </div>
        );
    }
});

module.exports = School;