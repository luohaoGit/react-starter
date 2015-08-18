import React from 'react';
import {msg, mixins} from 'iflux';
//数据中心
import appStore from './store';

import Container from './components/container';
import HighChart from './components/highChart';


var Page2 = React.createClass({
    mixins: [mixins.StoreMixin(appStore)],

    /**
     * virtualdom
     */
    render() {

        return (
            <div>
                <Container>
                    <HighChart style={{height: 400 + 'px'}} type="column" title="区属各小学成绩分布情况统计表" yTitle="人数" seriesName="人数"
                               legend={true} unit="人" colorByPoint={false} dataLabels={true}
                               xCategories={["第一小学", "第二小学", "第三小学", "第四小学"]} clickEvent={true}
                               data={this.state.get('chart3')}
                        />
                </Container>
            </div>
        );
    }
});

module.exports = Page2;
