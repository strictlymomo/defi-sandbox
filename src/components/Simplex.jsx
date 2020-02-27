import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';
// import protocols from '../data/protocols';

export default class Simple extends PureComponent {
  getOption = () => {
    return {
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
      },
      },
      legend: {
        data:['Aave','bZx','Compound', 'DDEX', 'dYdX', 'lendf', 'Maker (SCD)', 'Maker (MCD)'],
        orient: 'vertical',
        top: 20,
        right: 10,
        bottom: 20,
      },
      grid: {
        left: '3%',
        right: '10%', // set to accommodate legend
        bottom: '0',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'Aave',
          type:'bar',
          stack: 'platform',
          areaStyle: {normal: {}},
          data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
          name:'bZx',
          type:'bar',
          stack: 'platform',
          areaStyle: {normal: {}},
          data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
          name:'Compound',
          type:'bar',
          stack: 'platform',
          areaStyle: {normal: {}},
          data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
          name:'DDEX',
          type:'bar',
          stack: 'platform',
          areaStyle: {normal: {}},
          data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
          name:'dYdX',
          type:'bar',
          stack: 'platform',
          areaStyle: {normal: {}},
          data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
          name:'lendf',
          type:'bar',
          stack: 'platform',
          areaStyle: {normal: {}},
          data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
          name:'Maker (SCD)',
          type:'bar',
          stack: 'platform',
          areaStyle: {normal: {}},
          data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
          name:'Maker (MCD)',
          type:'bar',
          stack: 'platform',
          areaStyle: {normal: {}},
          data:[150, 232, 201, 154, 190, 330, 410]
        }
      ]
    };
  };
  render() {
    return (
      <>
        <h1>Defi Supplied And Borrowed</h1>
        <ReactEcharts
          option={this.getOption()}
          style={{height: '350px', width: '100%'}}
          className='defi-aggregate' />
      </>
    );
  }
}
