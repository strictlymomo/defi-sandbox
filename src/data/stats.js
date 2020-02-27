import _ from 'lodash';


let protocols = {
	"aave": {
		name: "Aave",
		description: "Open Source and Non-Custodial protocol to earn interest on deposits and borrow assets.",
		url: "https://aave.com/"
	},
	"bzx": {
		name: "bZx",
		description: "A Protocol For Tokenized Margin Trading and Lending",
		url: "https://bzx.network/"
	},
	"compound": {
		name: "Compound",
		description: "Money markets with algorithmically set interest rates based on supply and demand",
		url: "https://compound.finance/"
	},
	"ddex": {
		name: "DDEX",
		description: "Decentralized Margin Trading, Trade with leverage and earn passive income in DeFi.",
		url: "https://ddex.io/"
	},
	"dydx": {
		name: "dYdX",
		description: "Decentralized exchange for margin trading and derivatives",
		url: "https://dydx.exchange/"
	},
	"lendf": {
		name: "Lendf",
		description: "dForce ecosystem project and a money market protocol where allows instant accessibility and liquidity by matching supply and borrowing of any ERC20 compatible assets.",
		url: "https://www.lendf.me/"
	},
	"maker": {
		name: "Maker DAO",
		description: "The world's first unbiased currency. Dai is a stable, decentralized currency that does not discriminate.",
		url: "https://makerdao.com/en/"
	},
	"mcd": {
		name: "Multi-Collateral Dai",
		description: "The world's first unbiased currency. Dai is a stable, decentralized currency that does not discriminate.",
		url: "https://makerdao.com/en/"
	},
}

// export default protocols;

