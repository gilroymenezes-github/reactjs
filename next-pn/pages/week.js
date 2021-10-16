import { useEffect, useState } from 'react'
import { BarChart } from '../components/barchart'
import { ArrayMapper } from '../services/mapper'
import { ArrayColor } from '../services/mapper'
import 'chartjs-adapter-date-fns'

export default function Week() {
  const values = []
  const colors = []
  const labels = []
  const mappedLabels = []
  useEffect(() => {
    const fetchCounts = async() => {
      const res = await fetch("https://patnet.azurewebsites.net/api/classifications-counts?")
      const data = await res.json()
      
      let i = 0;
      data.dataSets.every(d => {
        //const hexColor = `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
        const color = ArrayColor("light")[i++]
        labels.push(d.label)
        values.push(d.data.reverse()[0])
        colors.push(color)
        return true
      })
      const item = { label: "Counts", data: values, backgroundColor: colors, borderColor: colors };
      ArrayMapper(labels, mappedLabels)
      const dataSets = [];
      dataSets.push(item);
      
      setChartData({
        labels: mappedLabels,
        datasets: dataSets,
      })
      let dayDate = new Date(data.labels.reverse()[0]).toDateString()
      console.log(dayDate);
      setChartOptions(fetchChartOptions(dayDate))
    }

    const fetchChartOptions = (label) => {
      return {
      label: labels[0],
      options: {
        responsive: true,
        aspectRatio: 1.33,
        //maintainAspectRatio: false,
        indexAxis: "y",
        plugins: {
            title: {
                text: 'Latest Published Applications',
                display: true,
                font: {
                  size: 20
                }
            },
            legend: {
              text: "foo",
              display: false,
              position: "right",
              labels: {
                padding: 40,
                font: {
                  size: 12
                }
              }
              
            },
        },
        layout: { 
          padding: 20
        },
        scales: {
          yAxes: {
            ticks: {
              mirror: true,
              z:1000,
              color: '#000',
              padding: 10
            },
            // title: {
            //   display: false,
            //   padding: 8, 
            //   font: {
            //     size: 16
            //   }
            // }
          },
          xAxes: {
            title: {
              display: true,
              text: `# of Published Applications in the week of ${label}`,
              padding: 16,
              font: {
                size: 16
              }
            }
          }
        }
      }
    }
  }

    fetchCounts()
  }, [])

  const [chartData, setChartData] = useState({})
  const [chartOptions, setChartOptions] = useState({})
  
  return (
    <div><BarChart chartData={chartData} chartOptions={chartOptions} /></div>
  )
}
