import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function C(){

  const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  }

return(
  <div>

<h1>High Chart</h1>

 <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
  </div>
)

}

export default C;