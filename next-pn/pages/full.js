import { useEffect, useState } from 'react'
import { LineChart } from '../components/linechart'
import 'chartjs-adapter-date-fns'

export default function Full() {
  useEffect(() => {
    const fetchCounts = async() => {
      const res = await fetch("https://patnet.azurewebsites.net/api/classifications-counts?")
      const data = await res.json()
      const values = []
      data.dataSets.forEach(d => {
        const hexColor = `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
        let item = { 
          label: d.label, data: d.data, 
          borderColor: hexColor, backgroundColor: hexColor,
          tension: 0.4, fill: false }
        values.push(item)
      })
      const labels = []
      data.labels.every(l => {
        let d = new Date(l)
        //labels.push(d.toLocaleDateString('en-In'))
        labels.push(d)
        return true
      })
      
      setChartData({
        labels: labels,
        datasets: values,
      })
    }

    setChartOptions({
        plugins: {
            title: {
                text: 'Timeline of Published Applications',
                display: true,
                font: {
                  size: 20
                }
            },
            legend: {
              display: true,
              position: "top",
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
            title: {
              display: true,
              text: '# of Published Applications', 
              padding: 8, 
              font: {
                size: 16
              }
            }
          },
          xAxes: {
            type: "timeseries",
            // time: {
            //   unit: 'month'
            // },
            title: {
              display: true,
              text: 'Dates',
              padding: 16,
              font: {
                size: 16
              }
            }
          }
        }
    })

    fetchCounts()
  }, [])

  const [chartData, setChartData] = useState({})
  const [chartOptions, setChartOptions] = useState({})
  
  return (
    <div><LineChart chartData={chartData} chartOptions={chartOptions} /></div>
  )
}
