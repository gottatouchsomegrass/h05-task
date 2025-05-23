"use client"
import Image from 'next/image'; // Assuming you're using Next.js Image
import { Star, StarHalf } from 'lucide-react'; // Assuming you're using lucide-react for icons

// Dummy data for colors and sizes - replace with your actual data
const colors = ['#4A403A', '#416F68', '#36374E'];
const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

// Dummy state hooks - replace with your actual state management
const selectedColor = '#4A403A';
const setSelectedColor = (color) => console.log('Selected color:', color);
const selectedSize = 'Large';
const setSelectedSize = (size) => console.log('Selected size:', size);
const quantity = 1;
const setQuantity = (qty) => console.log('Quantity:', qty);


export default function ProductPageResponsive() {
  return (
    <div className="max-w-[1350px] border-t-gray-200 border-t-2 mx-auto px-4 sm:px-6 lg:px-4"> {/* Added horizontal padding for smaller screens */}
      <div className="text-gray-500 text-xs sm:text-sm mt-4"> {/* Slightly smaller text on extra small screens */}
        Home {' > '} Shop {' > '} Men {' > '}<span className="text-black font-semibold">T-shirts</span>
      </div>

      {/* Main product section: Images on left/top, Details on right/bottom */}
      {/* On mobile (flex-col), images will be on top. On md and up (md:flex-row), images will be on the left. */}
      <div className="max-w-[1350px] flex flex-col md:flex-row my-6 md:my-10 gap-4 md:gap-8 lg:gap-0 md:justify-between"> {/* Added gap for flex items, adjusted margin */}

        {/* Image gallery section */}
        {/* On mobile (flex-col-reverse), main image is on top of thumbnails. On md and up (md:flex-row), thumbnails are to the left of main image. */}
        <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-[14px] w-full md:w-auto"> {/* Adjusted gap and width for mobile */}
          {/* Thumbnails */}
          {/* On mobile (flex-row), thumbnails are horizontal. On md and up (md:flex-col), thumbnails are vertical. */}
          <div className="flex flex-row md:flex-col gap-3 md:gap-[14px] justify-center md:justify-start"> {/* Centered thumbnails on mobile */}
            <div className="cursor-pointer"> {/* Added cursor-pointer for interaction hint */}
              <Image
                width={152}
                height={167}
                src={`/Product Page/image 2.png`} // Replace with your actual image paths
                alt="Thumbnail 1"
                className="w-[111px] h-[106px] md:h-[167px] md:w-[152px] object-center bg-center rounded-md" // Responsive sizes, object-cover, rounded
              />
            </div>
            <div className="cursor-pointer">
              <Image
                width={152}
                height={167}
                src={`/Product Page/image 5.png`} // Replace with your actual image paths
                alt="Thumbnail 2"
                className="w-[111px] h-[106px] md:h-[167px] md:w-[152px] object-cover bg-center rounded-md"
              />
            </div>
            <div className="cursor-pointer">
              <Image
                width={152}
                height={167}
                src={`/Product Page/image 6.png`} // Replace with your actual image paths
                alt="Thumbnail 3"
                className="w-[111px] h-[106px] md:h-[167px] md:w-[152px] object-cover bg-center rounded-md"
              />
            </div>
          </div>
          {/* Main product image */}
          <div className="w-auto mx-auto"> {/* Ensure it takes available width on mobile */}
            <Image
              width={444}
              height={530}
              src={`/Product Page/image 1.png`} // Replace with your actual image paths
              alt="Main Product Image"
              className="w-[358px] h-[290px] md:h-[530px] md:w-[444px] object-cover bg-center rounded-lg" // Full width and auto height on mobile, object-cover, rounded
            />
          </div>
        </div>

        {/* Product details, price, etc. */}
        {/* Takes full width on mobile, specific max-width on md and up. Margin adjusts for stacking vs. side-by-side. */}
        <div className="w-full md:max-w-[670px] p-2 sm:p-4 md:pt-0 md:pr-0 bg-white space-y-4 mt-6 md:mt-0"> {/* Removed ml-4, added conditional mt, adjusted padding */}
          {/* Title */}
          {/* Responsive text size for title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase">One Life Graphic T-Shirt</h2>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /> {/* Slightly larger stars on sm+ */}
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            <StarHalf className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            <span className="ml-2 text-xs sm:text-sm text-gray-600">4.5/5</span>
          </div>

          {/* Price */}
          {/* Responsive text sizes for price */}
          <div className="flex items-center gap-2 sm:gap-3 text-lg">
            <span className="text-2xl sm:text-3xl font-bold text-black">$260</span>
            <span className="line-through text-xl sm:text-2xl md:text-3xl text-gray-400">$300</span>
            <span className="text-xs sm:text-sm text-red-500 bg-red-100 px-2 py-1 rounded-full font-medium"> {/* Adjusted text size and added font-medium */}
              -40%
            </span>
          </div>

          {/* Description */}
          {/* Responsive text size for description */}
          <p className="text-sm sm:text-base text-gray-500 border-b-gray-300 border-b-2 pb-4 sm:pb-6"> {/* Adjusted padding bottom and text size */}
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Color Selector */}
          <div>
            <h3 className="text-sm sm:text-base font-medium text-gray-700 mb-2">Select Colors</h3> {/* Adjusted text size */}
            <div className="flex flex-wrap gap-2 sm:gap-3 border-b-gray-300 border-b-2 pb-4 sm:pb-6"> {/* Added flex-wrap and adjusted gap/padding */}
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 sm:border-4 transition-colors cursor-pointer ${ // Adjusted size and border for mobile
                    selectedColor === color ? 'border-black ring-2 ring-offset-1 ring-black' : 'border-gray-300' // Added ring for better visibility of selected
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Select color ${color}`} // Added aria-label for accessibility
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <h3 className="text-sm sm:text-base font-medium text-gray-700 mb-2">Choose Size</h3> {/* Adjusted text size */}
            <div className="flex flex-wrap gap-2 sm:gap-3 border-b-gray-300 border-b-2 pb-4 sm:pb-7"> {/* Added flex-wrap and adjusted gap/padding */}
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1.5 text-xs sm:text-sm md:px-5 md:py-2 font-light rounded-full cursor-pointer transition-colors ${ // Adjusted padding and text size
                    selectedSize === size ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200' // Added hover for non-selected
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          {/* Stack vertically on small screens, horizontally on sm and up */}
          <div className="flex flex-row :justify-between gap-4 mt-6 sm:mt-7"> {/* Adjusted gap and margin */}
            <div className="flex items-center justify-start px-4 py-2 sm:px-5 gap-5 md:gap-7 bg-gray-100 rounded-full w-auto"> {/* Full width on mobile for quantity, adjusted padding/gap */}
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-xl sm:text-2xl font-bold cursor-pointer text-gray-700 hover:text-black" // Adjusted size and color
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="text-lg sm:text-xl font-medium">{quantity}</span> {/* Adjusted size and weight */}
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-xl sm:text-2xl font-bold cursor-pointer text-gray-700 hover:text-black" // Adjusted size and color
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button className="px-6 py-3 bg-black w-full text-white rounded-full text-sm sm:text-base font-semibold hover:bg-gray-800 transition-all cursor-pointer hover:animate-pulse flex-grow sm:flex-grow-0"> {/* Full width on mobile, adjusted text size, flex-grow for sm if needed */}
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}