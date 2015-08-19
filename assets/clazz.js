import React from 'react';
import {msg, mixins} from 'iflux';
//数据中心
import appStore from './store';

import Container from './components/container';
import HighChart from './components/highChart';


var Clazz = React.createClass({
    mixins: [mixins.StoreMixin(appStore)],

    /**
     * virtualdom
     */
    render() {

        return (
            <div>
                <Container>
                    <HighChart style={{height: 400 + 'px'}} type="column" title="学校各班级平均成绩对比表" yTitle="分数" seriesName="平均分"
                               legend={false} unit="分" colorByPoint={false} dataLabels={true} xType="category" clickEvent={true} link="#/clazzStu/7887"
                               data={this.state.get('chart5')}
                        />
                </Container>
            </div>
        );
    }
});

module.exports = Clazz;
