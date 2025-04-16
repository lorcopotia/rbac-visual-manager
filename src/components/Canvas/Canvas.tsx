import React from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const Canvas: React.FC = () => {
  return (
    <div className="flex-1 bg-gray-100">
      <ReactFlow nodes={[]} edges={[]} onNodesChange={() => {}} onEdgesChange={() => {}} onConnect={() => {}}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Canvas;
