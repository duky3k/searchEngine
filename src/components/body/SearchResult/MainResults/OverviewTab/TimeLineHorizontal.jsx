import { Steps } from 'antd';
import { useState } from 'react';
import { fakeDataTimeLineHorizontal } from '../../../../../constant/constants';

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
        items={fakeDataTimeLineHorizontal}
      />
    </>
  );
};
export default TimeLineHorizontal;