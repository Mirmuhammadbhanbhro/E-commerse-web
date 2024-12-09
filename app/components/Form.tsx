import React from "react";

const Form = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      {/* Container */}
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-blue-500 text-center mb-6">
          MOR<span className="text-gray-800">ENT</span>
        </h1>
        <h2 className="text-lg font-semibold text-gray-600 mb-4">Billing Info</h2>
        <p className="text-sm text-gray-500 mb-6">Please enter your billing info</p>
        {/* Billing Info */}
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Phone number"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Town / City</label>
              <input
                type="text"
                placeholder="Town or city"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <h2 className="text-lg font-semibold text-gray-600 mt-10">Rental Info</h2>
          <p className="text-sm text-gray-500 mb-6">Please select your rental date</p>
          {/* Rental Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <input type="radio" id="pickup" name="rentalType" className="h-4 w-4" />
              <label htmlFor="pickup" className="text-sm font-medium text-gray-700">
                Pick-Up
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Locations
                </label>
                <select
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Select your city</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input
                  type="time"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              className="bg-gray-200 text-gray-600 py-2 px-4 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
