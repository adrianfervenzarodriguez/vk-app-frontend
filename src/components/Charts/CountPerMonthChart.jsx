import { useEffect, useState } from "react"
import BaseChart from "./BaseChart"

const CountPerMonthChart = () => {

    const [options, setOptions] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/tweets/hashtags/farina/charts/count_per_month`)
            const chartData = await response.json()
            setOptions({
                title : {text : 'Total mensual'},
                data : chartData,
                series: [
                    { type: 'bar', xKey: 'month', yKey: 'tweets' },
                ],
                axes : [
                    { type: 'category', position: 'bottom' },
                    { type: 'number', position: 'left', keys: ['tweets'] },
                ],
                legend : {
                    position : 'bottom'
                }
            })
        }

        fetchData()
    }, [])

    return (
        options && <BaseChart options={options}/>
    )
}

export default CountPerMonthChart