import React from 'react';
import {msg, mixins} from 'iflux';
//数据中心
import appStore from './store';

import Container from './components/container';
import HighChart from './components/highChart';


var TClazzStu = React.createClass({
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
                            <th>个人得分</th>
                            <th>个人得分率</th>
                            <th>班级得分</th>
                            <th>班级得分率</th>
                            <th>学校平均分</th>
                            <th>学校得分率</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td rowSpan="6"><a href="#/tStu">张三</a></td><td>知识点1</td><td>87</td><td>95</td><td>67</td><td>67</td><td>34</td><td>34</td><td>34</td>
                        </tr>
                        <tr>
                            <td>知识点1</td><td>87</td><td>95</td><td>67</td><td>67</td><td>34</td><td>34</td><td>34</td>
                        </tr>
                        <tr>
                            <td>知识点3</td><td>87</td><td>95</td><td>67</td><td>67</td><td>34</td><td>34</td><td>34</td>
                        </tr>
                        <tr>
                            <td>知识点4</td><td>87</td><td>95</td><td>67</td><td>67</td><td>34</td><td>34</td><td>34</td>
                        </tr>
                        <tr>
                            <td>知识点5</td><td>87</td><td>95</td><td>67</td><td>67</td><td>34</td><td>34</td><td>34</td>
                        </tr>
                        <tr>
                            <td>知识点6</td><td>87</td><td>95</td><td>67</td><td>67</td><td>34</td><td>34</td><td>34</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr><th colSpan="9">
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
                </Container>
            </div>
        );
    }
});

module.exports = TClazzStu;