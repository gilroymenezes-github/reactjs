import { Bar } from 'react-chartjs-2'

export const BarChart= ({chartData, chartOptions}) => {
    return (
        <div>
            <Bar data={chartData} options={chartOptions} ></Bar>
        </div>
    )
}