import React, { useMemo, useState } from 'react'
import './OverviewTab.css'
import { Button, Typography } from 'antd'
import InfoIcon from '@mui/icons-material/Info';
import { PrinterOutlined } from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';
import TimeLineHorizontal from './TimeLineHorizontal';
import { fakeDatabarOverviewTab, fakeDatascatterOverviewTab, fakeDatayAxisOverviewTab } from '../../../../../constant/constants';

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
          data: fakeDatayAxisOverviewTab,
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
          data: chartType === 'scatter' ? fakeDatascatterOverviewTab : fakeDatabarOverviewTab,
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