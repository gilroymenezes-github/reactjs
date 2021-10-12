import { Line } from 'react-chartjs-2'

export const LineChart= ({chartData, chartOptions}) => {
    return (
        <div>
            <Line data={chartData} options={chartOptions} ></Line>
        </div>
    )
}