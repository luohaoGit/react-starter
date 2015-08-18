import React from 'react';
import {msg, mixins} from 'iflux';
//数据中心
import appStore from './store';

import Container from './components/container';
import HighChart from './components/highChart';

import FixedDataTable from 'fixed-data-table';
let Column = FixedDataTable.Column;
let ColumnGroup = FixedDataTable.ColumnGroup;
let Table = FixedDataTable.Table;

var App = React.createClass({
    mixins: [mixins.StoreMixin(appStore)],

    _rowGetter(index){
        return {
            id: index,
            companyName: "test"
        };
    },

    /**
     * virtualdom
     */
    render() {

        return (
            <div>
                <Container>
                    <Table
                        rowHeight={30}
                        groupHeaderHeight={30}
                        headerHeight={30}
                        rowGetter={this._rowGetter}
                        rowsCount={30}
                        width={1200}
                        height={500}
                        scrollTop={0}
                        scrollLeft={0}
                        overflowX="auto"
                        overflowY="auto">
                        <ColumnGroup fixed={true} label="本地区考试成绩表">
                            <Column label="学校" dataKey="companyName" flexGrow={1} width={100} />
                            <Column label="平均分" dataKey="companyName" flexGrow={1} width={70} />
                            <Column label="最高分" dataKey="companyName" flexGrow={1} width={70} />
                            <Column label="最低分" dataKey="companyName" flexGrow={1} width={70} />
                            <Column label="优秀率" dataKey="companyName" flexGrow={1} width={70} />
                            <Column label="及格率" dataKey="companyName" flexGrow={1} width={70} />
                        </ColumnGroup>
                        <ColumnGroup label="档次">
                            <Column label="A 90-100分" dataKey="companyName" flexGrow={1} width={70} />
                            <Column label="B 80-89分" dataKey="companyName" flexGrow={1} width={70} />
                            <Column label="C 70-79分" dataKey="companyName" flexGrow={1} width={70} />
                            <Column label="D 60-69分" dataKey="companyName" flexGrow={1} width={70} />
                            <Column label="E 59分以下" dataKey="companyName" flexGrow={1} width={70} />
                        </ColumnGroup>
                    </Table>
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


//render
React.render(<App />, document.body);
