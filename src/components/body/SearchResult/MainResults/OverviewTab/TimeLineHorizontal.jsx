import { Steps } from 'antd';
import { useState } from 'react';

const TimeLineHorizontal = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  return (
    <>
      <Steps
        progressDot
        type="navigation"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={[
          {
            title: '$1,000.00',
            status: 'process',
            description: '10th Percentitle',
            icon: 'asbasbd'
          },
          {
            title: '$2,000.00',
            status: 'process',
            description: 'Lower Quartile',
          },
          {
            title: '$4,000.00',
            status: 'process',
            description: 'Median',
          },
          {
            title: '$10,000.00',
            status: 'process',
            description: 'Upper Quartile',
          },
          {
            title: '$30,000.00',
            status: 'process',
            description: '90th Percentile',
          },
        ]}
      />
    </>
  );
};
export default TimeLineHorizontal;