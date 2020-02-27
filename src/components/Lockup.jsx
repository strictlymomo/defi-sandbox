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
				data: ['Aave', 'bZx', 'Compound', 'DDEX', 'dYdX', 'lendf', 'Maker (SCD)', 'Maker (MCD)'],
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
						{ value: 335, name: 'Aave' },
						{ value: 310, name: 'bZx' },
						{ value: 234, name: 'Compound' },
						{ value: 135, name: 'DDEX' },
						{ value: 1548, name: 'dYdX' },
						{ value: 1548, name: 'lendf' },
						{ value: 1548, name: 'Maker (SCD)' },
						{ value: 1548, name: 'Maker (MCD)' }
					]
				}
			]
		};
	};

	render() {

		let data = [
			{ value: 335, change: 10, name: 'Aave' },
			{ value: 310, change: 10, name: 'bZx' },
			{ value: 234, change: 10, name: 'Compound' },
			{ value: 135, change: 10, name: 'DDEX' },
			{ value: 1548, change: 10, name: 'dYdX' },
			{ value: 1548, change: 10, name: 'lendf' },
			{ value: 1548, change: 10, name: 'Maker (SCD)' },
			{ value: 1548, change: 10, name: 'Maker (MCD)' }
		];

		let items = [];

		for (const [index, datum] of data.entries()) {
			items.push(<tr key={index}>
				<td>{datum.name}</td>
				<td>{datum.value}</td>
				<td>{datum.change}%</td>
			</tr>)
		}

		return (
			<>
				<h1>Overview</h1>
				<ReactEcharts
					ref={(e) => { this.echarts_react = e; }}
					option={this.getOption()}
					style={{ height: '350px', width: '100%' }}
					className='defi-aggregate' />
				<table>
					<thead>
						<tr>
							<th>Platform</th>
							<th>ETH Locked</th>
							<th>24hChange</th>
						</tr>
					</thead>
					<tbody>
						{items}
					</tbody>
				</table>
			</>
		);
	}

	mouseOver = (dataIndex) => {
		this.pie_chart.dispatchAction({
			type: 'highlight',
			dataIndex: dataIndex,
		})
	};

	mouseOut = (dataIndex) => {
		this.pie_chart.dispatchAction({
			type: 'downplay',
			dataIndex: dataIndex,
		})
	};
}