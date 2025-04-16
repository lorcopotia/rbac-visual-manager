import React from 'react';
import Canvas from './components/Canvas/Canvas';
import Sidebar from './components/Sidebar/Sidebar';
import DetailsPanel from './components/DetailsPanel/DetailsPanel';
import YAMLPanel from './components/YAMLPanel/YAMLPanel';

const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Canvas />
      <div className="w-1/3 flex flex-col">
        <DetailsPanel />
        <YAMLPanel />
      </div>
    </div>
  );
};

export default App;
