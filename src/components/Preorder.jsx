
import { useForm } from "react-hook-form";

export default function PreOrderForm() {
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
      <h2 className="text-2xl font-bold text-center mb-20">Pre Order</h2>
      <p className="text-blue-600 text-center mb-4 font-semibold">
        Get 15% Off On Pre-Orders!
      </p>
      
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-30">
          <label className=" w-1/3 font-medium text-gray-700">Your Name *</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        
        <div className="flex items-center gap-30">
          <label className="w-1/3 font-medium text-gray-700">Your Mobile Number *</label>
          <input
            {...register("mobile", { required: "Mobile number is required" })}
            className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Mobile Number"
            type="tel"
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
        </div>
        
        <div className="flex items-center gap-30">
          <label className="w-1/3 font-medium text-gray-700">Which Product You Want To Purchase *</label>
          <select
            {...register("product", { required: "Product selection is required" })}
            className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select Product</option>
            <option value="Product 1">Product 1</option>
            <option value="Product 2">Product 2</option>
          </select>
          {errors.product && <p className="text-red-500 text-sm">{errors.product.message}</p>}
        </div>
        
        <div className="flex items-center gap-30">
          <label className="w-1/3 font-medium text-gray-700">How Much Quantity *</label>
          <input
            {...register("quantity", { required: "Quantity is required" })}
            className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Quantity"
            type="number"
          />
          {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
        </div>
        
        <div className="flex items-center gap-30">
          <label className="w-1/3 font-medium text-gray-700">Description</label>
          <textarea
            {...register("description")}
            className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Description"
          />
        </div>
      </div>
      
      <button
        type="submit"
        className="ml-35 bg-blue-600 text-white p-3  rounded hover:bg-blue-700"
      >
        Submit Pre Order
      </button>
    </form>
  );
}