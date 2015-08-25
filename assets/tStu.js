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
                    <HighChart style={{height: 400 + 'px'}} type="" title="个人知识点得分率统计图" yTitle="得分率（%）" seriesName="得分率"
                               legend={false} unit="%" colorByPoint={true} dataLabels={true}
                               xCategories={["知识点1", "知识点2", "知识点3", "知识点4"]}
                               data={this.state.get('chart11').toJS()}
                        />

                    <HighChart style={{height: 400 + 'px'}} type="column" title="个人识点得分率比较统计图" yTitle="得分率（%）" seriesName="得分率"
                               legend={true} unit="%" colorByPoint={true} dataLabels={true}
                               xCategories={["知识点1", "知识点2", "知识点3", "知识点4"]}
                               data={this.state.get('chart12').toJS()}
                        />
                </Container>
            </div>
        );
    }
});

module.exports = TSchoolClazz;
