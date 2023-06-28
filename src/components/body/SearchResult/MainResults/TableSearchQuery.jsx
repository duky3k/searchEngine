import React from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import { Tabs } from 'antd';
import OverviewTab from './OverviewTab';

const { TabPane } = Tabs;

const data = [
  {
    id: 0,
    icon: CorporateFareIcon,
    name: 'Overview',
    children: OverviewTab
  },
  {
    id: 1,
    icon: FormatListBulletedIcon,
    name: 'List of Cases',
    children: FormatListBulletedIcon
  }
]

const TableSearchQuery = () => {


  return (
    <div
      className='table-search-query-container'
    >
      <Tabs
        defaultActiveKey="0"
        centered
        size='large'
      >
        {
          data.map((value) => {
            return (
              <TabPane tab={
                <span>
                  <value.icon sx={{ mr: 1 }} />
                  {value.name}
                </span>
              } key={value.id}
              >
                <value.children />
              </TabPane>
            )
          })
        }
      </Tabs>
    </div>
  )
}

export default TableSearchQuery