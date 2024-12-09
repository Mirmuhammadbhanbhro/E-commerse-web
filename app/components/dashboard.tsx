import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full bg-blue-600 text-white p-6 lg:h-full">
        <h2 className="text-2xl font-bold mb-6">MORENT</h2>
        <ul className="space-y-4">
          <li>Dashboard</li>
          <li>Car Rent</li>
          <li>Insight</li>
          <li>Reimburse</li>
          <li>Inbox</li>
          <li>Calendar</li>
          <li>Settings</li>
          <li>Help Center</li>
        </ul>
        <button className="mt-6 bg-gray-800 text-white py-2 px-4 rounded-full w-full">Log Out</button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6 flex-wrap">
          <div className="flex items-center space-x-4 w-full lg:w-auto">
            <span>Search for rental cars</span>
            <input
              type="text"
              className="border px-4 py-2 rounded-lg w-full lg:w-72"
              placeholder="Search..."
            />
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <span className="text-xl">User</span>
            <div className="rounded-full w-10 h-10 bg-gray-400 flex items-center justify-center">U</div>
          </div>
        </div>

        {/* Car Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-4">Details Rental</h3>
            <div className="space-y-2">
              <p>Car: Nissan GT-R</p>
              <p>Pick-Up Location: Los Angeles</p>
              <p>Drop-Off Location: New York</p>
              <p>Date: 28 Dec 2024</p>
              <p>Time: 11:00 AM</p>
              <p className="font-bold">Total Rental Price: $80.00</p>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
          <ul>
            <li className="flex justify-between mb-4">
              <span>Nissan GT-R</span>
              <span>$80.00</span>
            </li>
            <li className="flex justify-between mb-4">
              <span>Koenigsegg</span>
              <span>$99.00</span>
            </li>
            <li className="flex justify-between mb-4">
              <span>Polo - Royce</span>
              <span>$96.00</span>
            </li>
            <li className="flex justify-between mb-4">
              <span>CR-V</span>
              <span>$80.00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
