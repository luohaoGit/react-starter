import React from 'react';
import {msg, mixins} from 'iflux';
//数据中心
import appStore from './store';
import {GET_T_SCH_REPORT} from './const';

import Container from './components/container';
import HighChart from './components/highChart';

var Area = React.createClass({
    mixins: [mixins.StoreMixin(appStore)],

    componentDidMount() {
        msg.emit(GET_T_SCH_REPORT, 1);
    },

    /**
     * virtualdom
     */
        render() {

        return (
            <div>
                <Container>
                    <h1 className="ui header">区属考试整体知识点及能力点得分率统计表</h1>
                    <table className="ui celled structured table">
                        <thead>
                        <tr>
                            <th></th>
                            <th>知识点\能力点</th>
                            <th>识记</th>
                            <th>理解</th>
                            <th>应用</th>
                            <th>评价</th>
                            <th>分析</th>
                            <th>综合</th>
                            <th>总得分率</th>
                        </tr>
                        <tbody>
                        {this.state.getIn(['tSchReport', 'scoreTable']).map(function (val, k) {
                            var rowSpan = val.get('detail').size;
                            var detail = val.get('detail').map(function(v, k){

                                var firstCol;
                                if(k == 0){
                                    firstCol = <td rowSpan={rowSpan}>{val.get('schname')}</td>;
                                }else{
                                    firstCol = '';
                                }
                                console.log(v.get('scoreDetail'))
                                return (
                                    <tr>
                                        {firstCol}
                                        <td>{v.get('kpname')}</td>
                                        <td>{v.get('scoreDetail').get(0).get('kapScore')}</td>
                                        <td>{v.get('scoreDetail').get(1).get('kapScore')}</td>
                                        <td>{v.get('scoreDetail').get(2).get('kapScore')}</td>
                                        <td>{v.get('scoreDetail').get(3).get('kapScore')}</td>
                                        <td>{v.get('scoreDetail').get(4).get('kapScore')}</td>
                                        <td>{v.get('scoreDetail').get(5).get('kapScore')}</td>
                                        <td>0</td>
                                    </tr>
                                )
                            }).toArray();

                            return (
                                {detail}
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
                        </thead>
                    </table>

                    <h1 className="ui header">区属各小学整体知识点得分率统计表</h1>
                    <table className="ui celled structured table">
                        <thead>
                        <tr>
                            <th>知识点</th>
                            <th>第一小学得分率</th>
                            <th>第二小学得分率</th>
                            <th>区平均分</th>
                        </tr>
                        <tbody>
                        <tr>
                            <td>知识点1</td><td>78.85%</td><td>89.35%</td><td>87.92%</td>
                        </tr>
                        <tr>
                            <td>知识点2</td><td>78.85%</td><td>89.35%</td><td>87.92%</td>
                        </tr>
                        <tr>
                            <td>知识点3</td><td>78.85%</td><td>89.35%</td><td>87.92%</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr><th colSpan="4">
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
                        </thead>
                    </table>

                    <HighChart style={{height: 400 + 'px'}} type="column" title="区属各小学整体知识点得分率统计" yTitle="得分率（%）" seriesName="得分率"
                               legend={false} unit="%" colorByPoint={false} dataLabels={true}
                               data={this.state.get('chart7')}
                        />

                    <table className="ui celled structured table">
                        <thead>
                        <tr>
                            <th></th>
                            <th>知识点</th>
                            <th>分值占比</th>
                            <th>学校均分</th>
                            <th>学校得分率</th>
                            <th>区平均分</th>
                            <th>区得分率</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td rowSpan="6">第一小学</td><td>知识点1</td><td>87</td><td>95</td><td>67</td><td>67</td><td>34</td>
                        </tr>
                        <tr>
                            <td>知识点2</td><td>87</td><td>95</td><td>67</td><td>67</td><td>34</td>
                        </tr>
                        <tr>
                            <td>知识点3</td><td>87</td><td>95</td><td>67</td><td>67</td><td>34</td>
                        </tr>
                        <tr>
                            <td>知识点4</td><td>87</td><td>95</td><td>67</td><td>67</td><td>34</td>
                        </tr>
                        <tr>
                            <td>知识点5</td><td>87</td><td>95</td><td>67</td><td>67</td><td>34</td>
                        </tr>
                        <tr>
                            <td>知识点6</td><td>87</td><td>95</td><td>67</td><td>67</td><td>34</td>
                        </tr>
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

                    <HighChart style={{height: 400 + 'px'}} type="column" title="区属各学校知识点得分率比较统计图" yTitle="得分率（%）" seriesName="得分率"
                               legend={true} unit="%" colorByPoint={true} dataLabels={true}
                               xCategories={["知识点1", "知识点2", "知识点3", "知识点4"]} clickEvent={true} link="#/tAreaSchool"
                               data={this.state.get('chart8').toJS()}
                        />
                </Container>
            </div>
        );
    }
});

module.exports = Area;