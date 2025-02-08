import React from 'react'

const SupportChat = () => {
  return (
    <div>
        {/* Customer Support Chat */}
      <div className="fixed bottom-4 right-4 bg-white p-4 shadow-lg rounded-lg w-80">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div>
            <p className="text-sm font-semibold">Customer Support</p>
            <p className="text-xs text-gray-500">34 minutes ago</p>
          </div>
        </div>
        <p className="text-sm mt-2">Welcome to our site, if you need help simply reply to this message, we are online and ready to help.</p>
        <input 
          type="text" 
          placeholder="Type here and press enter..." 
          className="w-full mt-2 p-2 border rounded-lg text-sm" 
        />
      </div>
    </div>
  )
}

export default SupportChat