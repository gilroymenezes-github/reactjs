import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { LineChart } from '../components/Chart'
import styles from '../styles/Home.module.css'


export default function Home() {
  useEffect(() => {
    const fetchCounts = async() => {
      const res = await fetch("https://patnet.azurewebsites.net/api/classifications-counts?")
      const data = await res.json()
      setChartData({
        labels: data.labels,
        datasets: data.dataSets
      })
      console.log(data)
    }
    fetchCounts()
  }, [])

  const [chartData, setChartData] = useState({})
  
  return (
    <div><LineChart chartData={chartData} /></div>
  )
}
