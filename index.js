document.addEventListener('DOMContentLoaded', () => {
	Highcharts.chart('container',{
		chart:{
			type: 'areaspline',
			zoomType: 'xy'
		},
		credits:{
			// enabled: false
			text: 'My credit',
			href: 'http://sagardhungel.com.np',
			position: {
				align: 'left',
				x: 10
			},

		},
		title: {
			text: 'Possibly the most boring chart'
		},
		tooltip:{
			animation: false,
			backgroundColor: '#333333',
			borderColor: 'red',
			borderRadius: 20,
			style:{
				color: '#ffffff'
			},
		},
		yAxis:{
			title: {
				text: 'Fruits Eaten'
			}
		},
		xAxis:{
			categories: ['Apples','Bananas','Oranges', 'Mangoes', 'Papaya', 'Running','out','of','names','wtf']
		},
		series:[
			{
				name: 'John',
				data: [1,23,9,3,24,23,55,67,86,9]
			},
			{
				name: 'Jude',
				data: [2,4,7,19,52,56,23,14,9,84]
			}

		]
	})
})