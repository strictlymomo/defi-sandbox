import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class Simple extends PureComponent {
  getOption = () => {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data:['Aave','bZx','Compound', 'DDEX', 'dYdX', 'lendf', 'Maker (SCD)', 'Maker (MCD)'],
    },
    series: [
        {
            name: 'overview',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 335, name: 'Aave'},
                {value: 310, name: 'bZx'},
                {value: 234, name: 'Compound'},
                {value: 135, name: 'DDEX'},
                {value: 1548, name: 'dYdX'},
                {value: 1548, name: 'lendf'},
                {value: 1548, name: 'Maker (SCD)'},
                {value: 1548, name: 'Maker (MCD)'}
            ]
        }
    ]
    };
  };
  render() {
    return (
      <>
        <h1>Overview</h1>
        <ReactEcharts
          option={this.getOption()}
          style={{height: '350px', width: '100%'}}
          className='defi-aggregate' />
      </>
    );
  }
}
