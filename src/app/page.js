"use client"
import Image from 'next/image';
import Script from "next/script";

export default function HomePage() {
  return (
    <div className="font-sans text-black bg-white">
      {/* Top banner */}
      <div className="bg-black text-white text-center text-xs p-2 h-[38]">
        Sign up and get 20% off on your first order. <a href="#" className="underline">Sign Up Now</a>
      </div>
      <ion-icon name="close-outline" class="absolute top-[9] right-8 text-white cursor-pointer text-2xl"></ion-icon>

      {/* Navbar */}

      <Script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        strategy="beforeInteractive"
      />
      <Script
        noModule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        strategy="beforeInteractive"
      />


      <header class="flex items-center justify-between px-6 py-2 shadow-sm h-[80px] top-[38px}">

        <div class="flex items-center space-x-4">

          <div class="text-2xl font-extrabold tracking-tight">SHOP.CO</div>


          <nav class="flex items-center space-x-6 text-sm text-gray-700">
            <div class="flex items-center gap-1 cursor-pointer">
              <span>Shop</span>
              <ion-icon name="chevron-down-outline" class="text-sm"></ion-icon>
            </div>
            <span class="cursor-pointer">On Sale</span>
            <span class="cursor-pointer">New Arrivals</span>
            <span class="cursor-pointer">Brands</span>
          </nav>
        </div>


        <div class="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-md mx-8">
          <ion-icon name="search-outline" class="text-gray-400 text-lg mr-2"></ion-icon>
          <input type="text" placeholder="Search for products..."
                class="bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 w-full" />
        </div>


        <div class="flex items-center space-x-6 text-xl text-black">
          <ion-icon name="cart-outline" class="cursor-pointer"></ion-icon>
          <ion-icon name="person-outline" class="cursor-pointer"></ion-icon>
        </div>
      </header>


      {/* Hero Section */}
      <div className='position-relative'>

        <Image src="/hero-image.png" alt="Hero" width={1980} height={663} className='absolute top-[120] left-0 w-[1980] h-[650] object-cover z-0' />
        <Image src="/Vector 1.png" alt="Vector 1" width={56} height={56} className='absolute top-[431] left-[750] w-[56] h-[56] object-cover z-0' />
        <Image src="/Vector 2.png" alt="Vector 2" width={104} height={104} className='absolute top-[220] left-[1255] w-[104] h-[104] object-cover z-0' />

        <div className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-16 relative z-10 w-[1000] h-[650]">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold ">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-gray-600">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className="bg-black text-white px-12 py-2 rounded-full">Shop Now</button>
            <div className="flex space-x-8 pt-4">
              <div><strong className='text-4xl font-semibold'>200+</strong><br />International Brands</div>
              <div><strong className='text-4xl font-semibold'>2,000+</strong><br />High-Quality Products</div>
              <div><strong className='text-4xl font-semibold'>30,000+</strong><br />Happy Customers</div>
            </div>
          </div>
  
        </div>
      </div>

      {/* Brands */}
      <div className="flex justify-between items-center px-6 md:px-16 py-8 bg-black top-[797px]">
        <Image key="versace" src={`/versace.png`} alt="versace" width={166.48} height={33.16}/>
        <Image key="zara" src={`/zara.png`} alt="zara" width={91} height={38}/>
        <Image key="gucci" src={`/gucci.png`} alt="gucci" width={156} height={36}/>
        <Image key="prada" src={`/prada.png`} alt="prada" width={194} height={32}/>
        <Image key="calvinklein" src={`/calvin.svg`} alt="calvinklein" width={206.79} height={33.35}/>
      </div>

      {/* New Arrivals */}
      <section className="px-6 md:px-16 py-10">
        <h2 className="text-2xl font-bold mb-6">NEW ARRIVALS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Image src="/tshirt1.png" alt="T-shirt with Tape Details" width={200} height={200} className="mx-auto" />
            <p className="mt-2">T-shirt with Tape Details</p>
            <p className="text-yellow-500">★★★★☆</p>
            <p className="font-bold">$120</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="border border-black px-4 py-2 rounded">View All</button>
        </div>
      </section>

      {/* Top Selling */}
      <section className="px-6 md:px-16 py-10">
        <h2 className="text-2xl font-bold mb-6">TOP SELLING</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Image src="/shirt1.png" alt="Vertical Striped Shirt" width={200} height={200} className="mx-auto" />
            <p className="mt-2">Vertical Striped Shirt</p>
            <p className="text-yellow-500">★★★★★</p>
            <p className="font-bold">$212</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="border border-black px-4 py-2 rounded">View All</button>
        </div>
      </section>

      {/* Browse by Dress Style */}
      {/* <section className="px-6 md:px-16 py-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center">BROWSE BY DRESS STYLE</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <div key={style} className="text-center">
              <Image src={`/${style.toLowerCase()}.png`} alt={style} width={200} height={200} className="mx-auto rounded-lg" />
              <p className="mt-2 font-semibold">{style}</p>
            </div>
          ))}
        </div>
      </section> */}
      <div className="flex justify-center">
        <Image src="/dress-style.png" alt="Dress Style" width={1239} height={866} className='' />
      </div>

      {/* Customer Reviews */}
      <section className="px-6 md:px-16 py-10">
        <h2 className="text-2xl font-bold mb-6">OUR HAPPY CUSTOMERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Sarah M.", "Alex K.", "James L."].map((name) => (
            <div key={name} className="p-4 border rounded-xl">
              <p className="text-yellow-500">★★★★★</p>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-600 mt-2">Customer review text goes here. Replace this with actual review.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black text-white p-6 text-center">
        <h2 className="text-xl font-bold mb-2">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
        <div className="flex justify-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-2 text-black rounded bg-white"
          />
          <button className="bg-white text-black px-4 py-2 rounded">Subscribe to Newsletter</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 p-6 md:p-16 border-t text-sm text-gray-600">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div>
            <h4 className="font-bold text-black mb-2">SHOP.CO</h4>
            <p>We have clothes that suit your style and which you’re proud to wear. From women to men.</p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Help</h4>
            <ul className="space-y-1">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">FAQ</h4>
            <ul className="space-y-1">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Resources</h4>
            <ul className="space-y-1">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>YouTube Playlist</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6">© Shop.co © 2000-2025, All Rights Reserved</div>
      </footer>
    </div>
  );
}
