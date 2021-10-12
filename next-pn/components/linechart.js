import { Line } from 'react-chartjs-2'

export const LineChart= ({chartData}) => {
    return (
        <div>
            <Line data={chartData} ></Line>
        </div>
    )
}