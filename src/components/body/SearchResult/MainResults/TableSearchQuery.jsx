import React from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import { Tabs } from 'antd';
const data = [
  {
    id: 0,
    icon: CorporateFareIcon,
    name: 'Overview',
    children: CorporateFareIcon
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
        defaultActiveKey="1"
        centered
        size='large'
        items={data.map((value) => {
          return {
            label: (
              <span>
                <value.icon sx={{
                  mr: 1
                }}/>
                {value.name}
              </span>
            ),
            key: value.id,
            children: <value.children/>,
          };
        })}
      />
    </div>
  )
}

export default TableSearchQuery