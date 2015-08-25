import React from 'react';
import {msg, mixins} from 'iflux';
//数据中心
import appStore from './store';

import Container from './components/container';
import HighChart from './components/highChart';

var SchoolClass = React.createClass({
    mixins: [mixins.StoreMixin(appStore)],

    componentDidMount: function () {
        console.log(this.props.params)
    },

    /**
     * virtualdom
     */
        render() {

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
                            <th>E 59分</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>四1班</td><td>82</td><td>100</td><td>86</td><td>87%</td><td>95%</td><td>569</td><td>597</td><td>377</td><td>270</td><td>54</td>
                        </tr>
                        <tr>
                            <td>四2班</td><td>83</td><td>100</td><td>53</td><td>87%</td><td>95%</td><td>569</td><td>597</td><td>377</td><td>270</td><td>54</td>
                        </tr>
                        <tr>
                            <td>四3班</td><td>83</td><td>100</td><td>53</td><td>87%</td><td>95%</td><td>569</td><td>597</td><td>377</td><td>270</td><td>54</td>
                        </tr>
                        <tr>
                            <td>四4班</td><td>83</td><td>100</td><td>53</td><td>87%</td><td>95%</td><td>569</td><td>597</td><td>377</td><td>270</td><td>54</td>
                        </tr>
                        <tr>
                            <td>四5班</td><td>83</td><td>100</td><td>53</td><td>87%</td><td>95%</td><td>569</td><td>597</td><td>377</td><td>270</td><td>54</td>
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
                    </table>
                    <HighChart style={{height: 400 + 'px'}} type="column" title="第一小学四年级考试成绩分布情况表" yTitle="人数" seriesName="人数"
                               legend={true} unit="人" colorByPoint={false} dataLabels={true} stackColumn={true}
                               xCategories={["四一班", "四二班", "四三班", "四四班"]}  data={this.state.get('chart4').toJS()}
                        />
                </Container>
            </div>
        );
    }
});

module.exports = SchoolClass;