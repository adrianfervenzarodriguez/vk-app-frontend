import { useEffect, useState } from "react"
import BaseChart from "./BaseChart"

const CountPerWeekLasMonthChart = () => {

    const [options, setOptions] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/tweets/hashtags/farina/charts/count_per_week`)
            const chartData = await response.json()
            console.log(chartData)
            setOptions({
                title : {text : 'Total semanal último mes'},
                subtitle : {text : 'Datos del mes actual'},
                data : chartData,
                series: [
                    { type: 'bar', xKey: 'week', yKey: 'tweets' },
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

export default CountPerWeekLasMonthChart