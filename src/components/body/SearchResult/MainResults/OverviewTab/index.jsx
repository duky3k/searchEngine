import React, { useMemo, useState } from 'react'
import './OverviewTab.css'
import { Button, Typography } from 'antd'
import InfoIcon from '@mui/icons-material/Info';
import { PrinterOutlined } from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';
import TimeLineHorizontal from './TimeLineHorizontal';

const scatterData = [
  [0, 1],
  [1, 3],
  [2, 4],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 6],
  [8, 7],
  [9, 7],
  [10, 8],
  [11, 8],
];

const barData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const yAxis = [2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, 2020, 2022]

const OverviewTab = () => {

  const [chartType, setChartType] = useState('scatter');

  const option = useMemo(() => {
    return {
      title: {
        subtext: "Pain and Suffering Award Amounts of Past Cases",
        left: "center",
        subtextStyle: {
          fontSize: 20
        }
      },
      xAxis: [
        {
          type: 'category',
          name: 'Assessment Date',
          nameLocation: 'center',
          nameGap: 40,
          nameTextStyle: {
            fontSize: 16
          },
          boundaryGap: false,
          axisTick: {
            alignWithLabel: true
          },
          // prettier-ignore
          data: yAxis
        }
      ],
      yAxis: {
        name: 'Award Amount (k$)',
        type: 'value',
        nameLocation: 'center',
        nameGap: 40,
        nameTextStyle: {
          fontSize: 16
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: { show: true }
        }
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        left: 80,
        bottom: 10,
        type: 'scroll',
        selected: { detail: false },
      },
      series: [
        {
          name: 'Injury',
          symbolSize: 20,
          data: chartType === 'scatter' ? scatterData : barData,
          type: chartType,
          color: '#751c24',
        }
      ]
    };
  }, [chartType]);

  return (
    <div
      className='overview-tab-container'
    >
      <div
        className='overview-tab-title'
      >
        <Typography.Text>
          <InfoIcon sx={{ mr: 1, fontSize: '20px' }} />
          <b>14</b> injuries found in <b>14</b> cases (excludes global awards)
        </Typography.Text>
        <Button
          className='overview-tab-print-btn'
        >
          <PrinterOutlined />
          Print Overview
        </Button>
      </div>

      {/* Time line */}
      <div>
        <TimeLineHorizontal />
      </div>

      {/* React Chart */}
      <div className='overview-tab-chart-container'>
        <ReactECharts
          option={option}
          style={{ height: '600px', width: '100%' }}
        />
      </div>

      {/* Control Box */}
      <div>
        <Button
          onClick={() => setChartType('scatter')}
          disabled={chartType === 'scatter'}
          style={{
            fontWeight: chartType === 'scatter' ? 'bold' : '',
            marginRight: '8px'
          }}
        >
          Scatter Plot
        </Button>
        <Button
          onClick={() => setChartType('bar')}
          disabled={chartType === 'bar'}
          style={{
            fontWeight: chartType === 'bar' ? 'bold' : '',
          }}
        >
          Bar Chart
        </Button>
      </div>
    </div>
  )
}

export default OverviewTab