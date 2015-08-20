import React from 'react';
import {msg, mixins} from 'iflux';
//数据中心
import appStore from './store';

import Container from './components/container';
import HighChart from './components/highChart';

var Area = React.createClass({
    mixins: [mixins.StoreMixin(appStore)],

    /**
     * virtualdom
     */
    render() {

        return (
            <div>
                <Container>
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
                            <th>E 59分</th>
                        </tr>
                        <tbody>
                        <tr>
                            <td>区平均</td><td>83</td><td>100</td><td>53</td><td>87%</td><td>95%</td><td>569</td><td>597</td><td>377</td><td>270</td><td>54</td>
                        </tr>
                        <tr>
                            <td>第一小学</td><td>82</td><td>100</td><td>86</td><td>87%</td><td>95%</td><td>569</td><td>597</td><td>377</td><td>270</td><td>54</td>
                        </tr>
                        <tr>
                            <td>第二小学</td><td>83</td><td>100</td><td>53</td><td>87%</td><td>95%</td><td>569</td><td>597</td><td>377</td><td>270</td><td>54</td>
                        </tr>
                        <tr>
                            <td>第三小学</td><td>83</td><td>100</td><td>53</td><td>87%</td><td>95%</td><td>569</td><td>597</td><td>377</td><td>270</td><td>54</td>
                        </tr>
                        <tr>
                            <td>第四小学</td><td>83</td><td>100</td><td>53</td><td>87%</td><td>95%</td><td>569</td><td>597</td><td>377</td><td>270</td><td>54</td>
                        </tr>
                        <tr>
                            <td>第五小学</td><td>83</td><td>100</td><td>53</td><td>87%</td><td>95%</td><td>569</td><td>597</td><td>377</td><td>270</td><td>54</td>
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
                                <a className="icon item">写一页</a>
                            </div>
                        </th>
                        </tr></tfoot>
                        </thead>
                    </table>
                    <HighChart style={{height: 400 + 'px'}} type="column" title="区属小学总体考试成绩分布情况" yTitle="人数" seriesName="人数"
                               legend={false} unit="人" colorByPoint={false} dataLabels={true} xType="category"
                               data={this.state.get('chart1')}
                        />
                    <HighChart style={{height: 400 + 'px'}} type="column" title="区属各学校平均成绩对比表" yTitle="分数" seriesName="平均分"
                               legend={false} unit="分" colorByPoint={true} dataLabels={true} xType="category"
                               data={this.state.get('chart2')}
                        />
                </Container>
            </div>
        );
    }
});

module.exports = Area;