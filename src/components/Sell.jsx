import { useForm } from "react-hook-form";

export default function SellWithUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4 max-w-2xl mx-auto  rounded-lg ">
      <h2 className="text-2xl font-bold text-center mb-4">Sell With Us</h2>
      
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Terms & Conditions</h3>
        <ul className="list-decimal pl-5 text-gray-700">
          <li>Authentic And Reliable Genuine Products</li>
          <li>No Illegal Materials</li>
          <li>All Government Norms Should Be Followed</li>
          <li>1000₹ Subscription For 6 Months With A Maximum Of 10 Product Sales</li>
          <li>Deals Only For Premium Customers</li>
        </ul>
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <label className="w-1/3 text-gray-700">Name *</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Name"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <label className="w-1/3 text-gray-700">Mobile Number *</label>
          <input
            {...register("mobile", { required: "Mobile number is required" })}
            className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Mobile Number"
            type="tel"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <label className="w-1/3 text-gray-700">Which Product Do You Want To Sell *</label>
          <input
            {...register("product", { required: "Product name is required" })}
            className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Product Name"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <label className="w-1/3 text-gray-700">Product Details *</label>
          <textarea
            {...register("description", { required: "Product details are required" })}
            className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Product Details"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <label className="w-1/3 text-gray-700">Do You Have Shop?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" {...register("shop")} value="yes" /> Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" {...register("shop")} value="no" /> No
            </label>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <label className="w-1/3 text-gray-700">Do You Have G.S.T. Number?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" {...register("gst")} value="yes" /> Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" {...register("gst")} value="no" /> No
            </label>
          </div>
        </div>
      </div>
      
      <button
        type="submit"
        className="ml-15 w-35 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Submit Enquiry
      </button>
    </form>
  );
}
