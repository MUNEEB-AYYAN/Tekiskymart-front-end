import Carousel from './carousel';
import img1 from '../assets/images/jwelery.jpg'
import { Gift } from 'lucide-react';
import Carousel2 from './Carousel2';
import Dryfrt from './Dryfrt';
import Mobiles from './Mobiles';
import Watches from './Watches';
import Crockery from './Crockery';
import Snacks from './Snacks';
import Clothes from './Clothes';
// import Dates from './Dates';



export default function Categories() {
  const categories = [
    { name: "GIFT-ITEMS", image: img1  },
    { name: "DATES", image: img1 },
    { name: "PERFUMES", image: img1},
    { name: "OTHERS", image: img1 },
    { name: "CLOTHES", image: img1 },
    { name: "HOMEMADE SNACKS", image: img1},
    { name: "CROCKERY", image: img1 },
    { name: "WATCHES", image: img1},
    { name: "MOBILES", image: img1 },
    { name: "MOBILES", image: img1},
  ];

  return (
    <>
    {/* <Carousel /> */}
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="flex gap-6 overflow-x-auto">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-center">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
    <Carousel />
    <div className='mt-2'>
      <Carousel2 />
    </div>
    <Gift  />
    {/* <Dates /> */}
    <Clothes />
    <Snacks />
    <Crockery />
    <Watches />
    <Mobiles />
    <Dryfrt />


    </>
  );
}
