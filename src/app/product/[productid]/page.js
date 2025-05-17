"use client"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-gray-800">SHOP.CO</a>
          <nav className="space-x-6">
            <a href="/shop" className="text-gray-600 hover:text-gray-900">Shop</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Product Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Image Gallery */}
          <div className="lg:w-1/2">
            <img
              src="/images/products/tshirt-main.jpg"
              alt="T-shirt with Tape Details"
              className="w-full h-auto object-cover rounded-lg shadow"
            />
            <div className="flex mt-4 space-x-4">
              <img src="/images/products/tshirt-1.jpg" alt="" className="w-20 h-20 object-cover rounded cursor-pointer hover:ring-2 hover:ring-gray-400" />
              <img src="/images/products/tshirt-2.jpg" alt="" className="w-20 h-20 object-cover rounded cursor-pointer hover:ring-2 hover:ring-gray-400" />
              <img src="/images/products/tshirt-3.jpg" alt="" className="w-20 h-20 object-cover rounded cursor-pointer hover:ring-2 hover:ring-gray-400" />
              <img src="/images/products/tshirt-4.jpg" alt="" className="w-20 h-20 object-cover rounded cursor-pointer hover:ring-2 hover:ring-gray-400" />
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-semibold text-gray-800">T-shirt with Tape Details</h1>
            <div className="flex items-center mt-2">
              {/* Stars (static) */}
              <div className="flex text-yellow-400">
                <svg className="w-5 h-5 fill-current"><use href="#icon-star-full" /></svg>
                <svg className="w-5 h-5 fill-current"><use href="#icon-star-full" /></svg>
                <svg className="w-5 h-5 fill-current"><use href="#icon-star-full" /></svg>
                <svg className="w-5 h-5 fill-current"><use href="#icon-star-full" /></svg>
                <svg className="w-5 h-5 fill-current"><use href="#icon-star-half" /></svg>
              </div>
              <span className="ml-2 text-gray-600">(4.5)</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-4">$120.00</p>

            {/* Color Options */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-600 uppercase">Color</h3>
              <div className="flex items-center mt-2 space-x-2">
                <button className="w-6 h-6 rounded-full bg-gray-800 border-2 border-gray-800 hover:border-gray-600 focus:outline-none"></button>
                <button className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 hover:border-gray-500 focus:outline-none"></button>
                <button className="w-6 h-6 rounded-full bg-red-600 border-2 border-red-600 hover:border-red-400 focus:outline-none"></button>
              </div>
            </div>

            {/* Size Selector */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-600 uppercase">Size</h3>
              <div className="flex items-center mt-2 space-x-3">
                <button className="px-4 py-2 border border-gray-300 rounded hover:border-gray-500 focus:outline-none">S</button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:border-gray-500 focus:outline-none">M</button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:border-gray-500 focus:outline-none">L</button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:border-gray-500 focus:outline-none">XL</button>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded">
                <button className="px-3 py-2 text-gray-600 hover:text-gray-800 focus:outline-none">−</button>
                <span className="px-4 text-gray-800">1</span>
                <button className="px-3 py-2 text-gray-600 hover:text-gray-800 focus:outline-none">+</button>
              </div>
              <button className="bg-gray-900 text-white px-6 py-3 rounded uppercase font-medium hover:bg-gray-800 focus:outline-none">
                Add to Cart
              </button>
            </div>

            {/* Description */}
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-gray-800">Description</h2>
              <p className="text-gray-700 mt-4 leading-relaxed">
                A classic unisex T-shirt featuring our signature tape detailing along the sleeves. Crafted from 100% organic cotton with a relaxed fit, perfect for everyday wear. Machine wash cold, tumble dry low.
              </p>
            </section>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Repeat this card for each related product */}
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
              <img src="/images/products/related-1.jpg" alt="Product name" className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800">Skinny Fit Jeans</h3>
                <p className="text-gray-600 mt-1">$95.00</p>
              </div>
            </div>
            {/* ...other related items */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">About</h4>
            <p className="text-gray-600">We have clothes that suit your style and which you’re proud to wear.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Help</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-800">Customer Support</a></li>
              <li><a href="#" className="hover:text-gray-800">Delivery Details</a></li>
              <li><a href="#" className="hover:text-gray-800">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Stay Updated</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
              />
              <button type="submit" className="px-4 bg-gray-900 text-white rounded-r hover:bg-gray-800 focus:outline-none">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-gray-500 py-4">
          © 2025 Shop.co — Made by Mohammad Oftadeh, Designed by Hamza Naeem
        </div>
      </footer>

      {/* SVG Star Icons (add this to your global layout or at the bottom of the page) */}
      <svg style={{ display: 'none' }}>
        <symbol id="icon-star-full" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z"/>
        </symbol>
        <symbol id="icon-star-half" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0v15z"/>
        </symbol>
      </svg>
    </div>
  );
}
