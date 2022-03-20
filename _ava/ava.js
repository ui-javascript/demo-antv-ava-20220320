import React from 'react';
import ReactDOM from 'react-dom';

import { AutoChart } from '@antv/auto-chart';

const data = [
  { field1: 'a', field2: '100' },
  { field1: 'b', field2: '300' },
  { field1: 'c', field2: '800' },
];

function App() {
  return (
    <div>
      <AutoChart title="CASE 1" description="auto chart analysis" data={data} language={'zh-CN'} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
