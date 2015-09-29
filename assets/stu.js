import React from 'react';
import {msg, mixins} from 'iflux';
import appStore from './store';
import {GET_STU_REPORT} from './const';

import Container from './components/container';
import HighChart from './components/highChart';

var ClazzStu = React.createClass({
    mixins: [mixins.StoreMixin(appStore)],

    componentDidMount() {
        console.log(this.props.params);
        msg.emit(GET_STU_REPORT, 1);
    },

    /**
     * virtualdom
     */
    render() {
        return (
            <div>
                <Container>
                    <h1 className="ui header">学生考试成绩表</h1>
                    <table className="ui celled structured table">
                        <thead>
                        <tr>
                            <th rowSpan="2">学生</th>
                            <th rowSpan="2">得分</th>
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
                            <th>E 59分</th>
                        </tr>
                        </thead>
                        <tbody>
                        {   this.state.getIn(['stuReport', 'scoreTable']) &&
                        this.state.getIn(['stuReport', 'scoreTable']).map(function (v, k) {
                            return (
                                <tr key={k} id={v.get('stuid')}>
                                    <td>{v.get('stuname')}</td>
                                    <td>{v.get('score')}</td>
                                    <td>{v.get('max_score')}</td>
                                    <td>{v.get('min_score')}</td>
                                    <td>{v.get('excellence_rate')}</td>
                                    <td>{v.get('pass_rate')}</td>
                                    <td>{v.get('level') == 'A' ? '√' : ''}</td>
                                    <td>{v.get('level') == 'B' ? '√' : ''}</td>
                                    <td>{v.get('level') == 'C' ? '√' : ''}</td>
                                    <td>{v.get('level') == 'D' ? '√' : ''}</td>
                                    <td>{v.get('level') == 'E' ? '√' : ''}</td>
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
                    <HighChart style={{height: 400 + 'px'}} type="column" title="四一班学生考试成绩分布情况表" yTitle="人数" seriesName="人数"
                               legend={false} unit="人" colorByPoint={false} dataLabels={true} xType="category"
                               data={this.state.get('chart6').toJS()}
                        />
                </Container>
            </div>
        );
    }
});

module.exports = ClazzStu;