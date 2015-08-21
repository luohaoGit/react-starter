import React from 'react';
import {msg, mixins} from 'iflux';
//数据中心
import appStore from './store';

import Container from './components/container';
import HighChart from './components/highChart';


var TSchoolClazz = React.createClass({
    mixins: [mixins.StoreMixin(appStore)],

    /**
     * virtualdom
     */
    render() {

        return (
            <div>
                <Container>
                    <h1 className="ui header">各班级知识点对比</h1>
                    <table className="ui celled structured table">
                        <thead>
                        <tr>
                            <th></th>
                            <th>知识点</th>
                            <th>分值占比</th>
                            <th>班级均分</th>
                            <th>班级得分率</th>
                            <th>学校平均分</th>
                            <th>学校得分率</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td rowSpan="6">四1班</td><td>知识点1</td><td>87</td><td>95</td><td>67</td><td>67</td><td>34</td>
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
                        <tr><th colSpan="8">
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

                    <HighChart style={{height: 400 + 'px'}} type="column" title="学校各班级知识点得分率比较统计图" yTitle="得分率（%）" seriesName="得分率"
                               legend={true} unit="%" colorByPoint={true} dataLabels={true}
                               xCategories={["知识点1", "知识点2", "知识点3", "知识点4"]} clickEvent={true} link="#/tClazzStu"
                               data={this.state.get('chart10')}
                        />
                </Container>
            </div>
        );
    }
});

module.exports = TSchoolClazz;
