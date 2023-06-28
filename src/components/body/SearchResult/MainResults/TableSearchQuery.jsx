import { Tabs } from 'antd';
import React from 'react';
import { dataTab } from '../../../../constant/constants';

const { TabPane } = Tabs;


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
          dataTab.map((value) => {
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