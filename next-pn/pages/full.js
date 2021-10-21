import { useEffect, useState } from 'react'
import { LineChart } from '../components/linechart'
import { ItemMapper } from '../services/mapper'
import { ArrayColor } from '../services/mapper'
import 'chartjs-adapter-date-fns'

export default function Full() {
  const values = []
  const classLabels = []
      
  useEffect(() => {
    const fetchCounts = async() => {
      const res = await fetch("https://patnet.azurewebsites.net/api/classifications-counts?")
      const data = await res.json()
      let i = 0
      data.dataSets.forEach(d => {
        const color = ArrayColor("dark")[i++]
        let item = { 
          label: ItemMapper(d.label), data: d.data, 
          borderColor: color, backgroundColor: color,
          tension: 0.4, fill: false, borderWidth: 1, pointStyle: 'dash' }
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
        responsive: true,
        //maintainAspectRatio: false,
        //aspectRatio: 1.33,
        plugins: {
            title: {
                text: 'Published Indian Patent Applications 2021',
                display: true,
                font: {
                  size: 20
                }
            },
            legend: {
              display: true,
              position: "top",
              labels: {
                padding: 20,
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
