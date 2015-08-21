import React from 'react';
import {msg, mixins} from 'iflux';
//数据中心
import appStore from './store';

import Container from './components/container';
import HighChart from './components/highChart';


var TAreaSchool = React.createClass({
    mixins: [mixins.StoreMixin(appStore)],

    /**
     * virtualdom
     */
    render() {

        return (
            <div>
                <Container>
                    <HighChart style={{height: 400 + 'px'}} type="column" title="同一知识点所有学校对比统计" yTitle="得分率（%）" seriesName="得分率"
                               legend={true} unit="%" colorByPoint={false} dataLabels={true}
                               xCategories={["利用商不变的规律进行简便计算", "知识点1", "知识点2", "知识点3"]} clickEvent={true} link="#/tSchoolClazz"
                               data={this.state.get('chart12')}
                        />
                </Container>
            </div>
        );
    }
});

module.exports = TAreaSchool;
