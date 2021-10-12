import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { LineChart } from '../components/linechart'
import styles from '../styles/Home.module.css'


export default function Home() {
  useEffect(() => {
    const fetchCounts = async() => {
      const res = await fetch("https://patnet.azurewebsites.net/api/classifications-counts?")
      const data = await res.json()
      const values = [];
      let b = 192;
      let g = 128;
      let r = 96;
      data.dataSets.forEach(d => {
        b -= 16
        g = (b+r)/2
        r += 8
        let item = { label: d.label, data: d.data, borderColor: `rgb(${r}, ${g}, ${b})`, tension: 0.1, fill: false }
        values.push(item)
      })
      const labels = [];
      data.labels.forEach(l => {
        let d = new Date(l);
        labels.push(d.toLocaleDateString('en-In'))
      })
      
      setChartData({
        labels: labels,
        datasets: values,
      })
    }

    setChartOptions({
        plugins: {
            title: {
                text: 'Classifications',
                display: true,
            },
            legend: {
              display: true,
              position: "top", 
            },
        },
        layout: { 
          padding: 20
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
