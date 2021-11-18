export default function a(titles = '', mode = 'item'
  ,
  xAxistype = '',
  xAxisdata = [],
  yAxistype = '',
  series
) {
  return {
    title: {
      text: titles
    }, tooltip: { trigger: mode },
    xAxis: {
      type: xAxistype,
      data: xAxisdata
    },
    yAxis: {
      type: yAxistype
    },
    grid: {
      left: "3%",
      right: "5%",
      bottom: "3%",
      containLabel: true
    },

    series

  }
}




