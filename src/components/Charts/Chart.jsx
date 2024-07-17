/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { AgCharts } from 'ag-charts-react';

const Chart = ({ tweets }) => {

  const [chartOptions, setChartOptions] = useState({

    title: { text: 'Ice Cream Sales' },
    subtitle: { text: 'Data from 2022' },
    data: [
        { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
        { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
        { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
    ],

    series: [
        { type: 'bar', xKey: 'month', yKey: 'iceCreamSales' },
        { type: 'line', xKey: 'month', yKey: 'avgTemp' }
    ],

    axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number', position: 'left', keys: ['iceCreamSales'] },
        { type: 'number', position: 'right', keys: ['avgTemp'] },
    ],

  });

  return (
    <div className='border-2 m-1 rounded-md size-fit'>
        <AgCharts options={chartOptions} />
    </div>
    
  );
}

export default Chart