let raw_data = {
	"data": [
		{
			"asset": "eth",
			"outstanding_debt": [
				[
					1582232400,
					"40.2388"
				],
				[
					1582318800,
					"39.6719"
				],
				[
					1582405200,
					"37.3374"
				],
				[
					1582491600,
					"20.0156"
				],
				[
					1582578000,
					"21.4139"
				],
				[
					1582664400,
					"33.2121"
				],
				[
					1582750800,
					"65.8083"
				]
			],
			"protocol": "ddex",
			"supply_volume": [
				[
					1582232400,
					"1572.2099"
				],
				[
					1582318800,
					"1571.822"
				],
				[
					1582405200,
					"1571.3239"
				],
				[
					1582491600,
					"1295.8533"
				],
				[
					1582578000,
					"1295.8547"
				],
				[
					1582664400,
					"1262.1393"
				],
				[
					1582750800,
					"1262.1438"
				]
			]
		},
		{
			"asset": "eth",
			"outstanding_debt": [
				[
					1582232400,
					"11588.9919"
				],
				[
					1582318800,
					"11588.9919"
				],
				[
					1582405200,
					"11588.9919"
				],
				[
					1582491600,
					"11588.9919"
				],
				[
					1582578000,
					"11587.6881"
				],
				[
					1582664400,
					"11586.6818"
				],
				[
					1582750800,
					"11586.6818"
				]
			],
			"protocol": "bzx",
			"supply_volume": [
				[
					1582232400,
					"11589.1185"
				],
				[
					1582318800,
					"11589.0113"
				],
				[
					1582405200,
					"11596.5964"
				],
				[
					1582491600,
					"11589.0767"
				],
				[
					1582578000,
					"11587.7137"
				],
				[
					1582664400,
					"11586.7163"
				],
				[
					1582750800,
					"11586.7458"
				]
			]
		},
		{
			"asset": "eth",
			"outstanding_debt": [
				[
					1582232400,
					"1467.8153"
				],
				[
					1582318800,
					"467.3153"
				],
				[
					1582405200,
					"467.3153"
				],
				[
					1582491600,
					"427.3769"
				],
				[
					1582578000,
					"310.1401"
				],
				[
					1582664400,
					"310.1303"
				],
				[
					1582750800,
					"4.8285"
				]
			],
			"protocol": "lendf",
			"supply_volume": [
				[
					1582232400,
					"28382.7374"
				],
				[
					1582318800,
					"29674.2973"
				],
				[
					1582405200,
					"29642.3735"
				],
				[
					1582491600,
					"29644.4945"
				],
				[
					1582578000,
					"29687.3446"
				],
				[
					1582664400,
					"29717.2751"
				],
				[
					1582750800,
					"34219.7919"
				]
			]
		},
		{
			"asset": "eth",
			"outstanding_debt": [
				[
					1582232400,
					"3018.2006"
				],
				[
					1582318800,
					"3013.9323"
				],
				[
					1582405200,
					"1658.4037"
				],
				[
					1582491600,
					"1660.2248"
				],
				[
					1582578000,
					"1698.6686"
				],
				[
					1582664400,
					"1713.5106"
				],
				[
					1582750800,
					"1436.7183"
				]
			],
			"protocol": "compound",
			"supply_volume": [
				[
					1582232400,
					"500702.3275"
				],
				[
					1582318800,
					"499610.2493"
				],
				[
					1582405200,
					"500308.8221"
				],
				[
					1582491600,
					"490186.9698"
				],
				[
					1582578000,
					"486156.5315"
				],
				[
					1582664400,
					"486346.3942"
				],
				[
					1582750800,
					"487582.2955"
				]
			]
		},
		{
			"asset": "eth",
			"outstanding_debt": [
				[
					1582232400,
					"4893.3066"
				],
				[
					1582318800,
					"5323.0593"
				],
				[
					1582405200,
					"8336.304"
				],
				[
					1582491600,
					"8133.835"
				],
				[
					1582578000,
					"4310.5404"
				],
				[
					1582664400,
					"4747.8079"
				],
				[
					1582750800,
					"3560.2523"
				]
			],
			"protocol": "dydx",
			"supply_volume": [
				[
					1582232400,
					"99308.8547"
				],
				[
					1582318800,
					"99405.5769"
				],
				[
					1582405200,
					"102071.8261"
				],
				[
					1582491600,
					"103444.5907"
				],
				[
					1582578000,
					"104362.9074"
				],
				[
					1582664400,
					"105043.9949"
				],
				[
					1582750800,
					"102052.1499"
				]
			]
		},
		{
			"asset": "eth",
			"outstanding_debt": [
				[
					1582232400,
					"114129047.836"
				],
				[
					1582318800,
					"114332297.558"
				],
				[
					1582405200,
					"114091403.45"
				],
				[
					1582491600,
					"115017791.634"
				],
				[
					1582578000,
					"115143423.499"
				],
				[
					1582664400,
					"115151547.832"
				],
				[
					1582750800,
					"113214446.739"
				]
			],
			"protocol": "mcd",
			"supply_volume": [
				[
					1582232400,
					"1601011.18"
				],
				[
					1582318800,
					"1602430.782"
				],
				[
					1582405200,
					"1586559.743"
				],
				[
					1582491600,
					"1613600.879"
				],
				[
					1582578000,
					"1614021.312"
				],
				[
					1582664400,
					"1628462.542"
				],
				[
					1582750800,
					"1651904.176"
				]
			]
		},
		{
			"asset": "eth",
			"outstanding_debt": [
				[
					1582232400,
					"2422.8315"
				],
				[
					1582318800,
					"1738.7567"
				],
				[
					1582405200,
					"1748.3252"
				],
				[
					1582491600,
					"1819.9795"
				],
				[
					1582578000,
					"1810.1531"
				],
				[
					1582664400,
					"1734.7049"
				],
				[
					1582750800,
					"1064.8461"
				]
			],
			"protocol": "aave",
			"supply_volume": [
				[
					1582232400,
					"18196.1941"
				],
				[
					1582318800,
					"16303.4793"
				],
				[
					1582405200,
					"15832.083"
				],
				[
					1582491600,
					"14943.2125"
				],
				[
					1582578000,
					"14760.3946"
				],
				[
					1582664400,
					"14179.759"
				],
				[
					1582750800,
					"14076.2585"
				]
			]
		}
	],
	"meta": {
		"params": {
			"after": 1582229074,
			"assets": [
				"eth"
			],
			"before": 1582833922,
			"granularity": 24,
			"metrics": [
				"supply_volume",
				"outstanding_debt"
			],
			"protocols": [
				"ddex",
				"bzx",
				"lendf",
				"compound",
				"dydx",
				"mcd",
				"aave",
				"maker"
			]
		}
	}
}

let times = raw_data.data[0][raw_data.meta.params.metrics[0]].map(d => new Date(d[0] * 1000));
let series = raw_data.data.map(d => {
	console.log(d)
	return {
		protocol: d.protocol,
		name: protocols[d.protocol].name,
		type:'bar',
		stack: "protocol",
		areaStyle: {normal: {}},
		supply: d.supply_volume.map(d => parseFloat(d[1])),

	}
});

let protocols_sorted = _.sortBy(protocols, ["name"]);
console.log(protocols_sorted);


// console.log(series[0])
// console.log(series[0].supply)
// console.log(sorted)
// curl "https://api.aleth.io/v0/defi/stats?after=1582229074&granularity=24&metrics=supply_volume,outstanding_debt&assets=eth" -u sk_main_7e214fa5800c0f92:
// let now = Math.round(new Date().getTime() / 1000) - (7 * 24 * 60 * 60);