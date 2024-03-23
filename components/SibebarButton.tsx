import { useState } from 'react';
import { Sidebar } from './Sidebar';

const SidebarButton = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`flex ${sidebarOpen ? 'col-span-2' : 'hidden'}`}>
      {sidebarOpen && <Sidebar />}
      <button
        className={`top-1/2 w-0.5 h-20 transform -translate-y-1/2 bg-[#111827] text-white py-2 px-4 rounded-r-lg shadow-md z-10 ${sidebarOpen ? 'left-2/6' : 'fixed left-0'}`}
        onClick={toggleSidebar}
      >
        {sidebarOpen ? '<' : '>'}
      </button>
    </div>
  );
};

export default SidebarButton;
