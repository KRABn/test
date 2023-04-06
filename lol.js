// Chart options
const options = {
	chart: {
	  height: 450,
	  width: "100%",
	  type: "line",
	  background: "#f4f4f4",
	  foreColor: "#333"
	},
	// plotOptions: {
	//   bar: {
	// 	horizontal: false
	//   }
	// },
	series: [
	  {
		name: "Population",
		data: [
			90198,
			47999,
			77500,
			12412,
			12411,
			23645
		]
	  },
	  {
		name: "Popw",
		data: [
			89311,
			12315,
			24123,
			48231,
			21412,
			12314
		]
	  }
	],
	xaxis: {
		labels: {
			datetimeFormatter: {
			  year: 'yyyy',
			  month: 'МММ',
			  day: 'dd',
			}
		  },
	  categories: [
		'2022-02-16',
		'2022-02-22',
		'2022-02-30',
		'2022-03-06',
		'2022-03-09',
		'2022-03-12'
	  ]
	},
	
	fill: {
	  colors: ["#F44336"]
	},
	dataLabels: {
	  enabled: false
	},
  
	title: {
	  text: "Largest US Cities By Population",
	  align: "center",
	  margin: 20,
	  offsetY: 20,
	  style: {
		fontSize: "25px"
	  }
	}
  };
  
  // Init chart
  const chart = new ApexCharts(document.querySelector("#chart"), options);
  
  // Render chart
  chart.render();
  
  // Event example
//   document.getElementById("change").addEventListener("click", () =>
// 	chart.updateOptions({
// 	  plotOptions: {
// 		bar: {
// 		  horizontal: true
// 		}
// 	  }
// 	})
//   );