import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';

const App = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="container mt-4">
      <Tabs activeTab={activeTab} onChangeTab={setActiveTab}>
        {[<Tab1 />, <Tab2 onNavigate={() => setActiveTab(2)} />, <Tab3 />]}
      </Tabs>
    </div>
  );
};

export default App;
