import React from 'react';
import {msg, mixins} from 'iflux';
//数据中心
import appStore from './store';

import Container from './components/container';
import Table from './components/table';
import HighChart from './components/highChart';


var App = React.createClass({
    mixins: [mixins.StoreMixin(appStore)],

    /**
     * virtualdom
     */
    render() {
        var store = appStore.data();

        return (
            <div>
                <Container>
                    <Table />
                    <HighChart style={{height: 400 + 'px'}} type="column" title="区属小学总体考试成绩分布情况" yTitle="人数" seriesName="人数"
                               legend={false} unit="人" colorByPoint={false} dataLabels={true}
                               data={store.get('chart1')}
                        />
                    <HighChart style={{height: 400 + 'px'}} type="column" title="区属各学校平均成绩对比表" yTitle="分数" seriesName="平均分"
                               legend={false} unit="分" colorByPoint={true} dataLabels={true}
                               data={store.get('chart2')}
                        />
                </Container>
            </div>
        );
    }
});


//render
React.render(<App />, document.body);
