import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/6 bg-white p-4 border-r">
      <h2 className="text-xl font-bold mb-4">Componentes</h2>
      <ul>
        <li>User</li>
        <li>Group</li>
        <li>ServiceAccount</li>
        <li>Role</li>
        <li>ClusterRole</li>
      </ul>
    </div>
  );
};

export default Sidebar;
