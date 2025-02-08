// import React from 'react'

// const Support = () => {
//   return (
//     <>
    
//     </>
//   )
// }

// export default Support

import { MapPin, Phone, AtSign } from "lucide-react";

 const Support=()=>  {
  return (
    <div className="flex flex-col items-center py-12 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-2">Customer Support</h2>
      <p className="text-gray-600 mb-8 text-center">
        Feel Free To Contact Us If You Need Any Assistance, Any Help Or Questions.
      </p>

      <div className="flex gap-6 w-full max-w-5xl">
        {/* Address Section */}
        <div className="w-[350px] bg-gray-200 p-6 rounded-lg flex flex-col items-center text-center">
          <MapPin size={40} className="text-red-500 mb-2" />
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-gray-700">
            2nd Floor, Opposite Water Tank, <br />
             WorkShop Corner, Nanded, <br />
              Maharashtra 431605 INDIA
          </p>
        </div>

        {/* Phone Section */}
        <div className="w-[350px] bg-gray-200 p-6 rounded-lg flex flex-col items-center text-center">
          <Phone size={40} className="text-green-500 mb-2" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-700">+91 8625817334</p>
          <p className="text-gray-700">+91 9890796149</p>
          <p className="text-gray-700">+91 7387737731</p>
        </div>

        {/* Email Section */}
        <div className="w-[350px] bg-gray-200 p-6 rounded-lg flex flex-col items-center text-center">
          <AtSign size={40} className="text-red-600 mb-2" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-700">Hr@Tekisky.Com</p>
          <p className="text-gray-700">Sales@Tekisky.Com</p>
        </div>
      </div>

      <div className="m-8 border-1 ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.3525792798255!2d77.3026939737395!3d19.17979674870869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sF0x3bd1d7502795a5c1%3A0x15ded39c097470bd!2sTekisky%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1738755294154!5m2!1sen!2sin"
        width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    
  );
}

export default Support