import React from 'react';
import {msg, mixins} from 'iflux';
import appStore from './store';
import {GET_CLASS_REPORT} from './const';

import Container from './components/container';
import HighChart from './components/highChart';


var School = React.createClass({
    mixins: [mixins.StoreMixin(appStore)],

    componentDidMount() {
        msg.emit(GET_CLASS_REPORT, 1);
    },

    /**
     * virtualdom
     */
    render() {
        return (
            <div>
                <Container>
                    <HighChart style={{height: 400 + 'px'}} type="column" title="区属各小学成绩分布情况统计表" yTitle="人数" seriesName="人数"
                               legend={true} unit="人" colorByPoint={false} dataLabels={true}
                               xCategories={this.state.getIn(['schReport', 'schScoreChart', 'categories']).toJS()}
                               clickEvent={true} link="#/school/schoolClass/987"
                               data={this.state.getIn(['schReport', 'schScoreChart', 'data']).toJS()}
                        />
                </Container>
            </div>
        );
    }
});

module.exports = School;
