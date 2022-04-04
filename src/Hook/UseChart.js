import { useEffect, useState } from "react"

const UseChart = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])
    return [chartData, setChartData];
}

export default UseChart;