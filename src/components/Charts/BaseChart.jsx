/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { AgCharts } from 'ag-charts-react';


const BaseChart = ({options}) => {

    const [chartOptions, setChartOptions] = useState()
    useEffect(() => {
        setChartOptions(options)
    }, [options])
    
    return (
        <div className='border-2 m-1 rounded-md size-fit'>
            <AgCharts options={chartOptions} />
        </div>
      );
}

export default BaseChart